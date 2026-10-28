# MANG_03 — Enterprise Issue–Solution Decision Support

## Prototype and validation status

- [Interactive HTML prototype](docs/demo/mvp-prototype.html)
- [Worst-case stress test specification](docs/design/worst-case-stress-test-specification.md)
- [Phase A static review and defect-fix log](docs/testing/phase-a-static-prototype-review.md)
- [Playwright browser smoke test](tests/prototype-smoke.mjs) · [GitHub Actions run](https://github.com/mtaghipourpars-dotcom/MANG_03/actions/runs/40715532733)
- Latest iterations implement a temporary in-page Issue Intake queue, visible temporary qualification status changes, local demo search, and modal keyboard focus handling. Data clears on refresh; no backend, durable storage, authentication/authorization, or ERP integration is implemented. Automated Chromium smoke tests pass for navigation, intake, local search, qualification status, disabled catalogue controls, modal keyboard focus, refresh-clears behavior, and mobile horizontal overflow. Full cross-browser/accessibility review and backend-dependent stress tests remain outstanding.

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

- [Enterprise Value-Chain Extensible Issue–Solution Network](docs/design/enterprise-value-chain-extensible-issue-solution-network.md)
- [Manufacturing Issue–Solution Matrix and Qualification Framework](docs/design/manufacturing-issue-solution-matrix.md)
- [Seed Issue–Solution Applicability Matrix (CSV)](docs/data/seed/issue-solution-applicability-matrix.csv)
- [Seed Qualification Rules (CSV)](docs/data/seed/qualification-rules.csv)
- [Seed Relationship Types (CSV)](docs/data/seed/relationship-types.csv)
- [MVP End-to-End ISSUE → SOLUTION → DECISION → ACTION → OUTCOME chain](docs/design/issue-solution-end-to-end-chain.md)
- [End-to-end reference design scenario](docs/design/reference-scenario-end-to-end.md)
- [Worst-Case Stress Test Specification](docs/design/worst-case-stress-test-specification.md) — Iran/high-risk operating conditions, integrity rules, 12 test cases, execution phases, and acceptance gate.

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


## Canonical Issue–Solution reference matrix
- [Enterprise Issue–Solution Reference Matrix](docs/design/enterprise-issue-solution-reference-matrix.md) — full value-chain coverage, qualification rules, solution archetypes, relationships, user extensibility, governance and outcome learning.
- [Enterprise Issue Type seed catalogue](docs/data/seed/enterprise-issue-type-catalog.csv) — editable seed definitions across enterprise domains.
- [Issue–Solution applicability matrix](docs/data/seed/issue-solution-applicability-matrix.csv) — conditional cross-domain solution patterns and safeguards.
- [Enterprise qualification rules](docs/data/seed/enterprise-qualification-rules.csv) — explicit qualification and governance checks.
- [Relationship types](docs/data/seed/relationship-types.csv) — typed semantics, evidence and prohibited inferences.


## Interactive visual MVP prototype
- [Open the interactive browser prototype source](docs/demo/mvp-prototype.html) — a single-file, responsive, client-side prototype for Home, Issue, Solution, Decision & Actions, Outcomes & Learning, and Settings.
- The prototype uses synthetic data for `CASE-024`, supports navigation and a local Issue Intake form, and intentionally keeps reusable catalogue buttons **visible but disabled**.
- This is a UI prototype only: no backend, persistent storage, authentication/authorization, or ERP integration. New intake data is not persisted after refresh; demo queue counts and secondary rows are illustrative.

## End-to-end sample fixture
The synthetic case `CASE-024` is modeled from intake through qualification, three candidate solutions, profile-based decision, actions, observed outcome, and audit events: [CASE-024 demo fixture](docs/data/demo/CASE-024-end-to-end-demo.json). It is sample data for validating the end-to-end contract, not a running application, live integration, or real organizational evidence.

## MVP scope decision — catalogue authoring deferred
The MVP keeps **NEW ISSUE** and **NEW SOLUTION** buttons visible in their related Issue Type / Solution Type forms, but both buttons are **disabled** and have no action or side effects. This is specifically about creating reusable catalogue definitions—not submitting an Issue Intake or creating a case-specific Solution Candidate. The MVP uses a curated, versioned catalogue; unmatched Issue Intakes remain saved as **Not sure / Other — classification review required**, and cases with no suitable Solution Type are routed for manual review. Runtime catalogue authoring and its governed AI-assisted workflow are reserved for a later release. See [D-025/D-026](DECISIONS.md) and the [Enterprise Issue–Solution Reference Matrix](docs/design/enterprise-issue-solution-reference-matrix.md).


## Worst-case stress testing
The stress-test specification defines synthetic, evidence-based checks for liquidity/FX shocks, supply uncertainty, stale data, infrastructure outages, shared-resource conflicts, missing approvals, decision pressure, recovery, and audit integrity. It is a test contract, not a claim that the current prototype or production service has passed. The current HTML prototype cannot validate backend persistence, access control, ERP integration, concurrency, or offline synchronization; unsupported tests must be marked **BLOCKED / NOT IMPLEMENTED**, never PASS.

### Phase A review status (2026-10-28)
The HTML source was statically inspected. The review found that the intake form reports “Saved locally” but does not retain the submitted record, and “Mark information needed” shows a state-change message without changing state. Several other workflow controls are preview/toast-only. Browser-runtime testing remains outstanding; persistence, authorization, ERP, concurrency and offline-sync tests remain blocked/not implemented. See the [Phase A review report](docs/testing/phase-a-static-prototype-review.md).


## Decision integrity guardrails (2026-10-28)
- [Rejected and Deferred Alternatives Ledger](docs/decision/rejected-alternatives-ledger.md): preserve alternatives and explicit reopening triggers without silently rewriting decisions.
- [Recommendation Abstention and Emergency Reversible-Action Path](docs/workflows/recommendation-abstention-emergency-path.md): allow justified abstention and a separately governed, reversible emergency proposal path.
- [Decision Change and Value Evidence Measurement](docs/decision/value-evidence-measurement.md): evaluate decision changes and observed outcomes against a defensible baseline without unsupported causal claims.
- The prototype exposes these flows in the Decision, Solution, and Outcomes pages. All added records remain in browser session memory; no backend, durable audit history, authorization, alerting, expiry enforcement, or execution is implied.
