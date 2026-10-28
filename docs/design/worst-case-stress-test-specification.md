# Worst-Case Stress Test Specification — MANG_03

- **Document status:** Proposed test specification; not evidence of a completed test.
- **Version:** 0.1
- **Date:** 2026-10-28
- **Scope:** Enterprise Issue–Solution decision-support service, with high-risk operating conditions relevant to Iran and similar environments.
- **Reference fixture:** Synthetic `CASE-024` only.
- **Execution boundary:** No live ERP, financial system, production schedule, or real organization data may be used in this initial test.

## 1. Purpose

Verify that the service preserves decision integrity when several adverse conditions occur together: liquidity and FX shocks, supply uncertainty, infrastructure outages, scarce shared resources, incomplete or stale information, missing approvals, and pressure for immediate decisions.

The test is not passed merely because the UI remains open. It must check both system behavior and the trustworthiness of the resulting case record.

## 2. Non-negotiable safety and integrity rules

1. **Unknown is not false, zero, or confirmed.** Missing, stale, conflicting, estimated, and observed values must remain distinguishable.
2. **Intake is preserved.** An incomplete, duplicate, out-of-scope, or unclassified intake must not disappear merely because it cannot proceed.
3. **Qualification is separate from urgency and priority.** Urgency may trigger escalation, but does not silently qualify an issue or waive required checks.
4. **Feasibility is separate from priority.** A hard-blocked option cannot win through a weighted score. No comparable priority score should be presented as if the option were feasible.
5. **Association is not causation.** A supplier uncertainty does not prove a delivery miss, lost margin, or cash loss.
6. **Estimates are not observations.** Forecast impact, selected solution, decision, action completion, and observed resolution are separate facts.
7. **Authority remains explicit.** The service supports authorized human decisions; it does not grant authority or autonomously alter detailed production schedules.
8. **Shared resources cannot be double-allocated.** Conflicting claims must be exposed for resolution rather than silently accepted.
9. **Audit history is append-preserving.** Corrections and superseding decisions must not erase the original submission, evidence, assumptions, profile snapshot, decision, or actions.
10. **Offline capability must not be overstated.** Local entry, durable storage, conflict resolution, synchronization, and recovery are separate capabilities and must be tested individually if implemented.

## 3. Stress scenario

Use synthetic case `CASE-024`: a critical component supplier has not confirmed the delivery date. Do not assume that a delivery commitment has already been missed.

Apply the following adverse conditions together:

- Liquidity available for discretionary commitments is sharply reduced.
- FX rate and import-related cost assumptions change materially during the case.
- Supplier confirmation is unavailable; import/clearance timing is uncertain.
- The ERP or external source connection is interrupted and displayed data may be stale.
- Two or more cases compete for the same constrained machine, specialist, material, or cash envelope.
- An alternate source requires Engineering/Quality approval that has not yet been obtained.
- A senior decision is requested before all evidence is available.
- Connectivity is intermittent or unavailable for a period.
- After service recovery, newer source data conflicts with data captured before the outage.

All numbers and events used during execution must be explicitly marked **SYNTHETIC / DEMO**. Test operators must not use real production or financial values.

## 4. Test result vocabulary

- **PASS:** Observed behavior meets the stated expected result and evidence is recorded.
- **FAIL:** Observed behavior violates a non-negotiable rule or the test's expected result.
- **BLOCKED / NOT IMPLEMENTED:** The current prototype cannot exercise the capability. This is not a pass.
- **NEEDS REVIEW:** The behavior is ambiguous or needs an owner to adjudicate; do not silently mark it passed.

Every test record should include: test ID, build/commit, date, operator, synthetic input set, preconditions, steps, expected result, observed result, status, evidence link/screenshot/log, defect reference, and retest result.

## 5. Test cases

### WCS-001 — Preserve incomplete intake
**Setup:** Submit an intake stating only that supplier delivery confirmation is pending; omit root cause, confirmed delay, and quantified impact.

**Expected:**
- The original intake remains traceable.
- Missing information is represented as unknown/not supplied, not inferred.
- No root cause, delivery miss, or financial loss is fabricated.
- The intake can be routed for clarification or qualification without being silently discarded.

**Failure examples:** Automatically labels the delivery late; assigns a monetary loss without evidence; removes the intake because fields are incomplete.

### WCS-002 — Separate urgency from qualification
**Setup:** Mark the issue time-critical while evidence and required fields remain incomplete.

**Expected:**
- Urgency is recorded independently.
- Any urgent parallel escalation is visible where configured.
- Required qualification checks remain visible and unresolved until supported.
- Urgency does not automatically mark the case Accepted or bypass hard controls.

### WCS-003 — Stale and unavailable source data
**Setup:** Interrupt the source connection and retain an older synthetic FX rate, stock position, or supplier status.

**Expected:**
- The data's source, captured/updated time, and stale/unavailable state are visible.
- The system does not present old values as live values.
- Decisions depending materially on stale data are flagged for confirmation or handled under an explicitly approved degraded-mode rule.
- No silent replacement of missing values with zero occurs.

### WCS-004 — FX and liquidity shock during evaluation
**Setup:** Change the synthetic FX assumption and reduce available liquidity after candidate assessments have begun.

**Expected:**
- The old and new assumptions/values are traceable with timestamps and provenance.
- Financial amount, currency, time horizon, uncertainty, and confidence remain explicit where represented.
- The decision-time profile and parameter snapshot remain frozen for audit.
- A re-evaluation can be recorded without rewriting the historical basis of an earlier decision.

### WCS-005 — Hard-blocked alternative
**Setup:** Present an alternate component/source with an unresolved mandatory Engineering/Quality approval.

**Expected:**
- The candidate is marked blocked/not currently feasible under the stated constraint.
- It cannot be presented as the winning feasible option solely due to a favorable priority score.
- The missing approval, responsible role, and condition to unblock are visible.
- The candidate remains in the case history.

### WCS-006 — Shared-resource collision
**Setup:** Two synthetic cases request the same scarce machine, specialist, material, or liquidity allocation for overlapping periods.

**Expected:**
- The conflict and affected cases/resources are visible.
- The same constrained quantity is not silently counted as fully available to both cases.
- Any proposed allocation records the decision owner, time window, assumptions, and rationale.
- If the system cannot calculate a valid allocation, it declares the limitation and routes for human review.

### WCS-007 — Decision pressure with incomplete evidence
**Setup:** Request an immediate senior decision while source confirmation is missing and at least one option has unresolved uncertainty.

**Expected:**
- The interface distinguishes confirmed facts, assumptions, estimates, unknowns, and unresolved constraints.
- The authorized decision-maker can defer, request evidence, or make an explicitly qualified decision if policy permits.
- The system does not fabricate certainty or claim that its recommendation is mandatory.
- Authority and decision rationale are recorded.

### WCS-008 — Decision, action, and outcome remain distinct
**Setup:** Select a candidate, create actions, leave one action incomplete, and submit an outcome observation that verifies only one target.

**Expected:**
- Selection does not imply execution.
- An incomplete action does not become complete.
- Meeting one parameter target does not automatically establish overall case success.
- Unverified downstream commitments remain unverified.
- Estimated and observed impacts remain distinguishable.

### WCS-009 — Intermittent connectivity / degraded mode
**Setup:** Disable external connectivity during intake or case review, then restore it.

**Expected for any claimed offline capability:**
- The operator can identify whether they are using local, cached, or live data.
- The system makes no claim of durable local save unless data actually survives reload/restart as designed.
- Queued changes, if supported, retain actor/time/source and are not silently lost or duplicated.
- If offline persistence or safe synchronization is not implemented, the UI states the limitation clearly and this test is marked BLOCKED / NOT IMPLEMENTED, not PASS.

### WCS-010 — Recovery and conflicting updates
**Setup:** After connectivity returns, introduce a synthetic source update that conflicts with a value captured during the outage.

**Expected:**
- Conflicting values and their provenance remain inspectable.
- Reconciliation does not silently overwrite a human decision or historical evidence.
- Any chosen resolution records who/what resolved the conflict, when, and why.
- If synchronization is not implemented, mark the test BLOCKED / NOT IMPLEMENTED.

### WCS-011 — Audit integrity and superseding decision
**Setup:** Record a decision and start an action; later, an authorized manager chooses a different candidate.

**Expected:**
- The prior decision remains visible as history.
- The later decision is recorded as new/superseding with rationale and links.
- Started actions are explicitly continued, amended, or cancelled by an authorized person; they are not silently erased.
- The profile/version and evidence used for each decision remain traceable.

### WCS-012 — Unclassified or unsupported issue/solution type
**Setup:** Submit an issue or candidate that does not fit the curated catalogue.

**Expected:**
- Preserve the intake and route it to **Not sure / Other — classification review required** or manual review, as applicable.
- Do not force an unsuitable catalogue match.
- **NEW ISSUE** and **NEW SOLUTION** catalogue-authoring buttons remain visible but disabled in the MVP and have no side effects.
- Normal intake and case-specific candidate workflows remain distinct from reusable catalogue authoring.

## 6. Execution phases

### Phase A — Static prototype review
Check only what the current client-side HTML actually implements: visible states, labels, navigation, form validation, disabled catalogue buttons, and clarity of prototype limitations. Record all unsupported persistence, permissions, integration, concurrency, and synchronization tests as BLOCKED / NOT IMPLEMENTED.

### Phase B — Deterministic demo simulation
After testable state transitions are implemented, run the synthetic case through controlled shock events. Use repeatable inputs and verify expected states and audit trace. No live data or external actions.

### Phase C — MVP service validation
Only after a backend, persistence, identity/authority controls, and relevant integration contracts exist, test durable records, access control, concurrency, recovery, and audit behavior.

### Phase D — Controlled pilot
Use a specifically authorized pilot environment with synthetic or approved masked data, agreed owners, rollback/containment rules, and explicit approval. Do not infer production readiness from passing the HTML prototype.

## 7. Minimum acceptance gate

The stress-test specification is **not considered passed** until:
- All applicable non-negotiable integrity rules have test evidence.
- Every executed test is PASS or has an accepted, documented disposition; BLOCKED is never counted as PASS.
- No unresolved critical failure allows unsupported causal/financial claims, hard-constraint bypass, false live-data status, loss of intake/audit history, unauthorized decisions, or silent double allocation.
- Defects, owners, retest criteria, and residual risks are documented.
- Prototype-only results are clearly separated from service/backend and pilot results.

## 8. Current prototype capability boundary

The existing `docs/demo/mvp-prototype.html` is a single-file client-side UI demo. It has no backend, authentication/authorization, ERP integration, durable persistence, or real offline synchronization. Its synthetic `CASE-024` content is illustrative. Therefore this document defines the test contract; it does **not** claim the full test suite has been executed or passed.

## 9. Execution record template

Copy this table for each test run.

| Field | Value |
|---|---|
| Test ID | WCS-___ |
| Build / commit | |
| Operator / date | |
| Synthetic inputs / preconditions | |
| Steps performed | |
| Expected result | |
| Observed result | |
| Status (PASS / FAIL / BLOCKED / NEEDS REVIEW) | |
| Evidence / screenshot / log | |
| Defect / owner | |
| Retest result | |


## 10. Additional decision-integrity tests added with the prototype guardrails

These checks extend the original WCS contract; they do not change the status of infrastructure-dependent tests.

| Test ID | Scenario | Required result | Prototype evidence / limitation |
|---|---|---|---|
| WCS-013 | Previously rejected/deferred alternative becomes relevant after new evidence | Keep original disposition and reason; flag a new reassessment; never silently overwrite the prior decision | UI can flag reconsideration in session memory; trigger monitoring and immutable audit history remain NOT IMPLEMENTED |
| WCS-014 | Evidence is stale/conflicting, hard gate unresolved, or no candidate feasible | Abstain with a visible reason; do not present a candidate as recommended; preserve a separate bounded emergency proposal path | UI hold and proposal capture tested in browser; authorization, expiry enforcement and execution remain BLOCKED / NOT IMPLEMENTED |
| WCS-015 | Product claims value after a decision or favorable outcome | Require baseline, decision delta, observed result, measurement window and attribution status; do not infer causality from sequence alone | UI capture tested; ROI calculation, source verification, counterfactual quality and causal attribution require pilot/backend validation |

The added browser checks establish interaction behavior only. WCS-013 to WCS-015 are not fully passed at service level until their durable audit, authority, data-quality and outcome-evidence requirements are implemented and validated.
