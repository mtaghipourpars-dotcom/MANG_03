# MANG_03 Application Architecture and Data Contract

## Status
Normative implementation target. This file defines behavior and boundaries, not evidence that a backend/database/integration already exists.

## 1. Domain boundaries
- Intake submission: immutable original narrative plus submitted context/evidence.
- Issue case: a qualified issue accepted into the formal network.
- Qualification event: versioned decision to accept, return for information, link duplicate, mark out of scope or route to manual review.
- Issue/Solution knowledge catalogue: reusable types and applicability rules; distinct from case-specific instances and links.
- Solution candidate: a proposed response for one or more related qualified Issues, with its own assumptions, feasibility blockers, qualitative assessments and evidence.
- Decision: human-authorized selection, rejection, deferral, escalation or abstention, with rationale and alternatives preserved.
- Action: assigned execution task, separate from decision; owner/status/due date/reassignment history.
- Outcome observation: actual measured/observed result, source/time/quality, compared against a frozen baseline and expectation.
- Learning proposal: evidence-backed proposed reusable rule/profile update; requires human approval.
- Key resource: only a scarce/constraining resource relevant to a decision, not an exhaustive inventory of all resources.
- Decision profile and impact parameter: governed, versioned definitions; assessment values point to exact versions.

## 2. Canonical state distinctions
Do not collapse these state machines:
- Intake: DRAFT → SUBMITTED → UNDER_REVIEW → ACCEPTED_TO_CASE | RETURNED_FOR_INFORMATION | DUPLICATE_LINKED | OUT_OF_SCOPE | MANUAL_REVIEW.
- Issue case: OPEN → QUALIFYING → QUALIFIED → IN_ASSESSMENT → AWAITING_DECISION → DECIDED → IN_ACTION → MONITORING → CLOSED, with explicit reopen/supersede events. These are a proposed baseline and must be reconciled with existing lifecycle docs before schema migration.
- Solution candidate feasibility: NOT_ASSESSED | FEASIBLE | CONDITIONALLY_FEASIBLE | INFEASIBLE | UNKNOWN.
- Decision state: DRAFT → PENDING_APPROVAL → APPROVED | REJECTED | DEFERRED | ABSTAINED | ESCALATED. Only authorized human action changes approval state.
- Action: NOT_STARTED → IN_PROGRESS → BLOCKED → COMPLETED | CANCELLED, with owner/due-date history.
- Outcome attribution: CONFIRMED | PARTIAL | UNCERTAIN | NOT_ESTABLISHED. Never infer causal attribution from correlation alone.

Use the canonical enums from existing workflow/data contracts where they differ; this section is not permission to rename existing persisted IDs. Record conflicts before changing enums.

## 3. Provenance contract
For decision-relevant facts, store fields as applicable:
- `data_class`: VERIFIED_INTERNAL | VERIFIED_PUBLIC | USER_APPROVED_ASSUMPTION | DEMO_SYNTHETIC | UNKNOWN.
- `source_system`, `source_reference`, `source_owner`, `as_of`.
- `confidence`, `quality_status`, `snapshot_id`.
- `created_by`, `created_at`, `updated_by`, `updated_at`, `version`.
Keep existing canonical enums if they are already defined elsewhere; align aliases only through an explicit migration and documentation update.
Unknown is represented as null/UNKNOWN with a reason, not zero, empty string or invented default.

## 4. Candidate qualitative assessment
For MVP, authorized relevant managers assign versioned qualitative values after Issue qualification. Each parameter definition requires: stable ID, name/description, domain, direction (higher-is-better/lower-is-better/constraint-only), ordered scale anchors, responsible role/domain, required rationale/evidence policy, effective version/date and active status. Each assessment stores candidate/Issue, parameter ID+version, qualitative value or UNKNOWN/NOT_ASSESSED, assessor, timestamp, rationale, evidence links and review state.
Do not calculate monetary values from ordinal ratings. Do not sum ordinal values into a universal score. Profile-specific weighted comparisons are allowed only if the existing decision contract defines direction, normalization, missing-data behavior, weights and versioning; always show factor-level values and rationale.

## 5. Feasibility engine
Feasibility is a deterministic, testable service. Order:
1. Validate evidence and references.
2. Freeze baseline, candidate, profile/policy and engine versions.
3. Dependencies/precedence.
4. Time-phased materials.
5. Machine/work-center capacity.
6. Manpower and skills.
7. Method/qualification.
8. Applicable technical/legal/safety constraints.
9. Cash-by-time-bucket only if verified/authorized data exists.
10. Shared resource conflicts and opportunity cost.
11. Return blockers and feasibility state. Rank only feasible candidates; conditional candidates show conditions.
12. If no candidate is feasible, emit NO_FEASIBLE_OPTION plus crisis/escalation path; do not fabricate a candidate or auto-select.

Do not claim time-phased/resource integrations until the required data exists. Missing data may result in UNKNOWN/CONDITIONALLY_FEASIBLE or a hard stop according to the governed rule; never silently assume feasible.

## 6. API contract
Define versioned endpoints or equivalent server actions before wiring UI. Minimum logical operations:
- `POST /api/intakes`: create a submitted intake; validate required observation/context and preserve original narrative.
- `GET /api/intakes`: authorized filtered/searchable intake queue.
- `GET /api/issues`, `GET /api/issues/:id`: list and detail of qualified cases.
- `POST /api/issues/:id/qualification-events`: record a qualification action/reason/evidence.
- `GET /api/solutions`, `GET /api/solutions/:id`: candidates/list/detail.
- `POST /api/solutions/:id/assessments`: manager-owned qualitative assessment with parameter version and rationale.
- `POST /api/solutions/:id/feasibility-evaluations`: deterministic feasibility evaluation with snapshot/version.
- `POST /api/decisions`: create a decision draft with alternatives and authority metadata.
- `POST /api/decisions/:id/approval-events`: explicit human approval/rejection/defer/escalate/abstain event.
- `POST /api/actions`, `PATCH /api/actions/:id`: assign/update action with audit and owner history.
- `POST /api/outcomes`: append outcome observation, never overwrite prior actuals.
- `GET /api/projects`, `GET /api/value-map`: sourced project/portfolio and risk/value data.
- `GET /api/audit-events`: authorized immutable audit history.
These are logical API requirements, not claims that routes exist. If existing route naming differs, map and document it rather than creating duplicate operations.

## 7. Persistence and audit
- Use a durable relational store for production; PostgreSQL is the proposed target subject to confirmed provisioning.
- Migrations are versioned, repeatable in a clean environment and tested.
- Enforce foreign keys and uniqueness for stable IDs, transactional state changes and idempotency where retries are possible.
- Audit events are append-only for creation, update, status change, qualification, assessment, decision, approval, action reassignment, outcome and configuration/profile version change.
- Never edit an approved decision or actual outcome in place; append superseding events/records.
- Demo seed data is isolated from verified data and never silently promoted to actual.
- Secrets belong in server-side secret management/environment configuration, never source code/client bundles.
- Authz is enforced server-side for every mutation and sensitive read; UI hiding is not security.

## 8. Error contract
Every API error returns stable machine code, safe user message, correlation/request ID and validation details where appropriate. Distinguish validation, not found, conflict/stale version, forbidden, unauthenticated, source unavailable, and internal error. Never expose secrets or stack traces to end users.

## 9. AI boundary
LLM can summarize source evidence, explain a deterministic calculation, draft a decision brief, or suggest questions for human review. It cannot create source facts, decide feasibility outside deterministic rules, convert unknown to zero, make/approve a decision, execute an action, post to ERP, or declare an outcome causal without evidence.

## 10. Required operational states
Every data-backed page/widget must represent: loading; valid data; empty; partial/unknown; stale; disconnected/unavailable source; validation error; authorization denial; and safe retry where appropriate. Show provenance/as-of and demo labels on decision-relevant content.
