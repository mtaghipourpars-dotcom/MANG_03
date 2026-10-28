# MANG_03 — Enterprise Issue–Solution Decision Support

## Purpose

MANG_03 is an enterprise-level decision-support service for manufacturing and engineering organizations. It helps authorized users raise issues, qualify them for entry into a shared Issue–Solution network, assess cross-functional impacts, route issues according to authority and context, support decisions, track actions and outcomes, and learn from history.

**It is not a production-planning optimizer.** It does not autonomously create or change production schedules. It connects to operational objects and supports management decisions.

## Current architecture baseline

1. Authorized organizational users submit an initial issue.
2. A distinct Issue Qualification Gate determines whether the submission is ready and in scope for the formal Issue–Solution cycle. Insufficient information can be returned for completion; duplicates can be linked to existing cases; out-of-scope items retain a traceable disposition.
3. Accepted issues enter a shared, dynamic Issue–Solution network and are linked to relevant operational objects.
4. Managers review and may decide within configured authority, or escalate.
5. Senior management / CEO handles cases requiring higher-level decisions, choosing among alternatives according to current organizational goals and decision profiles.
6. Decisions create or assign actions to the appropriate owners; action ownership may change dynamically.
7. Execution, actual outcomes, and lessons learned are recorded and used to improve future recommendations.

## Three interaction layers

- **Layer 1 — Authorized issue submitters:** create initial issue submissions and provide evidence/context.
- **Layer 2 — Manager review interface:** validate, analyze, decide within delegated authority, or escalate.
- **Layer 3 — Senior-management decision interface:** decide on escalated cases and cross-functional trade-offs.

These are interaction/authority layers, not a mandatory fixed route for every case. Configurable rules must allow supported variation, including direct escalation when justified.

## Key principles

- Initial submission is not the same as formal acceptance into the network.
- Qualification criteria must be transparent and traceable; an opaque score must not silently discard real issues.
- The model distinguishes reusable knowledge relationships from case-specific relationships.
- Issue–Solution links are many-to-many, conditional, and extensible—not a fixed linear chain.
- Impact propagation must be contextual and validated; a component problem does not automatically mean delivery delay or financial loss.
- **Feasibility ≠ Priority.**
- **Decision ≠ Action ≠ Resolution.**
- A selected solution is not evidence of success. Learning must use actual execution and observed outcomes.
- Decision profiles and priorities can change with current organizational goals.
- Start with simple, explainable baseline weights (equal weights where appropriate); evolve recommendations from evidence.
- Human decision authority remains explicit. Initial product is decision support, not autonomous decision-making.
- Preserve history: submission, qualification, review, profile, alternatives, decision, actions, outcomes, and lessons learned.

## Initial operational context links

Examples include project, production order, purchase order, sales order, component/material, contractual commitment or milestone, and other organization-specific operational objects. The service should link to existing ERP/operational data rather than reinventing it.

## Design sequence

1. Conceptual master data and relationship model.
2. Qualification and workflow/state model.
3. Issue–Solution network and conditional relationship semantics.
4. Decision profiles, authority, action, outcome, and learning model.
5. Validate the model with realistic end-to-end scenarios.
6. Only then finalize physical database/API/UI implementation.

## Documentation map

- [Manufacturing Issue–Solution Matrix and Qualification Framework](docs/design/manufacturing-issue-solution-matrix.md)
- [Seed Issue–Solution Applicability Matrix (CSV)](docs/data/seed/issue-solution-applicability-matrix.csv)
- [Seed Qualification Rules (CSV)](docs/data/seed/qualification-rules.csv)
- [Seed Relationship Types (CSV)](docs/data/seed/relationship-types.csv)
- [MVP End-to-End ISSUE → SOLUTION → DECISION → ACTION → OUTCOME chain](docs/design/issue-solution-end-to-end-chain.md)
- [End-to-end reference design scenario](docs/design/reference-scenario-end-to-end.md)

- [Architecture overview](docs/architecture/overview.md)
- [Conceptual master data and network map](docs/architecture/conceptual-network-map.md)
- [Master data and relationships](docs/data/master-data-and-relationships.md)
- [Workflow and qualification gate](docs/workflows/issue-lifecycle.md)
- [Decision, action, outcome, and learning](docs/decision/decision-and-learning.md)
- [Decision log](DECISIONS.md)
- [Change log](CHANGELOG.md)

## Status

Architecture and conceptual design. No production implementation or live organizational integration is implied by these documents. The diagrams are illustrative model topology; they do not claim verified company-specific causal links or live data. Unconfirmed details remain proposals/open decisions rather than agreed facts.


## Additional decision rules

- Estimate the financial impact of each case-specific solution candidate independently where data supports it. Keep direct cost, margin/profit, net impact, and cash-flow timing distinct; record assumptions, source, horizon, uncertainty, and confidence.
- Evaluate candidates using configurable, versioned Decision Profiles (for example, sales commitments, liquidity preservation, margin, delivery, quality, and safety). Feasibility and hard constraints are separate from profile ranking.
- A lower-level selection must not hide or disable other applicable candidates for higher-level managers. Preserve the prior decision and record any later superseding decision; explicitly handle actions already underway.


## Initial financial-impact approach
The MVP starts with a manager-owned, staged parametric assessment rather than requiring precise monetary calculations from every user. Candidate-specific 1–5 ratings use explicit anchors and directions; unknown values remain explicit; ordinal scores are not money and must not be blindly summed. Higher-level review can refine the assessment and add quantified analysis where justified. See [Parametric Solution Impact Assessment](docs/decision/parametric-impact-assessment.md).


## Decision Profiles and organizational learning
The same governed impact parameters are used both to assess each case-specific solution and to prioritize alternatives under weighted Decision Profiles. The product direction includes organization-defined default profiles, personal/custom profiles, and a solution-specific profile perspective. Candidate comparisons must use the same selected comparison profile. Over time, the service may recommend context-specific organizational Best Profiles from observed outcomes, with sample size and uncertainty visible; selection alone is not evidence of success. See [Parametric Solution Impact Assessment](docs/decision/parametric-impact-assessment.md) and [Decision, Action, Outcome, and Learning](docs/decision/decision-and-learning.md).
