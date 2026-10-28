# Architecture Decision Log

This log records decisions supported by the project discussion. Items explicitly marked **Open** are not yet settled.

## D-001 — Product purpose
**Agreed:** Enterprise-level decision-support service centered on a dynamic Issue–Solution network. It is not a production planning optimizer and must not directly create or modify detailed production schedules.

## D-002 — Two complementary architecture views
**Agreed:** Maintain an organizational interaction/authority view and a logical Issue–Solution network view. Do not force them into one fixed workflow.

## D-003 — Three organizational interaction layers
**Agreed:**
1. Authorized employees/users submit issues.
2. Managers review issues and may decide within their authority or escalate.
3. CEO/senior management handles decisions requiring higher authority or enterprise trade-offs.

The layers do not imply that every case must pass through all three in order.

## D-004 — Manager authority supports both modes
**Agreed:** The system must support both manager review-only/escalation and manager decision/action within delegated authority. This is configurable by organizational authority and case context.

## D-005 — Separate issue intake and formal acceptance
**Agreed:** A submitted issue must pass through a distinct qualification gate before it enters the formal Issue–Solution network and first-stage solution suggestions are shown. Intake records remain traceable if they need more information, are duplicates, are redirected, or are not accepted.

## D-006 — Dynamic Issue–Solution network
**Agreed:** Relationships are many-to-many, contextual, conditional, and extensible. Do not hardcode a single linear cause/effect/solution path.

## D-007 — Two flows use the same network
**Agreed:** Backward flow carries issues for review/escalation; forward flow carries decisions and actions to appropriate owners. Action ownership may differ from the issue originator and may change dynamically.

## D-008 — Decision profiles are contextual and versioned
**Agreed:** Current goals may prioritize delivery, margin, liquidity, customer commitments, and other dimensions. Record the profile/version used for each decision; allow profiles to evolve.

## D-009 — Feasibility and priority are distinct
**Agreed:** Determine whether an option is feasible separately from ranking its desirability.

## D-010 — Decision, action, and resolution are distinct
**Agreed:** Recording a decision does not prove action completion or issue resolution. Model these separately and support case-specific follow-up.

## D-011 — Outcome-based learning
**Agreed:** Do not infer success from selection alone. Capture actual execution/outcomes and lessons learned before changing future recommendation rankings.

## D-012 — ERP/operational objects are linked, not recreated
**Agreed:** Connect the network to existing projects, production orders, purchase orders, sales orders, components/materials, commitments, and relevant operational objects as applicable.

## D-013 — Initial weights remain simple and explainable
**Agreed direction:** Equal baseline weights may be used where appropriate, then recommendations may evolve from observed outcomes. The exact scoring model remains open.

## Open decisions
- Exact issue qualification criteria and which outcomes require human review.
- Initial master-data taxonomy for issue types, solution types, impact types, and relationship types.
- Exact authority matrix and escalation conditions.
- Which relationship types can propagate impacts automatically versus require validation.
- Initial representation of time-phased resource constraints and uncertainty.
- Operational integrations and identifier mapping.
- Final state enums, database schema, API, and UI.
- Whether/how to support simulation or gamification: not part of the agreed core unless explicitly specified later.
