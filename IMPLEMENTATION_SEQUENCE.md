# MANG_03 Implementation Sequence and Stop Gates

A gate is PASS only when the evidence is recorded in `IMPLEMENTATION_LEDGER.md`. A failed or unverified gate blocks later gates.

| Gate | Work package | Required evidence | Stop condition |
|---|---|---|---|
| G0 | Repository discovery | Actual file inventory, stack, routes, current tests, known gaps, proposed file-level plan | Any relevant source/test not inspected |
| G1 | Reference visual baseline | Actual attached screenshot and `newmodel1/demo/main.png` inspected; dimensions and comparison viewport recorded; current Home screenshot | Image pixels inaccessible or no baseline capture |
| G2 | Contract reconciliation | Conflicts/open decisions list; confirm canonical routes, data boundaries, workflow rules and MVP limits | Material conflict unresolved |
| G3 | App architecture | Route/component map, API boundary, domain services, DB plan, security/threat model | Architecture assumes unverified integrations |
| G4 | Canonical data model | Entities, fields, IDs, enums, relationships, provenance, constraints, seed/demo separation and migrations | Unknown silently converted to zero or demo treated as real |
| G5 | UI design system and shell | Persian RTL, English toggle, tokens, sidebar order, responsive shell, navigation tests | Home composition deviates from approved reference without approval |
| G6 | Durable data/API foundation | Validated APIs/repositories, error contracts, authz, audit and transaction behavior | Client can bypass server rules or mutations lack audit |
| G7 | Home dashboard | Five sections in fixed order, charts, portfolio cards, image-backed urgent decisions, working drill-downs | Broken links, fabricated data, missing sections, blank Home |
| G8 | Projects page | Product/work families, project list/detail, commitments, status/provenance, portfolio card drill-down | Unsupported project/product link or fake real status |
| G9 | Value Map page | Risk/value chart, zones/legend, intervention windows, filters and source/evidence detail | Unexplained axes/units or unsupported monetary facts |
| G10 | Issue intake/list/qualification | Intake form, validation, duplicate/out-of-scope/return paths, Issue list/search/filter, evidence and audit | Intake asks for monetary estimates or silently discards submissions |
| G11 | Solution list/assessment | Candidate list, hard-gate feasibility, manager qualitative parameters, common profile comparison | Ranking precedes feasibility; unknown is zero |
| G12 | Decision & Actions | Authority/approval, selected and rejected alternatives, reasons, action owners/due dates/reassignment, audit | Decision conflated with action or silent approval |
| G13 | Learning Outcomes | Baseline, expected vs observed outcomes, causal confidence, lesson proposal/review | Selection treated as success or actual overwritten |
| G14 | Settings and governance | Parameter/profile versions, roles/permissions, localization, controlled configuration | User can change governed policy without permission/history |
| G15 | Cross-domain integration | One traceable end-to-end case from Intake → qualification → candidates → decision → actions → outcome | Duplicate datasets, broken references or missing audit |
| G16 | Security and resilience | Authn/authz, secrets, rate/validation controls, backups/recovery, error handling | Secret in client or destructive mutation without authorization/audit |
| G17 | Automated regression | Unit/integration/e2e/accessibility; deterministic CI and exact result output | Critical failure or test status unknown |
| G18 | Visual audit | Side-by-side screenshots at reference viewport and 1280×800, 1024×768, 768×1024, 390×844; deviation log | Major mismatch, blank page, console errors or overflow |
| G19 | Data readiness / integration | Verified source adapter or explicit NOT CONNECTED state; source reconciliation | Synthetic data feeds executive actuals |
| G20 | Release readiness | Deploy/run guide, migrations, backup/restore, monitoring, rollback and human approval | No recovery evidence or unapproved production release |

## Gate execution rules
- Run only the current gate and its prerequisite fixes.
- Each prompt must state gate ID, allowed scope, forbidden scope, files to inspect, outputs and acceptance criteria.
- At the end, report commands actually executed, pass/fail/skipped counts, screenshots/artifacts, changed files, commit and blockers.
- If a command or browser is unavailable, mark NOT RUN; never infer PASS from code inspection.
- Retest affected earlier gates after a shared component, schema, route or styling change.
- The reference repo `newmodel1` may supply patterns and reference assets; do not copy its unrelated PVPT domain model into MANG_03.
