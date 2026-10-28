# Manufacturing Issue–Solution Matrix and Qualification Framework

**Document ID:** MANG03-MATRIX-ISSUE-SOLUTION-001  
**Version:** 1.0 — 2026-10-28  
**Status:** Proposed domain baseline for MVP/demo; validate taxonomy and thresholds with pilot users before production use.  
**Scope:** Cross-functional manufacturing and engineering organizations, including project-based / engineer-to-order operations.

## 1. Executive design decisions

1. **Capture first; qualify transparently.** Preserve every initial report even when incomplete, duplicate, out of scope, or not accepted.
2. **Separate intake from accepted Issue Case.** Qualification controls entry into the formal Issue–Solution process; it must not erase a report.
3. **Do not require submitters to diagnose root cause or calculate financial impact.** Ask what was observed, where/when, immediate risk, and available evidence.
4. **Do not use an opaque qualification score as the sole acceptance gate.** Use explicit checks, explainable rules, and human review for ambiguous/high-consequence cases.
5. **Do not make a solution mandatory at intake.** Solution discovery starts after qualification; an optional submitter suggestion is labelled as a hypothesis.
6. **Separate taxonomy from case facts.** A standard Issue Type or generic Issue–Solution relationship is reusable knowledge, not proof about a live case.
7. **Model many-to-many relationships.** One case may involve multiple issue types, operational objects, candidate solutions, constraints, and actions; one object may have multiple cases.
8. **Feasibility ≠ priority. Decision ≠ action ≠ resolution. Association ≠ causality. Estimated impact ≠ observed impact.**
9. **Keep human authority explicit.** The service supports decisions and actions; it does not autonomously modify detailed production schedules.
10. **Start with a controlled catalogue and extend through governed change.** Do not attempt to encode every plant-specific issue before a pilot demonstrates value.

## 2. Network layers

### 2.1 Reusable knowledge network
Reusable entities: Issue Domain and Issue Type; symptom/condition; possible Cause Type; Evidence Type and diagnostic question; Solution Type; Issue–Solution Applicability Rule; constraint/prerequisite/exclusion; Impact Dimension and Resource Type; Qualification Rule and version; Relationship Type and evidence state.

### 2.2 Live case network
Issue Intake; Qualification Assessment(s); accepted Issue Case; case-specific Issue Type assignment(s); evidence/observation; Case–Operational Object Link; Case Relationship; Solution Candidate(s); Feasibility Assessment; impact/resource assessment; decision and selected/rejected options; actions and assignment history; observed outcome and learning record.

### 2.3 Authority and execution context
Organization, role, owner, delegated authority, escalation rule, site/plant, project, production order, maintenance order, material, equipment, purchase order, sales order, customer commitment, quality lot, engineering change, and other source-system objects.

These layers connect but must not collapse into one fixed workflow or one table.

## 3. Standard manufacturing Issue domains

| Code | Domain | Typical Issue families | Primary evidence/context |
|---|---|---|---|
| MAT | Materials & Inventory | shortage, stock discrepancy, reservation conflict, obsolete/blocked stock, substitute request | material, plant/location, quantity, required date, stock/reservation, batch/status |
| SUP | Procurement & Supplier | late/uncertain delivery, supplier capacity, source quality, PO mismatch, commercial hold | PO/item, confirmation, promised/required date, supplier communication, open quantity |
| EQP | Equipment & Maintenance | breakdown, repeated failure, reduced performance, PM conflict, spare-part shortage | equipment/location, downtime, work order, failure code, availability window, safety state |
| QUA | Quality & Compliance | nonconformance, inspection failure, rework/scrap, traceability gap, audit finding, concession request | defect/evidence, lot/serial, inspection result, specification, containment, disposition |
| PRD | Production Execution | order not progressing, operation blocked, yield loss, rework loop, sequence conflict, plan/actual variance | production order/operation, routing, confirmations, yield/scrap, blocker, shift/time |
| CAP | Capacity & Scheduling Constraints | machine bottleneck, labor/skill capacity, shared-resource conflict, overload, unavailable work center | time window, capacity/load, skill, competing orders, setup/sequence constraints |
| ENG | Engineering & Configuration | missing/ambiguous drawing, BOM/routing error, design change, engineering release delay, technical deviation | revision, change notice, release state, affected objects |
| PRJ | Project & Delivery Commitments | milestone exposure, cross-project dependency, test delay, scope change, delivery readiness gap | project/WBS/milestone, baseline/current dates, contractual obligation, dependencies |
| LOG | Logistics & Internal Flow | transport delay, handling/storage constraint, inter-site transfer, packaging issue, material not at point of use | shipment/transfer, location, handling requirement, ETA, receipt/picking evidence |
| FIN | Finance & Liquidity | payment/credit hold, cash timing constraint, funding competition, cost exposure, margin pressure | due dates, approved financial data, amount/range/currency, timing, source/confidence |
| COM | Customer & Commercial | customer requirement conflict, specification clarification, delivery commitment change, warranty/claim, order change | sales order/contract, approved requirement, commitment, correspondence, authority |
| PPL | People, Skills & Organization | missing critical skill, absence, authorization/training gap, unclear ownership, staffing bottleneck | role/skill/certification, shift/time window, workload, owner/assignment history |
| SYS | IT, Data & Operational Systems | ERP/interface failure, stale master data, missing integration, report inconsistency, access issue | system/object, timestamp, error/log, source/target, impact scope, workaround |
| EHS | Safety & Environment | unsafe condition, near miss, environmental exceedance, permit/lockout concern, hazardous exposure | immediate condition, location, time, required reporting, evidence, containment |
| GOV | Process, Governance & Controls | approval delay, conflicting priorities, unclear authority, missing standard, control bypass, repeated unresolved issue | process step, rule/version, roles, timestamps, related cases, control evidence |
| EXT | External / Force Majeure / Infrastructure | utility outage, site restriction, regulatory change, transport disruption, external emergency | source/notice, affected site/time, confirmed scope, contingency dependency |

Domain membership is not exclusive. A case may have a primary and secondary domains. Primary domain supports routing/reporting; it must not erase cross-functional effects.

## 4. Issue Type record: minimum fields

Each reusable Issue Type should have:
- stable code and version; name and plain-language description;
- parent domain and optional subtype(s);
- inclusion criteria and explicit exclusions;
- recognizable symptoms, not asserted causes;
- suggested diagnostic questions and evidence types;
- likely affected operational object types;
- possible cause hypotheses, clearly marked as hypotheses;
- possible impacts to investigate, not assumed effects;
- applicable Solution Types and their conditions;
- urgency/safety/compliance flags where relevant;
- qualification rules or required fields by Issue Type;
- owner/steward, active status, effective dates, and change history.

Do not store a fixed financial impact, fixed priority, or guaranteed cause on the reusable Issue Type.

## 5. Qualification gate: ordered checks

The gate is an explainable set of checks, not one opaque score. Some checks are hard controls; others trigger clarification or human review.

| Step | Check | Pass condition | If not satisfied | Type |
|---|---|---|---|---|
| Q01 | Intake preserved | Unique intake ID and timestamp exist | Retry/queue safely; do not lose report | Mandatory system control |
| Q02 | Reporter/context | Reporter or permitted anonymous/source identity and context captured | Ask for context where feasible; allow authorized safety-reporting exception | Required/configurable |
| Q03 | Understandable statement | Reviewer can identify what was observed or reported | Needs information; ask a specific question | Qualification |
| Q04 | Observation vs interpretation | Facts, opinions, assumptions, suspected causes can be distinguished | Clarify labels; do not reject because root cause is unknown | Quality check |
| Q05 | Scope and location | Relevant site/process/object/time window known, or explicitly unknown with reason | Needs information or manual triage | Required where material |
| Q06 | Immediate danger | Safety, environmental, regulatory, product-safety or severe quality risk screened | Trigger emergency/mandatory local process immediately; do not wait for ordinary qualification | Hard safety escalation |
| Q07 | Containment/exposure | Immediate containment need identified when relevant | Escalate to responsible function; ordinary case may continue in parallel | Human review/urgent |
| Q08 | Evidence availability | Evidence attached/referenced or explicitly unavailable | Request evidence if material; do not require evidence reporter cannot access | Contextual |
| Q09 | Duplicate/related case | Similar active/recent cases checked; match has explainable basis | Mark potential duplicate and link; reviewer confirms disposition | Link, not silent reject |
| Q10 | Formal scope | Issue belongs to supported process or has clear redirect destination | Out of scope/redirect with reason; preserve intake | Qualification |
| Q11 | Actionability | A next diagnostic/review action can be defined, even if solution unknown | Route to triage or request clarification; do not require a proposed solution | Qualification |
| Q12 | Operational object linkage | Link to known project/order/material/equipment/contract if available | Keep unknown explicit; request only if needed | Contextual |
| Q13 | Classification | Primary Issue Type/domain selected with reasonable confidence | Use Unclassified / triage required; do not force a false category | Quality check |
| Q14 | Ownership/routing | Responsible review queue or owner can be assigned | Route to general triage; flag unowned intake | Operational control |
| Q15 | Contradiction/plausibility | Material conflicts in dates, quantities, objects are visible | Needs information or human validation; do not silently auto-correct facts | Quality check |
| Q16 | Duplicate disposition | Reviewer decides new case, linked case, or duplicate relationship | Keep pending if ambiguous; do not delete intake | Human review |
| Q17 | Acceptance decision | Explainable disposition and actor/rule authority recorded | Do not create accepted Issue Case without disposition | Mandatory gate |
| Q18 | Audit | Actor/rule version, time, result, rationale and evidence references recorded | Block state transition if audit cannot be persisted | Mandatory system control |

### 5.1 Qualification outcomes

- **Accepted:** formal Issue Case created or linked; first-stage case-specific Solution discovery becomes available.
- **Needs information:** specific missing items/questions, responsible party, expected response, and return path recorded.
- **Potential duplicate:** linked to suspected existing case with match rationale; human confirmation required.
- **Linked to existing case:** intake remains distinct and traceable; existing case may become the primary coordination case.
- **Out of scope / redirected:** reason and destination/process recorded.
- **Not accepted:** explicit reason and reviewer; use only under configured criteria.
- **Emergency escalation:** parallel safety/quality/compliance response initiated; not a substitute for preserving and qualifying the Issue.

A disposition can be revised with history. Do not use Rejected as a catch-all for incomplete, duplicate, low-priority, or currently infeasible reports.

## 6. Intake data-readiness levels

| Level | Meaning | Example | System behavior |
|---|---|---|---|
| D0 — Captured | Report exists and is traceable | “Machine stopped” | Save intake; send to triage |
| D1 — Understandable | Symptom, context and source clear enough to route | “Machine M-14 stopped at 10:20 on shift B” | Allow initial review |
| D2 — Assessable | Key evidence/scope available or absence explicit | Downtime log attached; affected order identified | Qualification decision can be made |
| D3 — Decision-ready | Options, constraints, resource/time windows and material uncertainty assessed | Maintenance, production and material implications checked | Candidate comparison/decision may proceed |
| D4 — Outcome-verified | Execution and observed results evidenced | Actual restart, yield, delay and residual risk recorded | Eligible for outcome review/learning |

These are data-readiness levels, not issue importance. An urgent safety issue can require immediate action at D0. Do not delay containment until D3.

## 7. Qualification rule patterns

### 7.1 Hard escalation / mandatory process
Credible immediate safety or environmental danger; product-safety or critical compliance exposure; suspected major quality escape requiring containment; critical system incident affecting operations; or a configured legally mandated reporting condition. Trigger the local emergency/control process in parallel. MANG_03 records/routes; it does not replace mandatory incident systems or site procedures.

### 7.2 Needs-information triggers
- no understandable symptom or question;
- essential object/site/time scope missing and materially changes routing;
- key evidence conflicts with narrative;
- an asserted impact is presented as fact without a source and this affects a decision;
- proposed solution depends on an unknown specification, approval, resource, or date.

Ask only for information that changes triage, feasibility, or decision quality. Avoid long mandatory forms for every submitter.

### 7.3 Potential duplicate/link triggers
- same operational object, symptom/defect code, time window and unresolved condition;
- new report appears to describe the same ongoing incident;
- multiple reports may represent one shared investigation;
- recurring symptom after a prior case was marked resolved.

Similarity prompts review; it is not proof of duplication or common cause. Keep recurrence distinct when event time, lot, asset, condition, or evidence differs.

### 7.4 Out-of-scope / redirect triggers
A routine transaction request better handled in the source ERP/service desk; unsupported domain with an identified receiving process; or a status request that asserts no new Issue. A real operational risk must not be redirected without a receiving path or explicit owner when feasible.

### 7.5 Not-accepted triggers
Use governed criteria, such as demonstrably invalid/spam/test record or a confirmed exact duplicate with a retained link. Lack of root-cause diagnosis, a proposed solution, high priority, or complete evidence alone is not sufficient reason to discard an intake.

## 8. Issue–Solution applicability matrix

These are solution patterns to consider, not automatic prescriptions. Every candidate needs case-specific prerequisites, constraints, authority, resources, timing, and evidence checks.

| Issue family | Solution patterns to consider | Preconditions/checks before recommendation | Typical owner functions | Do not assume |
|---|---|---|---|---|
| Material shortage/allocation | expedite existing supply; approved substitute; authorized stock transfer; recover blocked stock; split/partial supply; resequence work; negotiate commitment | stock/reservations verified; engineering/quality approval; transfer rules; supplier confirmation; competing demand/time window | Procurement, Materials, Engineering, Quality, Production, Project Control | stock is free to use, substitute approved, delivery delay certain |
| Supplier late/uncertain | confirm realistic date; supplier recovery plan; alternative supplier qualification; partial shipment; logistics option; commercial negotiation; revise authorized commitment | PO/contract; supplier evidence; qualification lead time; logistics/cost; customer/project authority | Procurement, Supplier Quality, Logistics, Commercial, Project Control | expediting will work or supplier fault is established |
| Equipment breakdown/degradation | safe isolation and repair; diagnostic inspection; spare recovery; approved temporary workaround; maintenance-window change; authorized capacity transfer; reliability investigation | safety/LOTO; competent personnel; equipment condition; spares; maintenance plan; production/quality validation | Maintenance, EHS, Production, Engineering, Stores | production can continue safely or repeated symptom has one proven cause |
| Quality nonconformance | contain/quarantine; inspect/segregate; approved rework; repair; concession/deviation approval; supplier corrective action; root-cause investigation | lot traceability; customer/regulatory requirements; authorized disposition; inspection capacity; safety implications | Quality, Engineering, Production, Supplier Quality, Commercial | rework permitted, full lot affected, cause proven |
| Production operation blocked | clarify blocker; engineering disposition; material/kit completion; machine/skill support; approved rework route; authorized resequencing; order split where permitted | order/operation status; routing/BOM revision; prerequisites; downstream effect; planner/production authority | Production, Engineering, Materials, Quality, Planning | sequence change harmless or system status equals physical reality |
| Capacity/shared-resource conflict | time-phased capacity review; alternate qualified resource; shift/overtime subject to policy; subcontracting; priority decision; resequence in authorized planning process | finite capacity/time window; skills; maintenance; competing orders/commitments; labor/safety/legal constraints | Planning, Operations, HR, Maintenance, Project Control | resource available just because idle now or MANG_03 may edit schedule |
| Engineering/BOM/routing ambiguity | clarify/release instruction; controlled engineering change; validate BOM/routing; technical deviation; prototype/test; impact assessment | released revision; change authority; effectivity; quality/safety/regulatory approval; affected inventory/orders | Engineering, Configuration Management, Quality, Production, Planning | unapproved drawing/BOM edit can be used |
| Project milestone/delivery exposure | verify critical path/forecast; resolve blocker; reallocate authorized resources; negotiate milestone; phased/partial delivery; recovery plan; scope/dependency review | baseline/current forecast; dependency evidence; contract terms; feasibility; resource competition; customer authority | Project Management, Planning, Engineering, Procurement, Production, Commercial | every open Issue threatens milestone or date change is authorized |
| Logistics/internal flow | locate/trace shipment; alternate route/carrier; authorized transfer; repack/relabel; point-of-use replenishment; receipt/picking priority | physical status; hazardous/handling constraints; customs status; location accuracy; cost/time/custody | Logistics, Warehouse, Procurement, EHS, Production | system posting proves physical movement |
| Liquidity/payment hold | validate due/hold reason; reschedule payment within policy; negotiate terms; prioritize critical payments; approved financing/advance; revise purchasing phasing | verified cash forecast; legal/contractual obligations; approval authority; supplier continuity risk; currency/timing | Finance/Treasury, Procurement, Commercial, Executive | postponement permissible or cash saved equals net benefit |
| Customer/specification conflict | clarify requirement; controlled change request; technical/commercial deviation; revise delivery/acceptance plan; negotiate trade-off | contract/approved specification; customer authority; quality/regulatory implications; schedule/cost evidence | Sales/Commercial, Engineering, Quality, Project Management | informal communication changes contractual obligations |
| Skill/ownership bottleneck | qualified backup; training/certification; approved staffing/shift change; clarify decision rights; transfer ownership; external support | skill matrix; availability window; labor rules; authorization; handover; competence/safety requirements | Operations, HR, Engineering, Quality, line management | any available person is competent/authorized |
| IT/data/system issue | restore/retry interface; controlled manual workaround; reconcile source/target; governed master-data correction; incident escalation; data-quality remediation | logs/timestamps; source of truth; duplicate/partial posting risk; access/change controls; operational fallback | IT, Basis/Application Support, Data Owner, Process Owner | retry is safe or dashboard value is current/authoritative |
| Safety/environment | stop/secure/isolate; emergency response; containment; notify designated function; risk assessment; authorized corrective action | site emergency procedure, competent authority, evidence and legal reporting | EHS, Operations, Site Leadership | ordinary qualification should delay protection |
| Governance/approval delay | identify missing decision/right; delegate within policy; escalate to proper authority; clarify evidence/criteria; time-box review; resolve conflicting priorities | authority matrix; conflict of interest; required approvals; audit requirements; policy constraints | Process Owner, Functional Manager, Senior Management | bypassing approval is acceptable shortcut |
| Utility/external disruption | confirm scope/duration; safe shutdown/continuity; alternate utility/logistics; contingency supplier/site; prioritize recovery; communicate approved commitment changes | authoritative notice; safety/technical compatibility; capacity/cost/recovery estimate; dependency map | Site Operations, Maintenance, EHS, Procurement, Logistics, Executive | external estimate is certain or contingency automatically available |

A candidate can map to several Issue Types and an Issue Type can map to several Solution Types. Every mapping needs applicability conditions, exclusions, required evidence, potential risks, and review/version state.

## 9. Standard Solution Type record

Each reusable Solution Type should define:
- stable ID/code, version, name and intent;
- problem classes it may address and applicability conditions;
- prerequisites and evidence;
- hard exclusions/contraindications;
- required approvals, qualifications, and authority;
- resource types and possible time windows required/released/consumed;
- high-level implementation steps, not a substitute for a controlled work instruction;
- expected benefit dimensions and potential adverse effects;
- common failure modes and rollback/containment option;
- required operational object types and source references;
- action templates, completion evidence, and outcome checks;
- owner/steward, evidence basis, maturity, effective dates, and change history.

A Solution Type is reusable knowledge. A Solution Candidate is the specific proposal assessed for a live case. Keep them separate.

## 10. Typed relationship catalogue

| Relationship | Meaning | Evidence/control |
|---|---|---|
| is-a | Taxonomy/subtype relation | Governed classification |
| symptom-of | Observed symptom may be associated with an issue type | Case evidence; not root cause |
| possible-cause-of | Hypothesized causal direction | Label hypothesis; case validation required |
| validated-cause-of | Cause supported/confirmed in this case | Evidence, reviewer, validation method/date |
| may-affect | Possible impact on object/process/commitment | Context and impact path needed |
| observed-effect-on | Effect observed in this case | Observation/source/time |
| mitigates | Solution pattern may reduce issue/impact | Applicability and known limits |
| requires | Candidate requires prerequisite/resource/approval | Explicit prerequisite and state |
| blocked-by | Progress prevented by current blocker | Case-specific evidence and owner |
| competes-for | Two cases/options need same scarce resource/time window | Resource/time-window evidence |
| depends-on | Action/candidate depends on another item | Direction, condition, owner |
| alternative-to | Candidate options are alternatives in context | Compatibility/exclusivity conditions |
| duplicate-candidate-of | Possible duplicate report/case | Similarity rationale; human disposition |
| linked-to | General contextual link where stronger semantics are unjustified | Relation rationale required |
| supersedes | New decision/configuration version replaces current effective one | Preserve prior record and authority |
| verified-by | Claim supported by evidence | Evidence reference and verifier |
| contradicts | Evidence/claim conflicts with another record | Preserve both; assign resolution action |

Do not automatically traverse every relationship as a causal chain. Only approved, condition-satisfied rule types may drive suggestions; no relationship alone proves causality.

## 11. Candidate retrieval and generation rules

When an Issue Case is accepted:
1. Confirm primary/secondary Issue Type assignments and relevant operational context.
2. Retrieve Solution Types linked by active Issue–Solution Applicability Rules.
3. Apply conditions: site, product family, revision/effectivity, material/asset status, approval state, resource/time window, legal/safety/quality restrictions.
4. Label each result:
   - **Potentially applicable:** conditions appear to match; still needs case assessment.
   - **Needs verification:** key applicability data is missing.
   - **Not applicable:** known exclusion or unmet hard prerequisite; record reason.
   - **Used in comparable cases:** show outcome evidence and context, not a guarantee.
5. Instantiate a case-specific Solution Candidate only through an explicit user/system rule; preserve source Solution Type and applicability-rule version.
6. Assess feasibility, impacts, resource requirements, uncertainty, and priority separately.
7. If no known solution maps, allow a new/unclassified candidate with evidence and review; do not force a false match.

Never auto-recommend solely because a solution type is linked to an Issue Type. Never hide an applicable candidate from higher-authority review merely because a lower-level manager chose another option.

## 12. Impact and constraint dimensions

Use separate dimensions, not one blended severity number: safety/environment/product safety; regulatory and contractual compliance; quality and traceability; delivery/commitment exposure; production throughput/capacity; direct implementation resources/cost; margin/profit effect; cash-flow timing/liquidity; scarce/shared-resource competition; execution risk and reversibility; customer/service effect; data/system integrity.

For each case-specific impact, record target object, time horizon, expected direction, estimate/range, evidence, confidence, assumptions, and owner. Unknown is distinct from zero. Hard constraints are gates, not weights that a high score elsewhere can offset.

## 13. Qualification, urgency, priority, feasibility, authority

- **Qualification:** Is the report understandable, in scope, traceable, and ready for the formal case process?
- **Urgency:** Is immediate containment/escalation needed?
- **Priority:** Relative to other qualified work, what should be addressed first under current context/profile?
- **Feasibility:** Can a candidate be executed under its constraints and resource/time window?
- **Decision authority:** Who is permitted to choose or authorize it?

Do not reject an Issue because it has low priority. Do not lower qualification quality because an Issue is urgent. Urgency is not proof of business impact. An urgent issue may require immediate containment before complete evidence is available.

## 14. MVP screens and workflow behavior

### ISSUE menu
- **Issue List:** search, filters, status, owner, domain, project/object, age, urgency reason.
- **New Issue / Intake:** concise form; optional attachments and suggested related object; no mandatory root cause or solution.
- **Issue Detail:** narrative, facts/assumptions, evidence, object links, qualification history, questions, duplicate/related links, audit trail.
- **Qualification Workbench:** checklist results, missing-information request, duplicate review, routing, disposition and rationale.

### SOLUTION menu
- **Solution Workspace:** accepted Issue context, candidate list, applicability status, unknowns and constraints.
- **Candidate Assessment:** feasibility, impact dimensions, resource/time-window needs, evidence, uncertainty.
- **Candidate Comparison:** shared profile/version, common criteria, hard constraints, missing-data coverage, explanation.
- **Decision preparation/record:** selected/rejected alternatives, rationale, authority, frozen targets, actions to create.

These screens do not duplicate source-system transaction processing. They link to authoritative operational objects and support decisions around them.

## 15. Audit and data integrity

For every intake, qualification, classification, relationship, candidate, assessment, decision, and disposition change, retain stable ID and record type; actor/system rule and timestamp; previous/new value or version; reason/evidence; source/provenance and confidence; parent Issue Case and external object IDs; qualification-rule, taxonomy, applicability-rule, and profile versions where used.

Cross-page controls:
- HOME card counts reconcile with ISSUE LIST filters.
- Every candidate opened from SOLUTION retains the exact parent Issue Case ID.
- Qualification history is auditable; changed dispositions append new assessment records.
- Potential duplicate does not delete or overwrite either intake.
- Case-specific causal claims require case-specific evidence and status.
- Candidate exclusions show reasons.
- Unknown and missing data remain visible.
- Reusable catalogue changes do not rewrite prior assessments or decisions.
- Demo data are visibly marked illustrative.

## 16. Governance and catalogue lifecycle

Each Issue Type, Solution Type, relationship definition, qualification rule, and applicability rule has owner/steward; status (Draft, In Review, Approved, Deprecated); version/effective dates; change rationale/reviewer; scope (enterprise/site/product/process family); source/evidence basis and maturity; and backward compatibility note where needed.

Lifecycle: Draft → Review → Approved → Active → Deprecated, retaining historical references. Do not delete catalogue items used by historical records. New case evidence can propose a taxonomy/relationship update, but must not automatically rewrite the approved network; a human steward reviews generalized lessons.

## 17. MVP implementation priorities

### Required for first usable demo
1. Intake persistence and qualification dispositions.
2. Starter Issue Domain/Type catalogue.
3. Starter Solution Type catalogue and conditional Issue–Solution mappings.
4. Case-specific candidate instantiation.
5. Typed relationships with evidence/epistemic status.
6. Candidate feasibility/impact assessments with Unknown handling.
7. Explicit audit trail and traceable duplicate links.
8. HOME → ISSUE LIST → ISSUE DETAIL → SOLUTION navigation.
9. Demo seed scenario with clearly marked sample records.

### Defer until validated
- automatic root-cause inference;
- broad machine-learned ranking;
- autonomous impact propagation across the enterprise graph;
- full digital-twin simulation;
- automatic production schedule changes;
- universal financial quantification;
- specialized graph database unless query/performance evidence requires it.

## 18. Acceptance checklist

- [ ] Incomplete intake can be saved without inventing missing fields.
- [ ] Safety/critical compliance signals trigger configured urgent routing without waiting for ordinary qualification.
- [ ] Qualification result always has a reason and actor/rule version.
- [ ] Duplicate candidates remain separate and traceable until reviewed.
- [ ] Out-of-scope records retain redirect reason and history.
- [ ] Root cause and solution are not mandatory at intake.
- [ ] Formal Issue Case is created only after explicit accepted disposition.
- [ ] Candidate retrieval shows why a Solution Type is potentially applicable, needs verification, or is excluded.
- [ ] Candidate's reusable Solution Type and rule version remain traceable.
- [ ] Facts, assumptions, hypotheses, inferences, estimates, and outcomes are distinguishable.
- [ ] Hard constraints cannot be offset by a weighted score.
- [ ] Feasibility, priority, urgency, authority, decision, action, and resolution are separate.
- [ ] Important changes are auditable and historical versions reproducible.
- [ ] One Issue may link to multiple operational objects and candidate solutions.
- [ ] Model does not infer delivery delay, financial loss, or root cause from association alone.
- [ ] Catalogue/rule changes do not silently rewrite historical cases.
- [ ] Demo data are clearly labelled, not represented as live ERP facts.

## 19. Pilot validation questions

Before production use, validate with process owners:
- Which domains and Issue Types are in scope for the first pilot?
- Which emergency/quality/compliance paths are mandatory at each site?
- Which source system is authoritative for each object, date, quantity, status, and revision?
- What counts as duplicate versus recurring/new incident?
- Which qualification fields are essential by Issue Type, and which remain optional?
- Which Solution Types are approved, prohibited, or conditional by site/product/process?
- Who owns each taxonomy/rule and approves changes?
- What evidence threshold is required before a cause/impact link can be marked validated?
- What local legal, safety, labor, quality, customer, and regulatory rules constrain solution patterns?
- What measurable pilot criteria should be tracked: time to triage, rework due to missing data, duplicate handling, decision traceability, and outcome evidence coverage?

These questions remain open intentionally: a generic manufacturing baseline must not fabricate company-specific policies, source mappings, or approval thresholds.
