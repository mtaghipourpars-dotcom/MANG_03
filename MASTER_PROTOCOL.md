# MANG_03 Master Development Protocol — Google AI Studio

## Mission
Build the documented MANG_03 enterprise decision-support service as a maintainable, interactive, bilingual application from this repository. The goal is a real end-to-end application, not a static mock-up. Follow the repository contracts and prove every gate with evidence.

## Authority order
1. Explicit user instruction in the active task.
2. `AGENTS.md` and this protocol.
3. `SCREEN_REFERENCE_CONTRACT.md` for the visual reference and page composition.
4. Canonical product invariants in `docs/product/first-principles-key-resource-allocation.md` and its Persian version.
5. Canonical workflow, data, decision, localization and safety contracts linked in `README.md`.
6. `APP_ARCHITECTURE_AND_DATA.md` and `ACCEPTANCE_GATES.md`.
7. Existing code and tests as evidence of current behavior, not as authority over an explicit contract.
8. Agent-generated proposals, which remain hypotheses until validated.

When two authoritative contracts conflict, stop and record the conflict in the ledger. Do not silently choose.

## Work mode
- Execute one implementation gate per prompt.
- At the start: inventory the actual repository, inspect current code/tests and identify the current gate. Do not assume a stack, route, API, database or connector exists.
- Return a short discovery/plan report before making changes for a new gate.
- Make the smallest complete change that satisfies the gate; preserve working behavior.
- AI Studio-generated code is untrusted until tested. Do not claim completion from generated code, a preview, or a successful compile alone.
- Do not generate all pages in one prompt. Establish data/architecture contracts, shell, then implement connected slices.
- Every control that appears interactive must perform its documented action or be clearly disabled with an explanation. No decorative dead buttons.
- Do not substitute local arrays or localStorage for persistent production records. Temporary in-memory demo state is permitted only when visibly labeled and explicitly documented as nonpersistent.
- Never fabricate data or pretend that source-system integrations are live.

## Required application architecture
- Frontend: use the repository's existing stack if viable; do not change framework without recording a reason and approval. If the imported prototype is only HTML, propose the migration plan first and preserve behavior during migration.
- Server/API: isolate business rules, access control, validation, audit and persistence from view components.
- Persistence: use a durable relational database for production records. PostgreSQL is the proposed target, but provisioning/credentials must be explicitly confirmed; never pretend it is connected. Define migrations, keys, foreign keys, uniqueness, indexes, transaction boundaries and seed policy.
- Deterministic domain services implement qualification, feasibility gates, comparison/profile evaluation, decision/action lifecycle and outcome integrity. LLM output may explain or summarize evidence, never invent facts or override deterministic hard gates.
- Define source adapters behind interfaces. ERP/SAP, P6, MES, PLM, SCADA, finance or other source integration is NOT CONNECTED until a tested adapter and authorized environment prove otherwise.
- Every decision-relevant datum must preserve, where applicable: `data_class`, `source_system`, `source_reference`, `source_owner`, `as_of`, `confidence`, `quality_status`, `snapshot_id`, `created_by`, `created_at`, `updated_at`, and history/version.
- Mutations require server-side validation, authorization, audit event and explicit transaction behavior.
- Authentication/authorization roles and permissions must be designed explicitly; do not infer company org chart or approval delegation.

## Mandatory business order
1. Validate input, access and referential integrity.
2. Preserve the initial submission as immutable source narrative/evidence.
3. Run the transparent Issue Qualification Gate; allow accept, return for information, duplicate link, out-of-scope disposition or manual review with reasons.
4. For qualified Issues, resolve applicable issue/solution types and case-specific links with evidence; do not assume causal relationships.
5. Define candidate solutions and record assumptions, dependencies, required resources, timing and evidence.
6. Evaluate feasibility first: dependency/precedence; time-phased materials; machine/work-center capacity; manpower/skills; method/qualification; applicable safety/legal/technical constraints; cash only when supported by authorized data; shared-resource conflicts/opportunity cost.
7. If no candidate passes hard constraints, return `NO_FEASIBLE_OPTION`, show blockers and escalate a resource/constraint crisis. Do not rank infeasible candidates as feasible.
8. Assess relevant versioned qualitative parameters by authorized managers. Unknown remains explicit. Candidate comparisons use the same selected profile/version.
9. Present trade-offs, evidence, uncertainty and alternatives. Human authority makes and records the decision.
10. Create/assign actions separately from decisions; track status, owner, due date, reassignment and audit.
11. Record observed outcomes separately from planned/expected outcomes; compare with frozen baseline and preserve causal uncertainty.
12. Propose learning only from evidence; human review approves reusable learning/profile changes.

## Financial-impact rule
The financial impact assessment is central to decision support, but it is NOT part of the initial Issue Intake form. Intake submitters often lack the data, authority and context required for defensible financial estimates. In the MVP, relevant managers assess versioned qualitative parameters after qualification. Each parameter has a definition, scale anchors, direction, responsible role/domain, allowed values and evidence/rationale rules. Store assessor, timestamp and version. Unknown / Not assessed is not zero and must not silently rank as low impact. Quantitative monetary valuation and cash-flow timing models are deferred until data quality and process ownership justify them.

## Home page contract
The Home page is the primary management dashboard. Preserve the agreed section order:
1. Executive status cards.
2. Issue workbench / Issue queue.
3. Two primary views side-by-side: **Project Value & Risk Map** and **Product / Work-Portfolio Status**.
4. Management decisions requiring attention beside the priority project portfolio.
5. Latest material developments / timeline and decision-integrity context.

The two primary views are separate:
- Value & Risk Map = efficiency, risk-adjusted allocation of scarce key resources, exposure, intervention window and evidence quality.
- Product / Work-Portfolio Status = effectiveness, product/work-family delivery and commitments/outcomes.
Clicking the portfolio view navigates to Projects; clicking the Value & Risk Map navigates to Value Map. Images/thumbnails replace generic icons in the portfolio cards and urgent management decision cards when the reference provides images. All demo values, project assignments and images must be labeled synthetic unless independently sourced.

## Issue and Solution pages
- Issue page: status metrics, searchable/filterable Issue List, qualification/evidence dashboards, selected record/detail and lifecycle controls. Place **New Issue Intake** at the bottom of the page; it opens the complete intake form. Intake must not request financial amounts.
- Solution page: status metrics, searchable/filterable Solution List, feasibility/assessment dashboards and selected solution-set comparison. Keep feasibility distinct from priority and preserve blockers.
- Sidebar labels and order: Home; Projects; Value Map; Issue; Solution; Decision & Actions; Learning Outcomes; Settings. Localized labels may be translated, but canonical route IDs remain stable.

## UI and localization
- Persian-first, right-to-left layout, responsive, with English/Persian toggle.
- Preserve the attached PARS executive dashboard as the primary visual baseline and consult `newmodel1/demo/main.png` as the reference implementation example. These are references for visual structure, not proof of MANG_03 live PARS data.
- Do not invent exact pixel dimensions if the target screenshot cannot be inspected. Record native reference dimensions and target viewport during G1.
- Maintain shared tokens, reusable widgets and page-specific contracts. Keep charts accessible and show units, legend, data class and unknown state.
- Keyboard navigation, focus handling, semantic headings, contrast and reduced-motion considerations are required.
- Do not let translation change IDs, source evidence, status enums or numeric meaning.

## Definition of done for each gate
- Exact scope/files and unresolved decisions recorded.
- Relevant unit/integration/e2e tests added or updated and actually executed.
- Build/typecheck/lint results recorded when available.
- Browser console has no new errors; required viewport overflow checked.
- Loading/empty/error/stale/disconnected/valid/invalid/unauthorized states reviewed as relevant.
- Provenance visible for decision-critical data.
- Visual screenshot and comparison evidence captured for UI gates.
- Documentation and implementation ledger updated.
- Exact commit/branch and known blockers recorded.

## Release truth
Do not call the application complete or production-ready until durable persistence across sessions, authz/authn, migrations, recovery/rollback, data reconciliation, security checks, regression tests and visual audits have passed. If Google AI Studio cannot execute a check, mark it NOT RUN/BLOCKED.
