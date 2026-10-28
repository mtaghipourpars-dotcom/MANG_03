# Architecture Decision Log

This log records decisions supported by project discussion. Items marked Open are not settled.

## D-001 — Product purpose
Agreed: enterprise Issue–Solution decision support, not a production planning optimizer. The service must not autonomously create or modify detailed production schedules.

## D-002 — Separate but connected architecture views
Agreed: maintain organizational interaction/authority, reusable knowledge network, and live case graph as connected but distinct views. A generic relationship is not proof of a case-specific link.

## D-003 — Three organizational interaction layers
Agreed: authorized employees submit issues; managers review and may decide within delegated authority or escalate; CEO/senior management handles higher-authority or enterprise trade-offs. Not every case must pass through all layers in order.

## D-004 — Both manager modes
Agreed: support manager review-only/escalation and manager decision/action within delegated authority, according to configured authority and case context.

## D-005 — Separate intake and formal acceptance
Agreed: a submitted issue passes through a distinct qualification gate before entering the formal network and showing first-stage solution suggestions. Preserve intake if more information is needed, it is a duplicate, redirected, or not accepted.

## D-006 — Dynamic Issue–Solution network
Agreed: relationships are many-to-many, contextual, conditional, and extensible. Do not hardcode a single linear cause/effect/solution path.

## D-007 — Explicit relationship semantics and evidence
Agreed design rule: relationship records should represent meaning, direction where relevant, context, validity/version, evidence/provenance, confidence, and whether a claim is fact, assumption, hypothesis, or inference. Numeric weight is optional and must have a defined meaning.

## D-008 — Two flows use the same network
Agreed: backward flow carries issues for review/escalation; forward flow carries decisions and actions to appropriate owners. Action ownership may differ from the originator and may change dynamically.

## D-009 — Configurable, versioned decision profiles
Agreed: decisions are evaluated against a configurable profile whose parameters may include sales/customer commitments, liquidity preservation, margin, delivery, quality, safety, compliance, and other current goals. Record the exact profile version and parameter values used for each decision.

## D-010 — Financial impact per solution candidate
Agreed: estimate and display the financial impact of each solution candidate independently, before a final choice where data permits. Separate direct implementation cost, margin/profit impact, cash-flow timing, avoided cost/loss, opportunity cost, and potential delay/commitment cost where evidence supports them. Keep net financial impact, profitability, and cash flow distinct. Store assumptions, time horizon, currency, evidence/source, uncertainty/range, and confidence; do not invent precision when inputs are missing.

## D-011 — Feasibility and profile-based priority are distinct
Agreed: assess feasibility separately from desirability under the active profile. Profile ranking cannot override hard technical, legal, safety, resource, or delegated-authority constraints.

## D-012 — Lower-level decisions do not suppress higher-level options
Agreed: selecting or recording a solution at a lower organizational level must not, by itself, hide or disable other applicable solution candidates for managers at higher levels. Higher-level managers may evaluate and select another option, within their authority and constraints. Preserve the earlier decision as history; record the later decision as a new or superseding decision with rationale and links to affected prior decisions/actions.

## D-013 — Decision, action, and resolution are distinct
Agreed: recording a decision does not prove action completion or issue resolution. Model these separately and support case-specific follow-up. If a later decision changes the course, explicitly assess actions already started and record authorized cancellation, continuation, or amendment; do not silently erase them.

## D-014 — Outcome-based learning
Agreed: do not infer success from selection alone. Use actual execution and observed outcomes before changing future recommendation rankings.

## D-015 — Link operational objects, do not recreate them
Agreed: connect to existing projects, production orders, purchase orders, sales orders, components/materials, commitments, and other relevant operational objects.

## D-016 — Simple and explainable initial weights
Agreed direction: equal baseline weights may be used where appropriate. The exact scoring model remains open.

## D-017 — MVP does not mandate a graph database
Agreed design direction: the conceptual network can initially be implemented with explicit typed relationship records in a relational model. Specialized graph storage requires a later, validated need.

## Open decisions
- Exact qualification criteria and which outcomes require human review.
- Initial taxonomies for issue types, solution types, impact types, and relationship types.
- Exact authority matrix and escalation conditions.
- Which relationship types can propagate impacts automatically versus require validation.
- Time-phased resource constraints and uncertainty representation.
- Operational integrations and identifier mapping.
- Confidence/evidence thresholds and link types requiring human validation.
- Exact financial calculation formulas, data sources, currency/time-horizon conventions, and treatment of overlapping impacts.
- Exact profile aggregation/scoring formula and whether any profile parameters act as hard constraints rather than weighted criteria.
- Final state enums, database schema, API, and UI.
- Simulation or gamification is not part of the agreed core unless explicitly specified later.


## D-018 — Manager-owned, staged parametric impact assessment
Agreed direction: the MVP will not require experts or managers to calculate precise monetary impact for every solution. Begin with contextual, manager-owned 1–5 ratings across defined impact dimensions, each with clear scale anchors and direction, rationale, assumptions, and explicit confidence/unknown handling. Higher-level reviews can refine the assessment and add quantified analysis where material and evidence supports it. Preserve assessment history. Raw ordinal scores must not be summed or presented as monetary values. The proposed baseline dimensions/scales and staged model are documented in [Parametric Solution Impact Assessment](docs/decision/parametric-impact-assessment.md); exact anchors, final parameter list, profile aggregation, and refinement triggers remain open.


## D-019 — Shared weighted profiles and outcome-based Best Profile
Agreed direction: use the same governed parameter catalogue for case-specific solution impact assessment and weighted Decision Profiles. Support organization-defined default profiles, user-created personal/custom profiles, and a solution-specific profile association as an additional perspective. A transparent weighted index may be used as a comparative decision-priority indicator, never as a monetary value. To compare candidates fairly, apply the same selected comparison profile to all candidates in that comparison; preserve profile version and score explanation. The system may recommend organizational Best Profile candidates from actual outcomes, with sample size, context, outcome coverage, and uncertainty visible; system recommendations do not automatically replace approved organizational profiles. Exact weighting, profile permissions, success definitions, and adoption authority remain open.


## D-020 — End-to-end reference scenario and outcome target comparison
Agreed design direction: begin detailed UI design using one end-to-end reference scenario from intake and qualification through candidate assessment, profile-based decision, actions, observed outcomes, and learning. At decision time, preserve the selected profile/version and the target or threshold for each relevant parameter. After execution, compare observed outcomes with those frozen targets; do not retrospectively change the baseline. Meeting one parameter target (for example, liquidity at least 2/5) means only that this dimension's target was met, not that the overall decision necessarily succeeded. A hard-constraint breach must remain visible and cannot be offset by weighted performance on other parameters. Overall outcome categories and rules remain explainable and may be refined as organizational evidence matures. The complete reference design, data contract, screen responsibilities, workflow, integrity rules, and acceptance criteria are documented in [Reference Design Scenario — End-to-End Issue-to-Outcome](docs/design/reference-scenario-end-to-end.md).


## D-021 — Fixed HOME layout, role/context-specific data, and separate ISSUE/SOLUTION navigation
Agreed for the MVP/demo: keep one consistent HOME layout for all users; show data and actions appropriate to the user's role/context without creating separate role-specific navigation trees at this stage. Keep ISSUE and SOLUTION as separate primary sidebar entries. ISSUE covers intake, review, qualification, and Issue Detail. SOLUTION covers case-linked candidate definition, feasibility, impact assessment, comparison, and preparation/recording of a decision. DECISIONS & ACTIONS tracks execution after a decision; OUTCOMES & LEARNING reviews observed results against frozen decision-time targets. The MVP sidebar also includes HOME, PROJECTS & PORTFOLIO, REPORTS & ANALYTICS, and SETTINGS. Settings include personal preferences (language/theme), governed parameters/scales, formulas/thresholds, decision profiles, workflow rules, notifications, and data-source settings. Role-specific menu variants are not required for the demo; production authorization remains a separate requirement. The detailed chain and screen contracts are in [MVP End-to-End Chain](docs/design/issue-solution-end-to-end-chain.md).


## D-022 — Manufacturing Issue–Solution matrix and transparent qualification gate
Agreed design direction for the MVP baseline: create a reusable manufacturing Issue–Solution catalogue with broad domains, conditional Issue-Type-to-Solution-Type applicability, typed relationships, case-specific evidence, and a transparent qualification gate before formal Issue Case creation. Preserve all intakes; distinguish Accepted, Needs information, Potential duplicate/link, Out of scope/redirected, Not accepted with reason, and urgent parallel escalation. Do not require submitters to know root cause or propose a solution. Do not use an opaque score as the sole gate, infer causality from association, or treat a generic solution mapping as proof of case applicability. The starter taxonomy, qualification checks, solution-pattern matrix, relationship semantics, governance, MVP scope, and acceptance checklist are documented in [Manufacturing Issue–Solution Matrix and Qualification Framework](docs/design/manufacturing-issue-solution-matrix.md). Site-specific taxonomies, thresholds, approvals, source mappings, and safety/legal rules require pilot validation.


## D-023 — Enterprise-wide user-extensible Issue–Solution knowledge network
The Issue–Solution matrix is not manufacturing-only. It covers the enterprise value chain including strategy, sales and commitments, planning, procurement, materials, product development, engineering, manufacturing engineering, operations, maintenance, quality, projects, logistics, finance, HR, IT/data/cybersecurity, legal/governance, EHS, shared services, continuous improvement and external dependencies. Users can create new reusable Issue Types and Solution Types in context. The system must search existing catalogues, propose explainable matches and relationships, suggest qualification-rule templates, preserve the live intake, and govern new definitions/relationships through versioned Draft/Provisional/Review/Approved states. Similarity is not identity, causality, or applicability; proposed relationships/rules must not silently drive recommendations. Details: [Enterprise Value-Chain Issue–Solution Knowledge Network](docs/design/enterprise-value-chain-extensible-issue-solution-network.md).
