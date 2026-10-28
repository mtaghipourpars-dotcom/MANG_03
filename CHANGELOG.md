## 2026-10-28 — Manager-owned qualitative financial evaluation

- Removed the premature **Financial Impact Screening** panel from Issue detail; employees registering an Issue are not asked to estimate monetary impact.
- Reaffirmed the MVP's financial core: relevant managers assign qualitative values to versioned parameters after Issue review/qualification.
- Defined guardrails for qualitative scales, Unknown / Not assessed, assessor/time/profile provenance, and keeping financial parameters separate from an opaque overall score.
- Deferred quantitative monetary valuation and cash-flow modelling to later versions, contingent on data quality, process ownership, and organizational maturity.
- Updated the English/Persian product charters and architecture docs; added regression assertions that the removed panel stays absent in both locales.

## 2026-10-28 — First-principles key-resource allocation

- Re-centered the Home page on the product's founding purpose: allocate scarce **key resources**, especially cash and cash-flow timing, to the issues that matter most.
- Added separate executive views for **Project Value & Risk Map** (efficiency / risk-adjusted allocation) and **Product / Work-Portfolio Status** (effectiveness / commitments and outcomes).
- Added visible financial signals for cash-flow timing, cash required, and margin at risk; unavailable/live-system values remain explicitly unknown or not connected.
- Added a standard Financial Impact Screening panel to Issue detail. Every Issue receives a financial screen; quantitative depth scales with materiality and evidence. Unknown values are not treated as zero.
- Marked map positions and portfolio statuses as synthetic demo fixtures; no live ERP or verified project-level financial values are implied.
- Added bilingual first-principles product charters and updated the architecture and README references in English and Persian.
- Extended browser smoke tests to verify the two Home views and financial signals in both English and Persian.
- Validation: [latest bilingual browser smoke test passed](https://github.com/mtaghipourpars-dotcom/MANG_03/actions/runs/40725081648) for commit `0fdf458cbf3dfb221ee5defdd5fd3234b36cab21`, covering the Home value-risk and portfolio views plus Issue-level financial screening in English and Persian.

## 2026-10-28 — Three decision-integrity guardrails added
- Added a rejected/deferred alternatives ledger with explicit reasons and reopening triggers; reconsideration flags are session-only and do not silently change the recorded decision.
- Added recommendation abstention for stale/conflicting evidence, unresolved hard gates, or no feasible candidate, plus a separately labeled emergency reversible-action proposal requiring an owner, future expiry and reversibility confirmation.
- Added decision-change/value-evidence capture for baseline, decision delta, observed outcome, measurement window and attribution status; no causal claim is implied.
- Added Playwright regression coverage for the three workflows and updated architecture/acceptance documentation.
- Follow-up hardening preserves the evidence/gate note used for abstention, displays the value measurement window, and tests restoration of the selected-candidate styling after clearing a session hold.
- Prototype remains static and synthetic: no durable persistence, auth, notifications, expiry enforcement, ERP integration, or action execution.

## 2026-10-28 — Expanded Chromium regression suite passing
- Added native required-field validation checks for Issue Intake.
- Added real-browser checks for modal dismissal by Close, Escape, Cancel, and backdrop click; focus containment, focus restoration, and post-submit focus transfer.
- Verified local search by partial title for illustrative CASE-019, and confirmed temporary intake data clears after full page refresh.
- Latest passing run: https://github.com/mtaghipourpars-dotcom/MANG_03/actions/runs/40715532733
- Browser smoke tests pass. Full cross-browser and assistive-technology review plus backend-dependent WCS capabilities remain outside this static prototype.

## 2026-10-28 — Chromium browser smoke tests passing
- Added Playwright smoke coverage and a GitHub Actions workflow for the static HTML MVP.
- Latest run passed in Chromium: all six navigation destinations, Issue tabs, intake creation and temporary queue rendering, refresh-clears behavior, search by intake and illustrative case title, qualification-state updates, disabled catalogue controls, modal focus containment/restoration, and 390px mobile horizontal-overflow check.
- Added local search matching for CASE-019 and CASE-011 by their displayed titles.
- Added focus transfer to the new intake queue after submission.
- Run: https://github.com/mtaghipourpars-dotcom/MANG_03/actions/runs/40715309176
- This is a browser smoke test, not full accessibility certification or proof of backend-dependent Worst-Case Stress Tests.

## 2026-10-28 — Mocked-DOM regression cycle
- Passed inline JavaScript syntax compilation.
- Passed mocked-DOM navigation across all six pages and all three Issue tabs.
- Passed intake submission and queue rendering, qualification-state transition and visible gate update, local search of a new intake, modal Tab focus containment, and focus restoration.
- Confirmed catalogue-authoring buttons remain disabled and no durable storage/network/ERP behavior was introduced.
- This is not real-browser certification. Responsive visual rendering, native validation, assistive technology behavior, and infrastructure-dependent WCS tests remain unverified or blocked.

## 2026-10-28 — Defect-fix iteration 2: qualification feedback and modal keyboard handling
- Kept the Issue detail qualification gate visibly aligned with the temporary “Needs information” state instead of leaving a contradictory “Passed” badge.
- Added modal focus restoration and Tab/Shift+Tab focus containment; Escape remains available while the dialog is open.
- Validation uses JavaScript syntax compilation and a mocked-DOM interaction harness; this is not a substitute for real browser, visual, or assistive-technology testing.

## 2026-10-28 — Phase A defect-fix iteration 1
- Fixed Issue Intake submission to retain entered fields in a temporary in-memory queue visible on the Issue page; copy explicitly states refresh/close clears the queue and no formal case is created.
- Fixed “Mark information needed” to update and render CASE-024's temporary qualification review status and note.
- Replaced the decorative search block with a working local search across the synthetic CASE-024 and session-only intake records.
- Relabelled non-mutating candidate/action/history controls as preview actions so they do not imply persistent changes.
- Browser-runtime validation remains outstanding; this commit does not claim the full Worst-Case Stress Test suite passes.

## 2026-10-28 — Phase A static HTML prototype review
- Added `docs/testing/phase-a-static-prototype-review.md` with 22 source-level checks and disposition of all 12 Worst-Case Stress Tests.
- Recorded two defects: Issue Intake submit claims “Saved locally” without retaining a record; “Mark information needed” implies a status change but only shows a toast.
- Marked browser-runtime validation outstanding and persistence, authorization, ERP integration, concurrency, and offline synchronization as BLOCKED / NOT IMPLEMENTED.
- Linked the review report from README; no prototype behavior was changed in this review.

## 2026-10-28 — Worst-case stress test specification
- Added `docs/design/worst-case-stress-test-specification.md` with an Iran/high-risk synthetic stress scenario and 12 test cases covering intake integrity, qualification vs urgency, stale data, FX/liquidity shocks, hard constraints, shared-resource collisions, decision pressure, action/outcome separation, degraded connectivity, recovery, audit history, and unclassified catalogue items.
- Defined PASS / FAIL / BLOCKED / NEEDS REVIEW statuses, phased execution, minimum acceptance gates, and a test-run evidence template.
- Explicitly distinguished a proposed test contract from test execution; current HTML prototype limitations are not counted as passes.

# Change Log

## 2026-10-28 — Interactive visual MVP prototype
- Added a responsive, single-file client-side prototype at `docs/demo/mvp-prototype.html` with Home, Issue, Solution, Decision & Actions, Outcomes & Learning, and Settings screens.
- Connected the synthetic CASE-024 journey across qualification, three candidate assessments, decision rationale, action board, outcome review, and audit trace.
- Added a working local Issue Intake form, candidate assessment feedback, screen navigation, and disabled catalogue-authoring controls.
- Explicitly documented prototype limits: no backend, persistence, authentication/authorization, or ERP integration; supporting Home queue rows/counts are illustrative.

## 2026-10-28 — End-to-end demo fixture and visible-but-disabled catalogue buttons
- Added synthetic `CASE-024` data covering Issue Intake, qualification, accepted case, three case-specific solution candidates, feasibility and constraint checks, shared profile snapshot, decision, actions, outcome review, learning eligibility, and audit events.
- Added D-026: NEW ISSUE and NEW SOLUTION stay visible but disabled in the related forms; they must not trigger UI or data side effects.
- Clarified that these buttons concern reusable catalogue definitions only; normal Issue Intake and case-specific Solution Candidate creation remain separate MVP functions.
- Explicitly labelled the fixture as synthetic; no runtime app or live ERP integration is implied.

## 2026-10-28 — MVP scope simplified: defer NEW ISSUE / NEW SOLUTION
- Removed runtime user-facing authoring of reusable Issue Types and Solution Types from MVP scope.
- Defined unclassified intake and manual-review behavior when no catalogue type or solution fits.
- Preserved the extensible catalogue architecture and governed authoring workflow as later-version requirements.
## 2026-10-28 — Canonical enterprise Issue–Solution matrix rewritten
- Replaced manufacturing-only framing with a full enterprise value-chain reference matrix, common issue archetypes, 24 qualification checks, reusable solution archetypes, conditional applicability rules, typed relationships, catalogue extensibility, governance and outcome learning.
- Added machine-readable enterprise Issue Type and qualification-rule seeds and expanded cross-domain applicability and relationship data.
- Retained the manufacturing matrix as a clearly labelled domain appendix and linked the canonical matrix from the README.
## 2026-10-28 — Enterprise-wide extensible Issue–Solution network
- Expanded the Issue–Solution architecture from a manufacturing-focused starter matrix to the full enterprise value chain.
- Defined inline user creation for reusable Issue Types and Solution Types, explainable matching, proposed qualification-rule templates, typed/versioned relationships, and catalogue governance.
- Added safeguards against silent merges, unreviewed recommendations, weakened mandatory controls, and historical record rewrites.
## 2026-10-28 — Manufacturing Issue–Solution matrix and qualification framework
- Added machine-readable seed CSV catalogues for Issue–Solution applicability, qualification rules, and typed relationship semantics.
- Added a starter manufacturing taxonomy spanning materials, suppliers, equipment, quality, production, capacity, engineering, projects, logistics, finance, commercial, people, systems, safety, governance, and external disruptions.
- Defined transparent pre-registration qualification checks and dispositions, including information-needed, duplicate/link, redirect, non-acceptance with reason, and urgent parallel escalation.
- Added conditional Issue–Solution applicability patterns, reusable Solution Type attributes, typed relationship semantics, candidate retrieval controls, data-readiness levels, governance, and MVP acceptance checks.
- Explicitly separated qualification, urgency, priority, feasibility, decision authority, decision, action, and resolution; prohibited unsupported causal/financial assumptions.

## 2026-10-28 — MVP navigation and end-to-end ISSUE → SOLUTION chain
- Recorded the agreed fixed HOME layout with role/context-specific data for the MVP/demo.
- Separated ISSUE (intake, review, qualification, Issue Detail) from SOLUTION (candidate assessment, comparison, and decision preparation/recording) in the primary sidebar.
- Defined the proposed eight primary navigation entries plus SETTINGS and the scope of configurable settings.
- Added a traceable end-to-end reference chain covering qualification outcomes, multiple solution candidates, feasibility and parametric impact, profile-based comparison, decision record, action execution, outcome review, learning, screen transitions, data links, audit rules, and acceptance walkthrough.
- Clarified that the scenario is illustrative, does not imply live ERP integration or causality, and does not authorize automatic production schedule changes.

## 2026-10-28 — End-to-end reference design scenario
- Added the end-to-end reference scenario from issue intake through qualification, candidate assessment, decision, actions, outcome review, and organizational learning.
- Defined conceptual screen responsibilities, data attributes, permissions, state dimensions, integration contracts, exception handling, auditability, and MVP acceptance criteria.
- Clarified that decision-time profile targets are frozen for later outcome comparison and that meeting one parameter target does not alone prove overall decision success.


## 2026-10-28 — Weighted Decision Profiles and Best Profile learning
- Unified the parameter catalogue used for solution impact assessment and profile-based prioritization.
- Documented organization defaults, personal/custom profiles, solution-specific profile perspectives, fair candidate comparison, and transparent weighted priority indicators.
- Added outcome-based Best Profile recommendations with sample-size, context, and uncertainty safeguards.

## 2026-10-28 — Parametric financial-impact assessment
- Added a manager-owned, staged 1–5 assessment model for case-specific solution candidates.
- Distinguished ordinal ratings from monetary calculations; documented scale direction, unknown values, assessment ownership, progressive refinement, and audit history.
- Linked the proposed baseline model and its open decisions from the decision architecture.

## 2026-10-28 — Decision rules clarified
- Added financial impact assessment for each solution candidate, with costs, margin, cash-flow timing, assumptions, evidence, and uncertainty kept distinct.
- Clarified configurable, versioned decision profiles including sales commitments and liquidity preservation.
- Confirmed that lower-level selections do not hide or disable applicable alternatives for higher-level managers.
- Added decision history and handling of actions already underway.

## 2026-10-28 — Conceptual network model completed
- Added the conceptual network map and entity/cardinality model.
- Separated reusable knowledge relationships from case-specific links and evidence.
- Clarified that a relational database with typed relationship records can support the MVP.


## 2026-10-28 — English / Persian localization
- Added an in-prototype English/Persian language toggle with LTR/RTL layout and dynamic localization for interface text, forms, status labels, demo values, decision safeguards, validation messages and document title.
- Added bilingual product localization contract and English–Persian terminology glossary.
- Added Persian companion documentation for architecture, issue lifecycle, decision/learning, rejected alternatives, recommendation abstention/emergency actions, value measurement and the CASE-024 synthetic fixture.
- Added automated regression checks for language metadata, RTL direction and dynamically rendered Persian solution content.
- Canonical identifiers, enum codes and source narratives remain stable; localized display text does not overwrite original evidence.
- Added a Persian/English terminology map for issue domains, archetypes, solution patterns, relationship types and status labels in seed catalogues.
- Added Persian companion references for worst-case stress testing, Phase A review, master data/relationships and the end-to-end Issue–Solution chain.
- Added bilingual qualification-rule labels and applied them to the runtime localization dictionary.


## Home reference alignment (2026-10-28)
- Updated the Home visual structure to follow the supplied PARS Value Protection Tower reference and `newmodel1/demo/main.png`.
- Reworked the Project Value & Risk Map into a quadrant-style plot with colored project markers and intervention-window framing.
- Replaced generic portfolio icons with photographic product tiles and added photo-led management decision cards.
- Added a synthetic project portfolio table and material-development list while preserving the separation between effectiveness and efficiency.
- All project metrics and placements remain explicitly synthetic; no live PARS/ERP integration is claimed.


## Home header removal (2026-10-28)
- Removed the Home page intro/header block (eyebrow, greeting/title, subtitle, and New Issue Intake button) from both English and Persian renderings. Home now begins directly with dashboard content.
- Updated smoke-test expectations so navigation and language checks no longer depend on the removed greeting.


## 2026-10-28 — Dedicated Projects and Value Map navigation
- Added the agreed eight-item sidebar: Home, Projects, Value Map, Issue, Solution, Decision & Actions, Outcomes & Learning, Settings.
- Added dedicated Projects and Value Map pages with portfolio/product imagery, project registers, intervention windows, evidence state and links to existing demo workflows.
- Connected the Home portfolio panel to Projects and the Home value/risk panel to Value Map.
- Added browser smoke coverage for menu order, page rendering and Home-to-detail navigation. All project-level demo values remain synthetic.


## 2026-10-28 — Home, Issue and Solution page refresh
- Reordered Home to follow the agreed management sequence and added the Issue workbench directly after the status cards.
- Rebuilt Issue as an Issue List workspace with status dashboards, search/filter, qualification/evidence context, selected-record detail, and New Issue Intake at the bottom of the page.
- Rebuilt Solution as a Solution List workspace with candidate status dashboards, search/filter and detailed comparison.
- Added browser-smoke coverage for Home section presence, Issue/Solution list counts, search behavior, and bottom placement of New Issue Intake. Demo records remain synthetic.


## 2026-10-28 — Home dashboard rendering fix
- Fixed an automatic-semicolon-insertion defect in the Home renderer: a newline immediately after `return` caused the Home function to return `undefined`, leaving the main page blank.
- Restored the agreed Home section sequence: status cards; Issue workbench; Project Value & Risk Map beside Product / Work-Portfolio Status; management decisions beside priority project portfolio; latest material developments and decision-integrity controls.
- Existing browser smoke tests assert that the Home dashboard content and key sections render.
