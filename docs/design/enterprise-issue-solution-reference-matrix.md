# Enterprise Issue–Solution Reference Matrix

**Document ID:** MANG03-DES-ISSUE-SOLUTION-MATRIX-003  
**Version:** 2.0 | **Status:** Enterprise-wide reference baseline; pilot validation required  
**Date:** 2026-10-28

## 1. Purpose and architecture decision

This is the canonical MANG_03 Issue–Solution reference matrix. It replaces a manufacturing-only framing with an enterprise-wide, user-extensible model for issues, opportunities, constraints, risks, decisions, actions and observed outcomes across the full organizational value chain.

The matrix is a configurable reference taxonomy, not a claim that every organization has every process or issue. Users may propose new reusable Issue Types and Solution Types from the working interface without code deployment. The system suggests matches, relationships and qualification templates, but does not silently merge entries, invent causality, or automatically approve solutions.

The design draws on public cross-industry process classification, project/portfolio risk management, asset lifecycle management, quality-management practice and enterprise/manufacturing integration. It does not reproduce a proprietary company playbook or claim that any public standard prescribes this exact matrix.

## 2. Non-negotiable design principles

1. Enterprise-wide: include strategy, market, commitments, product lifecycle, delivery, support and enabling functions—not production alone.
2. Cross-functional: a case can span several domains; primary classification must not erase secondary relationships.
3. Issue Type is a reusable definition; Issue Case is a specific reported situation.
4. Solution Type is a reusable intervention pattern; Solution Candidate is an option assessed for one case.
5. Preserve the original intake before requiring perfect classification.
6. Make qualification transparent; never use an opaque score as the sole acceptance gate.
7. Separate observed fact, reporter interpretation, system inference, possible cause and validated cause.
8. Separate qualification, urgency, priority, feasibility, authority and expected value.
9. Unknown/Not assessed is not zero, false, low impact or no risk.
10. A solution link means potentially applicable under stated conditions, not guaranteed effectiveness.
11. User-facing catalogue authoring is deferred beyond MVP; the data model must support later proposals and governed activation.
12. MANG_03 supports human decisions and traceability; it does not autonomously change detailed production schedules or silently execute ERP transactions.
13. Freeze catalogue, rule and impact-parameter versions at decision time; learn from verified execution outcomes.
14. Model shared-resource competition across cases: cash, people, machines, suppliers, test capacity and management attention.
15. Qualitative ratings are not currency and must not be presented as false financial precision.

## 3. Enterprise value-chain domain matrix

IDs are stable seed identifiers, not hard-coded workflow stages. Organizations can add child domains or rename local labels through governed configuration.

| ID | Domain | Representative issue families | Typical solution patterns |
|---|---|---|---|
| STR | Strategy and enterprise performance | strategic objective drift; conflicting objectives; KPI deterioration; invalid scenario assumptions; capability gap; strategic opportunity | strategy review; scenario analysis; objective/measure reset; portfolio rebalancing; capability investment |
| MKT | Market, customer and commercial | demand shift; customer complaint; lost bid; pricing pressure; claims; requirement change | customer recovery; bid/no-bid review; pricing review; contract clarification; change control |
| SAL | Sales and order management | forecast quality; order error; quote delay; order change; credit hold; promise-date conflict | forecast correction; order correction; promise revalidation; commercial review; customer communication |
| COM | Contracts and commitments | unapproved commitment; conflicting obligations; milestone at risk; scope ambiguity; acceptance dispute | obligation mapping; authorized change; contract interpretation; milestone recovery; acceptance-plan agreement |
| DEM | Demand, S&OP and integrated planning | demand/supply imbalance; infeasible aggregate plan; forecast volatility; priority conflict; capacity overload | scenario-based S&OP; demand shaping; reallocation; capacity review; priority arbitration |
| PRC | Procurement and sourcing | sourcing delay; requisition/PO bottleneck; commercial mismatch; single-source exposure | expedite; alternate source qualification; sourcing event; PO correction; make/buy review |
| SUP | Supplier performance and continuity | late delivery; quality escape; capacity shortfall; supplier continuity risk; allocation issue | supplier recovery; capacity reservation; alternate supplier; supplier development; incoming controls |
| MAT | Materials, inventory and warehousing | shortage; reserved-but-unavailable stock; discrepancy; blocked/obsolete stock; wrong revision; kitting gap; excess stock | verify stock; allocate; transfer; expedite; approved substitution; cycle count; disposition; replenish |
| ENG | Engineering and product design | incomplete requirement; drawing/BOM mismatch; design defect; late release; revision conflict; technical uncertainty | design review; requirement clarification; engineering change; verification; controlled release |
| NPD | Product development, R&D and lifecycle | prototype failure; test gap; concept uncertainty; qualification delay; technology maturity gap; obsolescence | experiment; prototype iteration; verification/validation; technology assessment; lifecycle transition |
| MFG | Manufacturing engineering and industrialization | routing not ready; tooling gap; process capability; work instruction missing; industrialization delay; manufacturability concern | process engineering; tooling action; pilot run; capability study; controlled work-instruction release |
| PLN | Production planning and scheduling | infeasible sequence; missing capacity/material; priority conflict; schedule instability; lead-time assumption error | constraint-based rescheduling; order arbitration; recovery; master-data correction |
| OPS | Production and operations | operation blocked; throughput loss; rework/scrap; yield loss; shift handover gap; WIP accumulation | containment; structured investigation; bottleneck action; standard-work correction; process adjustment |
| AST | Assets, maintenance and reliability | breakdown; repeated failure; PM overdue; spare unavailable; asset degradation; backlog; utility loss | safe restore; repair; failure investigation; condition monitoring; spare strategy; lifecycle replacement |
| QUA | Quality, product assurance and compliance | nonconformance; customer escape; audit finding; traceability gap; calibration overdue; process drift; ineffective corrective action | containment; disposition; corrective action; reinspection; validation; calibration recovery; effectiveness review |
| EHS | Environment, health, safety and process safety | imminent hazard; near miss; exposure; environmental exceedance; permit breach; emergency readiness gap | emergency escalation; isolate/stop unsafe work; risk control; investigation; engineering control; remediation |
| PRJ | Projects, programs and portfolio delivery | milestone slip; critical-path threat; scope change; cost overrun; dependency failure; resource conflict; acceptance delay | recovery plan; dependency resolution; approved rebaseline; scope trade-off; resource arbitration |
| LOG | Logistics, transport and delivery | inbound delay; transport shortage; customs hold; packaging failure; dispatch miss; site-access constraint | alternate route/mode; expedite; customs resolution; packaging correction; delivery-window renegotiation |
| FIN | Finance, treasury and controlling | liquidity timing gap; cash forecast variance; margin erosion; budget overrun; blocked payment; credit/currency exposure | cash forecast; payment negotiation; collection acceleration; cost review; margin recovery; budget reallocation |
| TAX | Tax and statutory reporting | filing risk; tax data mismatch; statutory deadline threat; evidence gap | reconciliation; specialist review; evidence remediation; deadline escalation; controlled correction |
| HR | Human resources and workforce | skill shortage; critical vacancy; absence concentration; labor conflict; onboarding delay; training gap; retention risk | redeployment; training; succession action; workforce planning; qualified contractor; role clarification |
| ORG | Organization, authority and governance | unclear ownership; decision-right conflict; approval bottleneck; duplicate accountability; policy conflict | authority clarification; role assignment; governance decision; delegation update; policy alignment |
| ITD | IT services, applications and integrations | outage; interface failure; data latency; report mismatch; access issue; capacity or change failure | restore; integration repair; controlled change; workaround; service-capacity action; problem management |
| DAT | Data, analytics and master data | duplicate master; inconsistent KPI; stale data; missing lineage; mapping error; model drift | master-data correction; reconciliation; validation rule; data contract; lineage/owner assignment |
| CYB | Cybersecurity and information protection | suspicious activity; excessive access; vulnerability; leakage risk; backup/recovery gap; third-party exposure | contain/escalate; revoke access; patch/mitigate; incident response; restore test; security review |
| LEG | Legal, ethics, privacy and disputes | legal exposure; privacy issue; dispute; evidence hold; conflict of interest; policy violation; IP concern | legal review; containment; formal response; evidence preservation; control remediation |
| RSK | Enterprise risk, resilience and continuity | emerging threat; risk-limit breach; dependency concentration; continuity gap; crisis scenario; control failure | risk treatment; contingency; diversification; stress test; continuity exercise; limit review |
| FAC | Facilities, utilities and site services | facility failure; workspace constraint; utility interruption; access/security issue; service backlog | repair; alternate facility; capacity adjustment; provider recovery; continuity arrangement |
| SSC | Shared services and administration | processing backlog; internal service failure; records gap; service-level dispute | queue balancing; standardization; self-service; service-level agreement; workflow simplification |
| IMP | Process excellence and continuous improvement | recurring issue; process waste; unstable standard; improvement opportunity; lessons not reused | A3/PDCA; value-stream review; standardization; bounded experiment; process redesign; benefit verification |
| EXT | External disruption and ecosystem | regulatory/geopolitical change; infrastructure outage; market shock; force majeure; external dependency | scenario response; alternate route/source; contingency; contract review; exposure reduction |
| INN | Innovation and transformation | transformation dependency; adoption resistance; unrealized benefits; architecture mismatch; experiment failure | pilot; staged rollout; architecture decision; adoption intervention; benefit review; stop/scale decision |
| PMO | Shared-resource and portfolio constraints | scarce expert conflict; shared machine bottleneck; cash allocation conflict; supplier-capacity conflict; executive attention overload | cross-case arbitration; resource leveling; opportunity-cost comparison; protected capacity; defer/stop/resequence |

Sector-specific domains—power, rail, aerospace, chemicals, mining, pharmaceuticals, construction or utilities—can be added as children without changing the shared data model.

## 4. Cross-cutting issue archetypes

| Archetype | Meaning | Example | Qualification caution |
|---|---|---|---|
| Deviation/nonconformance | Actual differs from requirement, target or approved baseline | output below target | Capture requirement and actual evidence |
| Risk/threat | Uncertain event may harm an objective | supplier failure may affect delivery | Not an observed incident |
| Opportunity | Plausible intervention may improve an objective | alternate design may reduce lead time | Benefit remains a hypothesis until measured |
| Constraint/bottleneck | Limited resource or rule restricts feasible options | one test rig serves several projects | Represent shared-resource competition |
| Dependency/interface | Progress depends on another object, team or event | engineering release precedes procurement | Dependency does not imply fault |
| Decision/trade-off needed | Authorized choice among competing options is required | cash can cover only selected obligations | Can exist without process failure |
| Change/change request | Proposed or actual change to approved baseline | customer changes acceptance criteria | Preserve old and new baselines |
| Incident/disruption | Event requires response and restoration | utility interruption | Separate immediate response from systemic correction |
| Recurrence/systemic weakness | Similar issues repeat or a control fails | repeated supplier escapes | Similarity does not prove common cause |
| Information/evidence gap | Decision blocked by missing or conflicting information | reports show different dates | Missing data is not a negative fact |
| Capability/readiness gap | Required competence, technology or capacity is absent | test capability not qualified | Define required capability and date |
| Obligation/compliance exposure | Contractual, legal, regulatory or policy duty may be breached | filing deadline at risk | Qualified jurisdiction-specific review may be required |
| Improvement proposal | Proposed process or performance improvement | reduce purchase-approval handoffs | Proposal is not an approved action |
| Stakeholder concern | Stakeholder reports unmet need or perceived harm | customer challenges promise date | Separate perception from verified facts |

## 5. Intake and qualification matrix

### 5.1 Intake is preserved

Every submission receives a stable Intake ID and preserves original narrative, reporter, timestamp and evidence. An intake can be incomplete, duplicated, misclassified, out of scope or not accepted and must remain traceable. A formal Issue Case is created when qualification rules permit or when an emergency path requires it.

Minimum fields: narrative; reporter and time; organization/site where known; affected process/object/customer/project if known; evidence/source; immediate safety/security/quality/legal concern flag; optional desired outcome, known constraint and suggested domain; confidentiality/language metadata where relevant.

Do not require root cause, a proposed solution, quantified financial loss or a complete impact assessment at intake.

### 5.2 Qualification rules Q01–Q24

| ID | Check | Rule behavior | If unmet |
|---|---|---|---|
| Q01 | Preserve intake | Save original narrative, author, time and evidence before classification | Show save failure; never claim acceptance |
| Q02 | Emergency triage | Identify imminent safety, cyber, product-safety, environmental or evidence-preservation concern | Parallel urgent escalation; do not wait for full qualification |
| Q03 | Understandable statement | Can a reader understand what happened or needs attention? | Ask focused question; preserve intake |
| Q04 | Facts vs interpretation | Separate observation, interpretation, assumption and unknown | Clarify; do not reject automatically |
| Q05 | Context/object | Identify relevant process, item, order, asset, project, customer, contract or system where applicable | Mark missing; type-dependent requirement |
| Q06 | Requirement/baseline | For a claimed deviation, identify target, requirement, commitment or baseline if available | Keep suspected deviation if unknown |
| Q07 | Proportionate evidence | Ask for evidence appropriate to risk and type | Needs evidence or provisional assessment |
| Q08 | Duplicate search | Search open and historical cases using text, objects, dates and links | Suggest review; never silently merge |
| Q09 | Existing type search | Search type catalogue, synonyms and similar definitions | Use existing, subtype or propose new |
| Q10 | Scope | Check configured enterprise/site/project scope | Redirect with reason or route to authorized owner |
| Q11 | Actionability | Is investigation, decision, action or explicit referral plausible? | Explain disposition; preserve record |
| Q12 | Object link | Suggest related ERP/project/asset/customer/contract objects only when grounded | Unknown allowed; no fabricated links |
| Q13 | Impact dimensions | Identify possible dimensions to assess without presuming actual impact | Mark not assessed |
| Q14 | Controlled-domain safeguards | Check quality, EHS, cyber, legal, privacy and regulatory controls | Apply mandatory controls where configured |
| Q15 | Classification consistency | Check parent/child, synonyms, contradictory labels and domain fit | Suggest correction; reviewer decides |
| Q16 | Ownership/routing | Propose role/function from configured responsibility map | Unassigned queue if uncertain |
| Q17 | Authority | Identify who may qualify, decide, approve or execute | Route/escalate; never infer personal authority |
| Q18 | Contradiction check | Detect conflicting dates, quantities, statements or evidence | Preserve both sources and request reconciliation |
| Q19 | Qualification decision | Record outcome, reason, rule version and decision-maker | No silent acceptance or rejection |
| Q20 | New type proposal | If no type fits, propose definition and inherited rule template | Draft/Provisional; intake can continue where policy permits |
| Q21 | Data readiness | Label captured, understandable, assessable, decision-ready or outcome-verified | Show missing prerequisites |
| Q22 | Cross-case dependency | Find related cases and shared resources | Suggest links; no assumed causality |
| Q23 | Privacy/access | Check confidentiality, personal data and role access | Restrict visibility and route appropriately |
| Q24 | Auditability | Record changes, review decisions and versions | Block governed state transition if audit cannot be preserved |

### 5.3 Qualification outcomes

- ACCEPTED: enough basis and scope to create/manage a formal case.
- NEEDS_INFORMATION: preserved intake with explicit missing information.
- PROVISIONAL: triage can proceed while evidence/classification is pending where policy permits.
- POTENTIAL_DUPLICATE: review suggested; no automatic merge.
- LINKED_TO_EXISTING: separate intake linked to confirmed case; original report preserved.
- OUT_OF_SCOPE_REDIRECTED: reason and destination recorded.
- NOT_ACCEPTED: authorized disposition and reason recorded; no deletion.
- EMERGENCY_ESCALATION: parallel urgent path even with missing information.
- OPPORTUNITY_REVIEW: positive improvement proposal routed for assessment, not mislabeled as a defect.

## 6. Reusable Solution Type archetype matrix

Solution Types are patterns, not guaranteed prescriptions. Local safety, technical, legal, financial and operational approval may be required.

| ID | Archetype | Typical use | Preconditions and verification |
|---|---|---|---|
| SOL-01 | Contain/protect | Limit harm while facts are investigated | safe authority; scope; verify containment and release criteria |
| SOL-02 | Restore/recover | Restore service, asset, supply or operation | approved safe procedure; verify restored function and residual risk |
| SOL-03 | Diagnose/investigate | Resolve uncertainty about state or cause | hypothesis and evidence plan; record conclusion or remaining uncertainty |
| SOL-04 | Correct immediate condition | Fix verified error or nonconformance | controlled correction; inspect/test and record change |
| SOL-05 | Corrective action/systemic prevention | Address validated cause or control weakness | evidence supports cause; review effectiveness later |
| SOL-06 | Replan/resequence | Change timing or sequence within authority | current constraints and dependencies; approved plan/baseline |
| SOL-07 | Reallocate shared resources | Resolve competition for cash, people, machines or capacity | time-phased availability and opportunity cost; verify allocation |
| SOL-08 | Expedite/alternate source or route | Reduce supply or logistics delay | quality, contract, cost, capacity and route checks; confirm delivery |
| SOL-09 | Design/engineering change | Change product, process, requirement or configuration | impact analysis and configuration control; verify approved revision |
| SOL-10 | Process redesign/standardization | Remove recurring waste or unstable work | baseline and owner; verify sustained performance |
| SOL-11 | Capacity/capability investment | Add equipment, tools, people, skills or technology | lifecycle cost, demand and alternatives; verify capability and benefits |
| SOL-12 | Train/redeploy/clarify role | Address competence or ownership gap | skill/authority requirements and availability; demonstrate competence/ownership |
| SOL-13 | Data/system correction | Fix data, integration, application or access issue | source of truth, change/security controls; reconcile and test |
| SOL-14 | Commercial/contract/customer agreement | Resolve scope, price, promise or obligation conflict | authorized negotiation/legal review as needed; approved agreement |
| SOL-15 | Cash/financial treatment | Manage timing, exposure, cost or margin | verified forecast/cost facts and finance authority; compare actuals to assumptions |
| SOL-16 | Risk treatment/contingency | Reduce exposure or prepare response | scenario, trigger, owner and residual risk; test controls |
| SOL-17 | Compliance/formal remediation | Correct legal, regulatory, audit or policy gap | competent review; verify closure and effectiveness |
| SOL-18 | Defer/stop/descope | Avoid infeasible or value-destroying work | authority and obligation review; update commitments and notify stakeholders |
| SOL-19 | Pilot/experiment/learn | Test uncertain improvement or technology | bounded hypothesis, guardrails and stop criteria; measured scale/stop decision |
| SOL-20 | Accept/monitor/no action | Accept bounded residual exposure | authorized acceptance, trigger and review date; monitor |
| SOL-21 | Negotiate demand/change promise | Align demand with real capacity or supply | customer/contract authority; confirm revised commitment |
| SOL-22 | Improve control/monitoring | Detect deviation earlier or prevent recurrence | signal, threshold owner and response path; verify alert/response quality |
| SOL-23 | Portfolio/strategic trade-off | Resolve competing objectives or investments | comparable alternatives, constraints and strategy; record rationale |
| SOL-24 | Emergency response/safe shutdown | Respond to imminent danger or critical disruption | approved emergency plan and competent responders; verify safe state and review |

## 7. Issue–Solution applicability rules

A relationship means POTENTIALLY APPLICABLE, never guaranteed success. Conditions, prerequisites, exclusions, evidence, competence and approvals must be explicit. Evaluate multiple candidates in parallel. A technically relevant solution may still be infeasible due to timing, authority, safety, cash, shared resources or dependencies. No feasible solution is a valid result and must trigger escalation/trade-off analysis.

| Issue family | Candidate patterns to consider | Important controls / do not assume |
|---|---|---|
| Material shortage | verify stock; allocate; expedite; alternate source; approved substitute; replan | substitution requires appropriate technical/quality/customer approval; do not assume recorded stock is usable |
| Design maturity gap | clarify requirement; engineering change; prototype/test; resequence | do not procure/build against unapproved revision without authorized exception |
| Cash timing gap | refresh cash forecast; prioritize obligations within authority; negotiate terms; accelerate collections; stage commitments | qualitative impact rating is not a cash forecast |
| Repeated equipment failure | safe restore; investigate failure; correct maintenance/process; lifecycle replacement review | symptom similarity does not prove root cause |
| Delivery milestone risk | validate critical path; verify supply/capacity; recovery plan; authorized commitment change; resource reallocation | one component delay does not prove final-delivery delay |
| Data mismatch | establish source of truth; reconcile lineage/timing; correct mapping/control; rerun validation | do not overwrite authoritative source without authorization |
| Skill constraint | verify skill/authorization; redeploy; train; hire/contract; resequence | headcount is not proof of competence |
| Quality nonconformance | contain; determine affected scope; authorized disposition; corrective action; effectiveness check | completion is not proof of effectiveness |
| Customer complaint | protect customer; verify facts; contract/quality review; recovery and communication | reported perception and verified fact remain separate |
| Strategic opportunity | scenario analysis; bounded pilot; portfolio trade-off; scale/stop | do not treat projected benefits as observed outcomes |
| Cyber incident | contain/escalate; preserve evidence; restore securely; correct control | do not disclose sensitive evidence beyond authorized access |
| External disruption | verify source; scenario response; alternate source/route; contingency; obligation review | scenario is not confirmed fact |
| Shared resource conflict | time-phased resource analysis; compare consequences; arbitrate; defer/stop | no universal score or requester seniority alone should decide |
| No feasible candidate | expose failed constraints; relax/sequence/defer/stop only with authority | never fabricate feasibility or hide failed candidates |

## 8. Typed relationship matrix

| Relationship | Meaning | Evidence and permitted use |
|---|---|---|
| IS_A | child type is subtype of parent | taxonomy review; may inherit templates; no cycles |
| SYNONYM_OF | alternate label for same concept | steward confirmation; search expansion; do not merge historical cases |
| SIMILAR_TO | concepts share traits but differ | explainable comparison only; not identity |
| DUPLICATE_CANDIDATE_OF | possible duplicate definition/case | human review queue; no silent merge |
| POSSIBLE_CAUSE_OF | causal hypothesis | investigation suggestion only; source/context recorded |
| VALIDATED_CAUSE_OF | cause supported in a defined context | evidence, reviewer, date and scope; no universal generalization |
| SYMPTOM_OF | sign may indicate a condition | triage suggestion; not proof |
| MAY_AFFECT | potential effect on object/objective | impact prompt; not observed impact |
| OBSERVED_EFFECT_ON | recorded measured effect | source and time; causal attribution still requires evidence |
| MITIGATES | intervention may reduce issue/risk | conditional candidate retrieval; not guaranteed resolution |
| REQUIRES | prerequisite relation | feasibility gating; not authority unless explicitly defined |
| BLOCKED_BY | current progress blocked by another item | case evidence and time context; not necessarily root cause |
| DEPENDS_ON | progress depends on event/resource/decision | sequencing review; no fault attribution |
| COMPETES_FOR | cases need same scarce resource/time window | enterprise trade-off and opportunity cost |
| ALTERNATIVE_TO | options may substitute toward same objective | comparison; not equal feasibility |
| CONTRADICTS | claims/rules/evidence conflict | preserve both sources and reconcile |
| SUPERSEDES | new definition replaces old prospectively | approval and mapping; never rewrite history |
| LINKED_TO | relevant relation without stronger claim | navigation only; no causality/applicability assumption |
| VERIFIED_BY | claim/action/outcome checked by evidence/control | assurance record |
| APPLIES_WHEN | conditional applicability expression | versioned conditions; filter suggestions |
| OWNED_BY | accountability relation to role/function | approved responsibility map; no invented personal assignment |

Each relationship has direction, scope, conditions, evidence, status (Proposed/In Review/Approved/Rejected/Deprecated), creator/reviewer, version and timestamps. Generic links never silently imply causality, authority or approval.

## 9. Impact, urgency, priority, feasibility and authority

Consider safety, environment, product safety, customer/service, contractual commitment, delivery date, dependencies, cash timing/liquidity, margin/cost/budget, quality/reliability, scarce-resource use, legal/regulatory/cyber/privacy, strategic objectives, reversibility and uncertainty.

Initially use manager-owned qualitative scales (e.g., 1–5) with explicit anchors and a declared direction per dimension. Unknown is separate from zero or 1. Do not sum ratings and call the result money. Weighted aggregation, if used, is a prioritization aid only; hard constraints remain outside the score. Record evidence, confidence and rationale.

- Qualification: is there enough basis and scope to route/manage this intake?
- Urgency: how quickly is response needed to prevent harm/loss?
- Priority: relative importance versus other work.
- Feasibility: can the candidate be implemented within constraints?
- Authority: who may approve the decision/action?
- Expected impact: estimate/hypothesis before execution.
- Observed impact: measured result after execution.

At decision time, freeze parameter/rule/catalogue versions, targets/thresholds and rationale. Compare actual results to frozen targets. A critical target breach remains visible and cannot be offset by another positive dimension. Outcome labels: Successful, Partially Successful, Unsuccessful, Unknown, each with evidence and rationale.

## 10. Catalogue behavior and MVP scope boundary

### 10.1 MVP decision: no user-facing NEW ISSUE / NEW SOLUTION

To reduce MVP complexity, users cannot create new reusable Issue Types or Solution Types from the interface in the MVP. The enterprise-wide catalogue and its data model remain designed for later extension, but runtime catalogue authoring, AI-generated taxonomy, user-managed qualification templates and approval workflows for new types are deferred to a later version.

The MVP uses a curated, versioned seed catalogue maintained through controlled project/configuration updates. This is a deliberate release-scope decision, not a limitation on the long-term product architecture.

### 10.2 MVP Issue intake behavior

1. Preserve the submitted intake narrative, reporter, timestamp and evidence before requiring complete classification.
2. Search the existing Issue Type catalogue using names, synonyms and configured terms; show relevant candidates where available.
3. Let the user select an existing type, or choose **Not sure / Other — classification review required** when no listed type fits. This is a case classification state, not a new Issue Type.
4. Do not display a **NEW ISSUE** or **ADD ISSUE TYPE** action in the MVP.
5. Route unclassified items to a review queue so an authorized steward can map them to an existing type. If the catalogue genuinely lacks a type, record the gap for a later controlled catalogue update; do not lose or block the intake merely because the type is missing.
6. Similarity results are suggestions, not automatic identity or automatic merging. The user/reviewer must confirm links or duplicate dispositions.

### 10.3 MVP Solution behavior

1. Retrieve applicable patterns from the existing, curated Solution Type catalogue and show their conditions, prerequisites, cautions and required approvals.
2. Let users assess case-specific Solution Candidates derived from the catalogue or record a case-specific option within the MVP's supported fields; a case-specific option must not create a reusable Solution Type.
3. Do not display a **NEW SOLUTION** or **ADD SOLUTION TYPE** action in the MVP.
4. If no catalogue pattern fits, record **No suitable catalogue solution / manual review required** and allow escalation. Do not force-fit a misleading solution or mark the case infeasible without assessment.
5. Reusable Solution Type authoring, AI-generated Solution Types, relationship proposals and their review/approval workflow are deferred to a later version.

### 10.4 Later-version extensibility requirements (preserved, not MVP functionality)

When introduced in a later release, NEW ISSUE and NEW SOLUTION should:
- Search existing definitions and explain likely matches and differences.
- Offer use-existing, create-subtype, create-new, save-provisional and cancel paths.
- Generate only proposed definitions, qualification templates, synonyms and conditional relationships; never silently approve AI-generated content.
- Capture creator, provenance, steward, version, status, review history and effective dates.
- Inherit enterprise-mandatory controls and parent templates; child definitions may strengthen but may not silently weaken mandatory safety, legal, cyber, product-safety, privacy, audit or access controls.
- Keep reusable types separate from case-specific issues and solution candidates.
- Preserve history when definitions are deprecated or superseded.

### 10.5 Catalogue governance in MVP

The MVP must still support stable catalogue IDs, explicit definitions, synonyms supplied in the curated data, controlled versions, statuses, auditability and non-destructive deprecation. Catalogue updates are performed through a controlled maintainer/release process, not by ordinary users at runtime. Unreviewed links/rules cannot silently drive recommendations.

## 11. Core entities and separation of concerns

- IssueIntake: original report, reporter, source and evidence.
- IssueCase: accepted/provisional case and lifecycle state.
- IssueType and SolutionType: reusable definitions.
- SolutionCandidate: option assessed for one case.
- QualificationAssessment, QualificationRuleSet and QualificationRule: explicit versioned criteria.
- CatalogProposal: proposed new/changed definition or relationship.
- CatalogMatchSuggestion: candidates, signals, explanation, algorithm version and disposition.
- CatalogRelationship: typed, directed, conditional, scoped and versioned link.
- DecisionRecord: authorized choice, alternatives, rationale, conditions and dissent where needed.
- Action: owner, deliverable, due date, dependencies, status and completion evidence.
- ResourceConstraint: resource pool, time-phased availability, allocation and competing demand.
- ImpactAssessment: dimension, estimate/observation, scale/value, confidence, source and version.
- OutcomeReview: observed result versus frozen target, evidence, label and learning.
- CatalogReview/AuditEvent: review disposition, changes and traceability.
- OrganizationAuthority: roles, responsibilities, escalation and approval boundaries.

Relational storage with typed relationship records is sufficient for MVP; graph database is not mandatory. Avoid storing the whole network as unvalidated free-form JSON. Historical cases retain exact type, rule and parameter versions used.

## 12. Decision, action and learning lifecycle

1. Capture intake and evidence.
2. Qualify using explicit rules and preserve unresolved items.
3. Form a case and identify accountable investigation/decision owner.
4. Understand facts, hypotheses, constraints and affected objectives.
5. Retrieve applicable approved patterns and allow case-specific candidates.
6. Assess conditions, feasibility, time-phased resources, risk, impact and uncertainty.
7. Authorized human decides, records alternatives/rationale/conditions; escalate if no feasible option.
8. Plan actions with owners, due dates, dependencies, approvals and evidence.
9. Execute in authorized systems/processes; MANG_03 does not silently replace ERP/CMMS/PLM/MES.
10. Verify action completion; completion is not proof of resolution.
11. Review actual outcome against frozen target/baseline.
12. Propose knowledge/rule updates from verified evidence; review before generalizing.

## 13. Governance and data integrity

- Never hard-delete a catalogue entry referenced by history; deprecate/supersede.
- Never silently merge cases or definitions.
- Unreviewed links/rules cannot silently drive recommendations.
- A generic relationship does not prove case-specific applicability.
- Keep source facts, interpretation, inference and approved conclusions distinguishable.
- Track confidentiality, personal data, retention, source-system authority and data freshness.
- No fabricated live data, financial amount, cause, commitment or owner.
- Record reviewer rationale for merge/link/reject/deprecate decisions.
- Preserve audit history and require human authorization for controlled decisions/actions.
- Emergency response must not wait for complete taxonomy classification.

## 14. MVP acceptance criteria

- Users can submit an issue even if no catalogue type fits; the intake is preserved as unclassified / review required.
- Matching suggestions are explainable and allow selection of an existing type or an unclassified review path.
- The MVP has no user-facing NEW ISSUE or NEW SOLUTION authoring actions.
- Catalogue updates are controlled maintainer/release operations in the MVP.
- Later-version requirements for user-proposed types, inherited qualification templates and conditional links remain documented but inactive.
- Reusable Solution Type and case-specific candidate remain separate.
- Every suggestion has provenance and a disposition path.
- Unreviewed relationships do not imply causality or drive approved recommendations.
- Qualification, urgency, priority, feasibility and authority are separate.
- Shared-resource conflicts across cases can be represented.
- No feasible solution is a visible supported state.
- Outcome review compares observed result with frozen target.
- Catalogue changes do not rewrite history.
- Cross-page navigation preserves exact case ID and context.

## 15. Public reference frameworks informing this design

These sources inform coverage and design principles, not a claim of certification or exact reproduction.

- APQC Process Classification Framework: hierarchical, adaptable cross-industry process taxonomy; encourages coverage of operating and management/support processes and horizontal cross-functional processes. https://www.apqc.org/process-frameworks
- PMI Risk Management in Portfolios, Programs and Projects: risk lifecycle, uncertainty, opportunities/threats and enterprise risk context. Used to distinguish risk from incident and connect project/portfolio cases with competing objectives/resources. https://www.pmi.org/standards/risk-management
- ISO 55000:2024 Asset Management: lifecycle thinking, organizational objectives and value realization. Used to cover reliability and lifecycle trade-offs beyond isolated breakdown tickets. https://www.iso.org/standard/83053.html
- ISA-95 / IEC 62264 Enterprise-Control Integration: common models and interfaces between enterprise functions and manufacturing operations, with emphasis on information integrity and system boundaries. https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard
- ISO 9001-aligned quality-management practice: containment, correction, cause analysis where justified, corrective action and effectiveness verification are distinct. Local procedures and compliance obligations must be validated; this document does not reproduce ISO text.

## 16. Pilot validation required

Validate sector-specific terminology; process/object hierarchy and source systems; mandatory emergency/legal/safety/quality/cyber/privacy controls; authority and escalation maps; evidence by type; catalogue reviewers; qualitative scale anchors and hard constraints; which links may drive recommendations; retention/confidentiality; and measures such as user effort, duplicate rate, qualification time, decision quality and verified outcomes.

This is the canonical enterprise-wide Issue–Solution reference matrix for MANG_03. Seed data is configurable and must be validated through an industrial pilot before production use.
