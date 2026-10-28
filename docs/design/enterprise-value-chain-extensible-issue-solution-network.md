# Enterprise Value-Chain Issue–Solution Knowledge Network

**Document ID:** MANG03-ARCH-ISSUE-SOLUTION-NETWORK-002  
**Version:** 1.0  
**Status:** Proposed architecture baseline for MVP/demo  
**Date:** 2026-10-28

## 1. Architecture decision

MANG_03's Issue–Solution matrix is an **enterprise-wide, user-extensible knowledge network**, not a manufacturing-only taxonomy. Manufacturing is one initial context; the model must support the full organizational value chain and cross-functional dependencies.

Users can create new Issue Types and Solution Types from the working screen through ADD / New Issue or ADD / New Solution. This is a domain-data operation, not a code change. The system checks for existing equivalents, proposes related entries and quality rules, and preserves human review for uncertain or governed changes.

Extensibility must not mean uncontrolled catalogue growth, silent merging, automatic causal claims, or automatic approval of a new solution for operational use.

## 2. Enterprise value-chain coverage

| Domain family | Illustrative scope |
|---|---|
| Strategy & enterprise performance | strategic objectives, portfolio alignment, KPI deviation, scenario assumptions, enterprise trade-offs |
| Sales, customers & commercial commitments | demand, bids, contracts, customer requirements, delivery promises, claims, order changes |
| Demand, S&OP & production planning | forecast, demand/supply balance, capacity plan, order priority, schedule constraints |
| Procurement & suppliers | sourcing, RFQ, supplier capacity, purchase orders, delivery, commercial terms |
| Materials, inventory & warehousing | shortages, reservations, stock accuracy, blocked stock, obsolete stock, kitting, warehouse flow |
| Engineering & product design | requirements, design maturity, drawings, revisions, technical risks, engineering changes |
| Product development / R&D / product evolution | concept, prototype, validation, product lifecycle, design-for-manufacture, qualification |
| Manufacturing engineering & industrialization | process design, routings, tooling, work instructions, manufacturing readiness, yield improvement |
| Production & operations | order execution, operation blockers, throughput, rework, scrap, shift handover, shop-floor constraints |
| Equipment, maintenance & utilities | breakdown, reliability, preventive maintenance, spare parts, power, water and other utilities |
| Quality & regulatory compliance | inspection, nonconformance, traceability, corrective action, audit, certification, product safety |
| Projects, programs & portfolio | milestones, dependencies, cost/schedule exposure, project resources, change control, delivery readiness |
| Logistics, transport & delivery | inbound/outbound movement, customs, packaging, transport capacity, dispatch and site transfer |
| Finance, treasury & controlling | liquidity timing, cash forecast, payment constraints, margin, cost exposure, budget, credit and currency risks |
| Human resources & organization | skills, competence, staffing, absence, organization design, role clarity, training, workforce constraints |
| IT, digital, data & cybersecurity | application incidents, integration, master data, reporting integrity, access, availability and cyber controls |
| Legal, contracts, risk & governance | obligations, approvals, delegated authority, dispute, policy, internal control and enterprise risk |
| EHS, facilities & business continuity | safety, environment, facilities, emergency response, continuity and site constraints |
| Shared services & administration | document control, facilities services, internal service levels, records and administrative bottlenecks |
| Knowledge, process & continuous improvement | recurring problems, standards, lessons learned, process gaps, improvement proposals and change adoption |
| External ecosystem | regulation, infrastructure, market disruption, force majeure and external dependencies |

Domains are a starter catalogue, not a fixed list. Organizations can add, extend, rename, retire, or scope catalogue items through governed configuration. A case may cross several domains. Primary domain supports navigation/reporting but must not erase secondary relationships.

## 3. Two separate user-extensible catalogues

### 3.1 Issue Type

A reusable Issue Type describes a kind of reported condition, not a live case. Recommended fields: stable ID/code; name and plain-language definition; parent domain/type; synonyms and language variants; inclusion/exclusion criteria; examples and near-miss distinctions; observable symptoms; diagnostic questions; evidence types; affected object types; possible impacts to investigate; possible causes explicitly marked as hypotheses; linked Solution Types via versioned applicability rules; qualification rule set; steward, scope, lifecycle status, version, effective dates and history.

Do not store a fixed priority, financial impact, or guaranteed cause on a reusable Issue Type.

### 3.2 Solution Type

A reusable Solution Type describes an intervention pattern, not a selected case-specific decision. Recommended fields: stable ID/code, name, purpose, parent category and synonyms; Issue Types it may address; applicability conditions; prerequisites and hard exclusions; evidence requirements; required approvals and competence; resource types and time windows; high-level implementation steps and controlled work-instruction links; expected benefits by dimension and potential adverse effects; failure modes and rollback/containment; completion evidence and outcome checks; owner, evidence basis, maturity, scope, lifecycle status and version history.

A new Solution Type is not automatically approved for execution. Keep reusable Solution Type separate from the case-specific Solution Candidate.

## 4. ADD / New Issue inline journey

1. The user describes the issue in their own operational language and chooses ADD / New Issue when no catalogue item fits.
2. Search the enterprise catalogue using exact terms, synonyms, language variants, semantic similarity, taxonomy and related entries.
3. Show explainable matches: likely existing match, similar-but-distinct types, suggested parent, and why each match was returned.
4. Offer explicit choices: Use existing; Create child/subtype; Create new Issue Type; Save provisional / needs review; Cancel.
5. Ask only the minimum metadata needed to define a reusable type. Preserve the live intake narrative and evidence separately.
6. Suggest parent domain, synonyms, inclusion/exclusion criteria, relevant object types, qualification questions and possible relationships. Suggestions must be editable and labelled as proposed.
7. Generate a draft qualification-rule proposal from enterprise-mandatory controls, parent templates, declared characteristics, and approved domain rules.
8. Check duplicate code, circular parent relationships, contradictory definitions, missing steward, unsafe mandatory requirements, and ambiguous scope.
9. Save with stable ID, creator, timestamp, version, status, source narrative reference and review state.
10. Continue the intake without losing user input. Where policy allows, a provisional type can support triage while catalogue approval is pending.

Do not silently merge types based only on similarity or rewrite historical classifications when catalogue entries are linked, renamed, or deprecated.

## 5. ADD / New Solution inline journey

1. Capture the proposed intervention in plain language.
2. Search existing Solution Types, synonyms, comparable actions and related Issue Types.
3. Show likely matches and differences with reasons.
4. Offer Use existing, Create child/subtype, Create new, Save provisional, or Cancel.
5. Capture intended problem context, benefit/mechanism hypothesis, prerequisites, known risks, resource needs, approvals and verification evidence; allow Unknown.
6. Suggest applicability links to Issue Types, marked Proposed with rationale and confidence—not as proven cause/effect.
7. Propose a checklist for prerequisites, safety/quality/legal controls, authority, resources, evidence and completion checks.
8. Record creator, version, scope, provenance, review state and history.
9. Save as draft/provisional; do not make it enterprise-approved or executable merely because it was created.
10. In a live case, create a separate Solution Candidate referencing the reusable Solution Type. The candidate carries case-specific feasibility, impact, resource, timing, evidence and authority assessments.

One Solution Type may link to many Issue Types, and one Issue Type may link to many Solution Types. Each relationship is versioned, scoped and conditional.

## 6. How the system should infer relationships

Use multiple explainable signals:
- lexical and synonym match;
- semantic similarity of descriptions;
- same or nearby parent domain/type;
- shared process stage or operational object type;
- overlapping symptoms, evidence types or diagnostic questions;
- complementary or contradictory prerequisites;
- known applicability rules and explicit exclusions;
- prior reviewed links and outcomes in comparable contexts.

Distinguish **match confidence** from **business validity**. Similarity suggests what to review; it does not prove two issues are identical, that one causes another, or that a solution is applicable.

Relationship statuses: Proposed, In Review, Approved, Rejected, Deprecated. Preserve candidate matches, signals, reviewer disposition, rationale, algorithm/rule version and timestamps.

Relationship semantics should include parent/child, synonym-of, similar-to, symptom-of, possible-cause-of, validated-cause-of, may-affect, observed-effect-on, mitigates, requires, blocked-by, depends-on, competes-for, alternative-to, duplicate-candidate-of, linked-to, verified-by, contradicts and supersedes. Direction, evidence requirements and permitted downstream uses must be defined for each type.

## 7. Dynamic qualification rules for new Issue Types

A new Issue Type receives a **proposed rule template**, not an automatically trusted bespoke rule. Build it from:
1. enterprise-wide mandatory controls;
2. parent domain/type rule inheritance;
3. declared issue characteristics and risk flags;
4. linked object types and evidence needs;
5. approved site/process-specific rules;
6. human-reviewed additions or exceptions.

Rule inheritance must be inspectable. A child type can add stricter checks but cannot silently weaken mandatory safety, legal, product-safety, audit or access controls. Conflicts must be surfaced.

Each rule records stable ID/version, scope, condition, required question/evidence, severity, result if unmet, owner, effective dates, rationale and whether mandatory or configurable.

Qualification outcomes remain explicit: Accepted, Needs information, Potential duplicate/link, Out of scope/redirected, Not accepted with reason, and Emergency escalation in parallel. Never use an opaque score as the sole acceptance gate. Do not require a reporter to know root cause, calculate financial impact or propose a solution.

## 8. Governance and safe extensibility

Separate two operations:
- Creating a case-specific Issue or Solution Candidate, subject to case permissions.
- Creating/changing a reusable catalogue definition or relationship, with lifecycle state, steward and review rules.

For MVP, users can create new Issue/Solution Types as Draft or Provisional from the working screen. A designated reviewer can approve/activate them; the initial demo need not hide screens by role, but creator, reviewer and approver fields remain in the data model.

Minimum lifecycle metadata: ID/code, record type, parent, version, status, scope, creator and timestamp, steward, reviewer and approval timestamp, effective dates, provenance, evidence basis, rationale, match/review links, prior/current version references and change history.

Never hard-delete catalogue records used by historical cases. Deprecate or supersede them. Proposed relationships must not drive automatic recommendations until approved and their conditions are satisfied.

## 9. UX requirements

### Issue Intake
- Primary field: “What happened / what needs attention?”
- Search suggestions while typing; show + Add new Issue Type when no match is adequate.
- Distinguish the reusable Issue Type from the specific Issue record.
- Preserve the intake before requesting extensive taxonomy details.
- Use a compact inline panel or drawer for new-type creation.

### Issue Detail
- Separate reported facts from assumptions/hypotheses.
- Show primary/secondary domains and types, qualification state, missing information and related cases.
- Explain relationship rationale and review status.
- Keep intake, case and catalogue-definition IDs distinct.

### Solution Workspace
- Separate + Add Solution Type from + Add case-specific candidate.
- Explain applicability status and why a solution was suggested.
- Expose prerequisites, exclusions, missing evidence, resource needs and authority.
- Never present a generic link as a guaranteed fix.

### Catalogue Stewardship
- Search/filter Issue Types, Solution Types, rules and relationship types.
- Compare versions; review proposed links; approve/reject with rationale; deprecate/supersede.
- Surface potential duplicates, missing owners, broken parent links, conflicting rules and unreviewed relationships.

## 10. Minimum data-model extensions

Ensure the model supports:
- CatalogItem identity/version/status/scope metadata or equivalent typed records;
- IssueType and SolutionType with parent relationships and synonyms;
- CatalogProposal for provisional definitions/change requests;
- CatalogMatchSuggestion with candidate, signals, explanation, algorithm version and disposition;
- CatalogRelationship with typed semantics, direction, scope, conditions, status, evidence and version;
- QualificationRule and QualificationRuleSet with inheritance, override rules and mandatory/configurable distinction;
- CatalogReview with reviewer, disposition, rationale and timestamps;
- CatalogChangeEvent/audit record;
- CaseIssueTypeAssignment and CaseSolutionCandidate, separate from reusable catalogue definitions.

Relational tables with typed relationship records are sufficient for MVP; a graph database is not required. Use stable IDs and queryable relationships rather than unvalidated free-form JSON.

## 11. Integrity and acceptance criteria

- Every new Issue/Solution preserves original user-entered text.
- Similarity suggestions are explainable; no silent merges.
- Intake can proceed while catalogue review is pending where policy permits.
- Generated qualification rules are marked Proposed until approved.
- Mandatory controls cannot be weakened by child configuration.
- Unreviewed links do not silently drive recommendations.
- Generic relationships do not imply causality or case-specific applicability.
- Historical cases retain exact catalogue/rule versions used.
- Users can add domains, Issue Types, Solution Types, synonyms, relationships and rule templates without code deployment, subject to governance.
- Definitions, relationships, rules and reviews are auditable.
- Merge/link/deprecate actions preserve historical references and record disposition.
- Unknown data stays Unknown.
- Demo records are visibly illustrative.
- Cross-page navigation preserves exact Issue Case ID and parent context.

## 12. MVP delivery sequence

1. Enterprise-wide taxonomy and extensible catalogue data model.
2. Inline Add New Issue Type and Add New Solution Type.
3. Search/similarity suggestions with explainable matches and human disposition.
4. Proposed qualification-rule generation through inherited templates.
5. Typed/versioned relationships and review state.
6. Seed catalogue across value-chain domains.
7. Demo journey: new issue → qualify → find/create solution type → case-specific candidate → assess → decide → action → outcome review.
8. Catalogue stewardship and audit UI after the core journey is visually validated.

## 13. Pilot decisions still required

Validate initial domains/subtypes, who can create provisional types and approve/activate catalogues, enterprise-mandatory versus site-specific rules, match thresholds, minimum metadata by domain, source-system authority, permitted relationship types and evidence thresholds, and pilot success measures. Do not fabricate organization-specific approvals, statutory rules, ownership or thresholds.
