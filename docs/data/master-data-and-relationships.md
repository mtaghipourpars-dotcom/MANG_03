# Master Data and Relationship Model

**Status:** Conceptual baseline v0.3. This is not a finalized physical database schema.

The detailed entity/cardinality catalogue, network diagrams, example topology, integrity rules, and MVP boundary are maintained in the [Conceptual Master Data and Issue–Solution Network Map](../architecture/conceptual-network-map.md).

## 1. Modeling principles

- Separate reusable master/configuration definitions from live case and transaction records.
- Represent the network with explicit, typed, contextual relationships; do not encode a fixed linear workflow.
- Preserve both the **reusable knowledge network** and the **case-specific graph**. A general relationship is not proof that it applies to a particular case.
- Support many-to-many links, conditions, validity periods, evidence, confidence, provenance, and versioning where relevant.
- Distinguish observed fact, externally sourced fact, assumption, hypothesis, and inference.
- Keep **feasibility ≠ priority**, **decision ≠ action ≠ resolution**, **relationship ≠ causality**, and **estimated impact ≠ observed impact**.
- Preserve history. Learning must not rewrite the context or evidence behind earlier decisions.

## 2. Reusable master/configuration entities

| Entity | Purpose | Examples / important attributes |
|---|---|---|
| Issue Type | Reusable issue classification | Missing component, equipment failure, capacity/manpower shortage, unclear engineering instruction, supplier delay, liquidity constraint |
| Solution Type | Reusable response pattern | Expedite supplier, approved alternate, authorized stock transfer, negotiate commitment, adjust liquidity plan |
| Relationship Type | Meaning of a network edge | `may_cause`, `may_affect`, `mitigates`, `requires`, `competes_for`, `alternative_to`, `duplicate_of`, `related_to` |
| Issue–Solution Applicability | Conditions linking issue and solution types | Preconditions, exclusions, evidence requirement, scope, confidence, validity |
| Impact Type | Reusable impact dimension | Delivery, margin, liquidity/cash flow, customer commitment, quality, safety, compliance, capacity |
| Resource Type | Reusable constrained-resource category | Material, equipment, manpower/skill, engineering capability, supplier capacity, money |
| Decision Profile + Version | Current decision priorities and evaluation criteria | Goals, weights/thresholds, exclusions, effective dates |
| Qualification Rule + Version | Transparent entry criteria | Accept, needs information, link/duplicate, redirect, not accepted |
| Operational Object Type / Source Mapping | Link to authoritative external objects | Project/WBS, production order, purchase order, sales order, material, contractual milestone |
| Organization / Role / Authority Rule | Scope and permissions | Review, decide, approve, escalate, execute |
| Outcome / Learning Category | Reusable classification of evidence and lessons | Must not replace the actual outcome evidence |

## 3. Live records (not master data)

- **Issue Intake:** initial submission, submitter, organizational context, evidence, timestamp, and qualification status. Retained regardless of disposition.
- **Qualification Assessment:** criteria evaluated, evidence, reviewer/rule version, rationale, and result.
- **Issue Case:** accepted formal case, linked to one or more issue types and operational objects.
- **Case Relationship:** contextual relation between cases (related, duplicate candidate, dependency, shared-resource conflict, possible cascade).
- **Case–Object Link:** explicit link from a case to an operational object, with relation meaning, source, and validation state.
- **Solution Candidate:** a solution type assessed for this case, including applicability, feasibility, impact estimates, resource needs, uncertainty, and ranking.
- **Feasibility / Impact / Resource Assessment:** separate evidence-bearing assessments; estimates are not observed facts.
- **Decision Record:** authorized choice, alternatives, rationale, profile/version, authority basis, and timestamp.
- **Decision–Option Link:** records selected, rejected, or retained options and the rationale.
- **Action Record + Assignment History:** assigned work, owner, due date, dependencies, status, evidence, and reassignment history.
- **Outcome Record:** observed execution results, actual effects, residual risk, and resolution/follow-up state.
- **Learning Record:** evidence-backed lesson derived from actual outcomes in comparable contexts.
- **Audit Event:** traceable record of important changes and transitions.

## 4. Core cardinalities

| Relationship | Cardinality | Rule |
|---|---|---|
| Issue Intake → Qualification Assessment | 1:N over time | Preserve reassessments and their rationale. |
| Issue Intake → Issue Case | 0..1 direct link; multiple intakes may link to one case | Duplicates may be linked without deleting the original intake. |
| Issue Case ↔ Issue Type | M:N | A case can represent several issue classes. |
| Issue Type ↔ Solution Type | M:N via Issue–Solution Applicability | Every candidate link is conditional, not universally applicable. |
| Issue Type ↔ Issue Type | M:N via typed relationship | Possible causes/effects and related classes must not be treated as proven causality. |
| Issue Case ↔ Issue Case | M:N via Case Relationship | Record relationship type, direction where applicable, evidence, and status. |
| Issue Case ↔ Operational Object | M:N | Many cases may affect one order/project; a case may affect multiple objects. |
| Issue Case → Solution Candidate | 1:N | Candidates are case-specific assessments of reusable patterns. |
| Solution Candidate ↔ Resource / Resource Window | M:N | Represent required, consumed, released, transferred, or competing resources. |
| Solution Candidate ↔ Impact Assessment | 1:N | Separate impact dimension, object, period, estimate, confidence, and assumptions. |
| Issue Case → Decision Record | 0:N | Cases can have no decision yet or revised decisions over time. |
| Decision Record ↔ Solution Candidate | M:N via Decision–Option Link | Preserve selected combinations and rejected alternatives. |
| Decision Record → Action Record | 1:N | One decision can create multiple actions. |
| Action Record → Assignment History | 1:N | Reassignment must not erase the previous owner. |
| Action Record → Outcome Record | 0:N | Support partial or multiple outcomes. |
| Outcome Record → Learning Record | 0:N | Learning is optional and must cite evidence. |
| Person ↔ Role ↔ Organization Unit | M:N via scoped assignment | People may hold multiple roles across scopes. |
| Authority Assignment ↔ Role / Person / Scope | M:N | Authority may depend on function, site, case type, impact, risk, or value. |
| Decision Profile → Profile Version | 1:N | Each decision records the version applied at the time. |

These are conceptual cardinalities, not final foreign-key or database decisions.

## 5. Qualification gate dispositions

1. **Accepted:** enters the formal Issue–Solution network.
2. **Needs information:** requests specific missing information from the submitter.
3. **Potential duplicate / linked:** connects to an existing case; preserve the original intake and allow review before merging.
4. **Out of scope / redirected:** preserve the reason and route to the appropriate process where possible.
5. **Not accepted with reason:** requires explicit criteria, rationale, and authorized review where configured.

The intake record remains traceable regardless of disposition. Initial solution candidates are presented only after qualification.

## 6. Relationship record minimum

Where applicable, a relationship should record: stable ID; source and target entity/ID; relationship type and direction; semantic meaning; case/context scope; applicability condition; effective dates and version; status; evidence/provenance; confidence; epistemic status (fact, assumption, hypothesis, inference); reviewer; and audit timestamps.

Use numerical weight only when its interpretation is defined. A relationship's existence must not automatically propagate impacts or establish causality.

## 7. Network integrity rules

- An association is not proof of cause.
- A component/equipment issue does not automatically imply delivery delay or financial loss.
- Apply generic knowledge only after checking case context and evidence.
- Keep feasibility separate from preference/ranking and delegated authority.
- A decision does not prove that actions completed or that the issue was resolved.
- A selected solution alone is not a valid success signal for learning.
- Keep estimated impacts separate from actual observed outcomes.
- Preserve intake, merge/link, relationship-version, decision, and assignment history.
- Link to existing ERP/operational objects; do not recreate production plans or authoritative operational data in this service.

## 8. MVP boundary and open decisions

For MVP, implement a small, explicit set of entity types and typed relationship records. A relational database is acceptable; this conceptual graph does not require a specialized graph database.

Suggested core: Issue Intake, Qualification Assessment, Issue Case, Issue Type, Solution Type, Issue–Solution Applicability, Case–Object Link, Solution Candidate, Decision Profile Version, Decision Record, Action Record, Outcome Record, and Audit Event.

Still open: final standard taxonomies; multiple-parent issue hierarchy; relationship types requiring human validation; confidence/evidence thresholds; time-phased resource detail; authoritative object-source mappings; authority thresholds; and whether later graph traversal needs a specialized store.


## 9. Financial impact and profile-based decisions

Each case-specific Solution Candidate may link to one or more **Financial Impact Assessments**. This is a live, contextual assessment, not an attribute copied from Solution Type. Record impact component, amount/range, currency, time horizon, baseline/comparison scenario, calculation method/version, source inputs, assumptions, confidence, and whether the value is estimated or observed. Distinguish direct cost, margin/profit effect, cash-flow timing, avoided loss/cost, opportunity cost, and evidenced contractual/delay effects. Prevent double counting across linked impacts.

A **Decision Profile Version** holds configurable priorities and parameter values (for example, sales commitments, liquidity, margin, delivery, quality/safety/compliance). A decision references the exact version and parameter values applied. Feasibility and hard constraints remain separate from profile-based preference/ranking.

## 10. Decision history and candidate visibility

A lower-level decision is a historical record, not a lock that removes other applicable candidates from higher-level review. Higher-authority users may select a different option within their authority and applicable constraints. Model this with a new or superseding Decision Record linked to the prior decision. Preserve both rationales and the profile versions used. If earlier actions have started, record authorized continuation, amendment, cancellation, or replacement; never silently overwrite them.
