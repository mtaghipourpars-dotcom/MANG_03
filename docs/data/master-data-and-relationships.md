# Master Data and Relationship Model

**Status:** Draft conceptual model. Not a finalized physical database schema.

## 1. Design rules
- Separate reusable master definitions from live case/transaction records.
- Model relationships explicitly rather than embedding a fixed workflow in code.
- Support many-to-many and conditional links.
- Store relationship meaning, applicability conditions, weight/priority where relevant, confidence/evidence, validity, and version history.
- Keep facts, assumptions, and hypotheses distinguishable.
- Preserve history; do not overwrite decision context or prior relationship versions when learning updates a recommendation.

## 2. Candidate master entities

| Entity | Purpose | Notes |
|---|---|---|
| Organization Unit | Departments, teams, sites, projects or other organizational scopes | May be synchronized from HR/ERP |
| Person / User | Authorized submitter, reviewer, decision-maker, action owner | Identity source and access policy remain implementation decisions |
| Role / Authority Assignment | Who can review, decide, approve, escalate, or execute within a scope | Authority may depend on amount, risk, function, site, or case type |
| Issue Type | Reusable taxonomy of common issue classes | Examples: missing component, equipment failure, capacity/manpower shortage, unclear engineering instruction, supplier delay, liquidity constraint |
| Solution Type | Reusable taxonomy of candidate response patterns | Examples: alternate source, substitute material, re-sequence work through existing planning process, transfer available material subject to approval, negotiate commitment date, adjust liquidity plan |
| Impact Type | Common impact categories | Delivery, margin, cash flow, safety/quality, customer commitment, resource utilization, compliance, etc. |
| Resource Type / Resource | Types and instances of constrained resources | Money, material, equipment, manpower, engineering capability, supplier capacity, etc. |
| Decision Profile | Named set of current priorities and evaluation criteria | Versioned and effective-dated |
| Qualification Rule | Transparent criteria for initial issue qualification | May be rule-based with human review; no opaque rejection |
| Operational Object Type | Type of external/live object | Project/WBS, production order, purchase order, sales order, material/component, contract milestone, etc. |
| Relationship Type | Semantics of a link in the network | Causes, may-affect, mitigates, requires, competes-for, alternative-to, depends-on, duplicate-of, related-to, etc. |
| Outcome / Lesson Category | Reusable categories for observed results and learning | Actual result must be distinguishable from interpretation |

## 3. Live records (not master data)
- **Issue Intake:** initial user submission, evidence, submitter, time, and status of qualification.
- **Issue Case:** formal case after acceptance; links to one or more issue types and operational objects.
- **Qualification Assessment:** criteria evaluated, evidence, reviewer/automation result, rationale, and disposition.
- **Case Relationship:** contextual relationship between this case and other cases.
- **Solution Candidate:** a candidate solution considered for a particular case, with applicability, feasibility, impact, required resources, estimates, uncertainty, and ranking.
- **Decision Record:** authorized choice, decision-maker, timestamp, rationale, alternatives considered, applied profile/version, and authority basis.
- **Action Record:** action, owner, due date, dependencies, status, and reassignment history.
- **Outcome Record:** actual execution result, observed effects, resolution status, residual risk, and evidence.
- **Learning Record:** lesson derived from observed evidence and comparable context.
- **Audit Event:** immutable history of important changes and transitions.

## 4. Core relationships
1. Issue Type ↔ Issue Type: related, potential cause, potential effect, or subtype; never assume causality solely from association.
2. Issue Type ↔ Solution Type: many-to-many; each link may have conditions, exclusions, expected impact, evidence, confidence, and validity.
3. Issue Case ↔ Issue Type: many-to-many; one live case may instantiate multiple issue classes.
4. Issue Case ↔ Operational Object: many-to-many; one issue may affect multiple orders/projects/commitments and one object may have multiple issues.
5. Issue Case ↔ Issue Case: related, duplicate candidate, dependent, shared-resource conflict, or possible cascade; relationship has type and provenance.
6. Solution Candidate ↔ Resource: requires, releases, consumes, transfers, or competes for a resource, with quantity/time window when known.
7. Solution Candidate ↔ Impact: expected positive/negative impacts, with estimate, confidence, and assumptions.
8. Decision Record → Solution Candidate(s): records the selected option or combination and the alternatives considered/rejected.
9. Decision Record → Action Record(s): one decision may generate multiple actions.
10. Action Record → Person/Role/Organization Unit: current owner plus assignment history; owner need not be the submitter or issue-origin department.
11. Action/Decision → Outcome: link actual results to the decision and its execution, including partial or unintended outcomes.
12. Outcome → Learning Record → future recommendations: learning changes recommendation evidence/ranking, not the historical record.

## 5. Suggested relationship attributes
At minimum, where applicable:
- relationship_id, source_entity, source_id, target_entity, target_id
- relationship_type
- condition / applicability rule
- direction and semantic meaning
- weight or priority (only when meaningful)
- confidence and evidence/source
- effective_from / effective_to, version
- created_by, reviewed_by, last_changed_at
- actual-versus-assumed marker

## 6. Qualification gate: initial dispositions
- **Accepted:** eligible for the formal Issue–Solution network.
- **Needs information:** returned to submitter with specific missing information.
- **Potential duplicate / linked:** connect to an existing case or request human confirmation before merging.
- **Out of scope / redirected:** record reason and, where possible, route to an appropriate process.
- **Not substantiated / not accepted:** only under explicit criteria and with rationale, reviewer/authority and audit history. Preserve the intake record.

These are conceptual dispositions, not yet a final status enum.

## 7. Open modeling decisions
- Whether a generic issue class can have multiple hierarchy parents (polyhierarchy).
- Which relationship types require human confirmation before impact propagation.
- How to represent time-phased resource availability and uncertainty in the first MVP.
- How operational-object identifiers are mapped across ERP and non-ERP systems.
- The exact authority matrix and escalation conditions.
- The initial list of standard issue and solution types.
