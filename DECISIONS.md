# Architecture Decision Log

This log records decisions supported by project discussion. Items marked Open are not settled.

## D-001 — Product purpose
Agreed: enterprise Issue–Solution decision support, not a production planning optimizer. The service must not autonomously create or modify detailed production schedules.

## D-002 — Separate but connected architecture views
Agreed: maintain organizational interaction/authority, reusable knowledge network, and live case graph as connected but distinct views. Do not collapse them into one fixed workflow. A generic relationship is not proof of a case-specific link.

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

## D-009 — Decision profiles are contextual and versioned
Agreed: priorities may include delivery, margin, liquidity, customer commitments, and other dimensions. Record the profile/version used for each decision.

## D-010 — Feasibility and priority are distinct
Agreed: determine whether an option is feasible separately from ranking its desirability.

## D-011 — Decision, action, and resolution are distinct
Agreed: recording a decision does not prove action completion or issue resolution. Model these separately and support case-specific follow-up.

## D-012 — Outcome-based learning
Agreed: do not infer success from selection alone. Use actual execution and observed outcomes before changing future recommendation rankings.

## D-013 — Link operational objects, do not recreate them
Agreed: connect to existing projects, production orders, purchase orders, sales orders, components/materials, commitments, and other relevant operational objects.

## D-014 — Simple and explainable initial weights
Agreed direction: equal baseline weights may be used where appropriate. The exact scoring model remains open.

## D-015 — MVP does not mandate a graph database
Agreed design direction: the conceptual network can initially be implemented with explicit typed relationship records in a relational model. Specialized graph storage requires a later, validated need.

## Open decisions
- Exact qualification criteria and which outcomes require human review.
- Initial taxonomies for issue types, solution types, impact types, and relationship types.
- Authority matrix and escalation conditions.
- Which relationship types can propagate impacts automatically versus require validation.
- Time-phased resource constraints and uncertainty representation.
- Operational integrations and identifier mapping.
- Confidence/evidence thresholds and link types requiring human validation.
- Final state enums, database schema, API, and UI.
- Simulation or gamification is not part of the agreed core unless explicitly specified later.
