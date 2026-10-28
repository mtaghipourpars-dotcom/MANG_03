# Google AI Studio Prompt Pack — MANG_03

## How to use
Import the MANG_03 GitHub repository into Google AI Studio Build mode. Provide `AGENTS.md`, `MASTER_PROTOCOL.md`, `IMPLEMENTATION_SEQUENCE.md`, `SCREEN_REFERENCE_CONTRACT.md`, `APP_ARCHITECTURE_AND_DATA.md`, `ACCEPTANCE_GATES.md`, `IMPLEMENTATION_LEDGER.md`, this file, and the relevant domain contracts. Attach the user-provided PARS Home screenshot if the agent cannot access its pixels.

Run exactly one prompt at a time. Do not ask the agent to build every page in one prompt.

## Prompt 0 — Discovery only (no code changes)
You are working in the MANG_03 repository. Read AGENTS.md, MASTER_PROTOCOL.md, IMPLEMENTATION_SEQUENCE.md, SCREEN_REFERENCE_CONTRACT.md, APP_ARCHITECTURE_AND_DATA.md, ACCEPTANCE_GATES.md, IMPLEMENTATION_LEDGER.md and the linked canonical contracts. Inspect the entire relevant source tree, package/config files, routes, components, data, tests and Git status. Inspect the actual attached Home screenshot and the reference newmodel1/demo/main.png if available. Do not edit code or documents in this gate. Report: actual stack; route/page map; component/data flow; current persistence and auth state; existing integrations and proof; test commands; current Home section order; mismatches against contracts; open decisions; exact file-level plan for G1. Mark inaccessible evidence as BLOCKED. Wait for approval.

## Prompt 1 — Reference baseline and reconciliation
Execute G1/G2 only. Capture the current Home at the reference's exact dimensions if possible; record reference dimensions and current screenshot path. Compare concrete regions and list deviations. Reconcile docs/contracts/code without implementing pages. Identify conflicts and unknowns. Do not invent business facts, source connections, database credentials, image assets or product taxonomy. Update ledger only with observed evidence. Stop if the image cannot be inspected or a material conflict remains.

## Prompt 2 — Architecture and data model
Execute G3/G4 only. Inspect current stack and canonical data/workflow contracts. Produce route/component map, domain service boundaries, DB schema/migrations, API contract, authz plan, provenance fields, demo seed separation, audit and error contract. Preserve existing IDs/enums where possible. Do not implement all pages. Do not provision fake connections. Add schema tests and migration tests. Stop for approval if the chosen database/provider or auth model needs user credentials/decision.

## Prompt 3 — Shell and design system
Execute G5 only. Implement bilingual Persian-first RTL shell and English toggle, canonical sidebar routes in the required order, reusable design tokens, header, responsive containers, focus/keyboard behavior and route tests. Preserve current reference hierarchy. Do not build page-specific fake content beyond explicit fixtures. Test all viewports and document the baseline comparison.

## Prompt 4 — Durable data/API foundation
Execute G6 only. Implement server-side validation, repositories, versioned API operations, authz hooks, audit events, safe error contract and migrations. Use only configured, verified services. If no DB credentials/service exist, implement adapter/interface and explicit setup instructions; do not claim persistence works. Test authorization, validation, transaction rollback and duplicate/retry behavior.

## Prompt 5 — Home
Execute G7 only. Implement all five Home sections in the exact order in SCREEN_REFERENCE_CONTRACT.md. Keep Value & Risk Map separate from Product/Work-Portfolio Status. Use only canonical records or visibly synthetic fixtures. Product cards and urgent-decision cards use related images/thumbnails when assets exist. Wire each click to its required route and preserve filters/context. Add tests for render, section order, drill-down, unknown data and empty/error states. Capture screenshots and compare against the attached reference. Do not mark G7 PASS without actual browser evidence.

## Prompt 6 — Projects and Value Map
Execute G8/G9 only after G7 passes. Implement searchable/filterable projects and portfolio detail; then Value Map with explicit axes/units/zones, provenance, intervention windows and drill-down. Keep portfolio effectiveness separate from value/risk efficiency. Add integration tests that click from Home and confirm destination filter context.

## Prompt 7 — Issue
Execute G10 only. Build Issue List/dashboard and complete New Issue Intake form at the bottom of the Issue page. Capture observed situation, context, urgency, relevant operational-object links if known, evidence and explicit unknowns. Preserve original narrative. Do not request financial calculations. Implement transparent qualification dispositions and audit. Test duplicate/return/out-of-scope/manual review and keyboard-accessible form behavior.

## Prompt 8 — Solution
Execute G11 only. Build Solution List/dashboard, candidate detail/comparison, deterministic feasibility gates and manager-owned qualitative parameter assessments. Version parameters/profiles and store rationale/evidence. Apply hard gates before candidate ranking. Unknown is not zero. If no candidate feasible, show NO_FEASIBLE_OPTION and escalation. Test each gate with fixtures.

## Prompt 9 — Decisions, actions and learning
Execute G12/G13 only. Implement human authority/approval, selected/rejected/deferred alternatives, action assignment/reassignment/audit, outcome observations against frozen baseline and learning proposals. No auto-approval, execution or causal claims. Add full end-to-end fixture test.

## Prompt 10 — Settings and governance
Execute G14 only. Implement roles/permissions, parameter/profile versions, controlled config and bilingual terminology. Every governed edit must be authorized and audited. Do not let customer settings redefine canonical enums or rewrite history.

## Prompt 11 — Security, regression, visual audit
Execute G15–G18 only. Run unit/integration/e2e/accessibility, build/type/lint, security checks, screenshot regression and responsive overflow tests. Fix failures before passing. Record actual output and artifacts in ledger. Never label unexecuted checks as passing.

## Prompt 12 — Data readiness and release
Execute G19/G20 only. Validate source integration with authorized sample and reconciliation or explicitly leave NOT CONNECTED. Prove migrations, backup/restore, monitoring, rollback, deployment config and human release approval. No production release without explicit approval.
