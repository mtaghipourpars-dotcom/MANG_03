# MANG_03 Agent Instructions — Google AI Studio and coding agents

These instructions apply to Google AI Studio Build mode and any coding agent working in this repository.

## Mandatory reading order
1. `docs/ai-studio/README.md`
2. `MASTER_PROTOCOL.md`
3. `IMPLEMENTATION_SEQUENCE.md`
4. `SCREEN_REFERENCE_CONTRACT.md`
5. `APP_ARCHITECTURE_AND_DATA.md`
6. `ACCEPTANCE_GATES.md`
7. `IMPLEMENTATION_LEDGER.md`
8. `PROMPT_PACK.md`
9. Relevant canonical contracts linked from `README.md`, especially product charter, architecture, Issue lifecycle, decision/learning, canonical network/data model, financial parametric assessment, localization, stress tests, and CASE-024 fixture.
10. Reference project `https://github.com/mtaghipourpars-dotcom/newmodel1` only as a visual/implementation-process reference; MANG_03 product rules in this repository remain authoritative for MANG_03.

## Product invariants — never infer around these
- Product: MANG_03 Enterprise Issue–Solution Decision Support. It supports human decisions; it is not an autonomous decision-maker, production scheduler, ERP replacement, or generic KPI dashboard.
- Key-resource allocation is the product focus; do not model every organizational resource without decision relevance.
- Workflow concepts remain distinct: Intake ≠ qualified Issue; feasibility ≠ priority; decision ≠ action ≠ resolution; selected solution ≠ proven success; estimate ≠ observed outcome; association ≠ causality.
- Initial Issue Intake captures the observed situation, context, and available evidence. Do not ask the submitter to calculate or enter financial impact.
- After qualification, relevant managers assess versioned qualitative impact parameters with explicit scale anchors, assessor, timestamp, rationale/evidence and profile version. Include Unknown / Not assessed. Quantitative monetary valuation and cash-flow modeling are deferred until data/process maturity supports them.
- Do not collapse effectiveness and efficiency into one opaque score. Home must keep Project Value & Risk Map separate from Product / Work-Portfolio Status.
- Unknown is not zero. Never fabricate data, source-system connections, project progress, money, outcomes, causal relationships, or successful tests. All synthetic fixtures must be explicitly labeled synthetic/demo.
- Feasibility and hard constraints are checked before ranking. If no option is feasible, return an explicit no-feasible-option/crisis state and escalation; do not invent a recommendation.
- Human authority, approval, risk acceptance, action ownership and audit trail remain explicit. No silent execution, ERP posting, auto-approval or AI decision commit.
- Preserve original issue narrative and source evidence during localization. Canonical IDs/status codes remain stable between English and Persian.
- The current HTML prototype is not proof of production persistence, authentication, authorization, database, or ERP integration.

## Work discipline
- One gate/work package per prompt. Inspect before editing; state file-level plan; implement only the authorized gate.
- Do not rewrite the entire app or replace existing behavior with a mock. Preserve useful implementation and history.
- Do not infer requirements from screenshots where text/contracts are available. If a material conflict or missing business rule remains, record it as OPEN and ask for a human decision instead of guessing.
- Run actual available tests, type/lint/build checks, browser checks and screenshot review. Record exact commands and outputs. Unavailable tests are NOT RUN/BLOCKED, never PASS.
- Review loading, empty, error, stale/disconnected, valid, invalid-input and unauthorized states where relevant.
- Update `IMPLEMENTATION_LEDGER.md` after every gate. Update English and Persian documents together when a canonical product rule changes.
- Never commit secrets, credentials, private data or real production extracts. Never deploy or merge a production release without explicit human approval.
