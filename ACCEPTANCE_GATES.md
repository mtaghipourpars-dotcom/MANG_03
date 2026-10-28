# MANG_03 Acceptance Gates and Testable Requirements

A requirement is accepted only by evidence, not by an agent saying it is implemented.

## Product-wide
- [ ] Product supports human decision-making; no autonomous approval or execution.
- [ ] Intake, qualified Issue, candidate, feasibility, priority, decision, action, resolution and outcome are distinct.
- [ ] Every demo record/amount/status is labeled DEMO_SYNTHETIC.
- [ ] Unknown/missing values remain UNKNOWN/null and are not sorted or plotted as zero without an explicit governed rule.
- [ ] Data class, source, as-of, confidence/quality and version are visible where decision relevant.
- [ ] English/Persian toggle works; Persian RTL; canonical IDs/enums do not change with language.
- [ ] All navigation, filters, drill-downs, forms and buttons work by mouse and keyboard.
- [ ] Errors, empty, loading, stale/disconnected and permission-denied states are covered.
- [ ] No console errors, unhandled rejections or horizontal overflow at target viewports.
- [ ] Tests and actual command output are recorded in the ledger.

## Home
- [ ] Section order is exactly: status cards → Issue workbench → Value & Risk Map beside Product/Work-Portfolio Status → management decisions beside priority project portfolio → latest material developments/decision integrity.
- [ ] The Value & Risk Map communicates risk-adjusted allocation/efficiency; the Portfolio communicates effectiveness/commitments. They are not merged into one score.
- [ ] Map axes, units, legend, zones and unknown behavior are explicit.
- [ ] Portfolio cards use real sourced images if available; otherwise neutral placeholder plus explicit unavailable image state, not invented external assets.
- [ ] Urgent decision cards use related project/asset thumbnails when an approved image exists.
- [ ] Each summary card and row navigates to a destination with matching selected filter context.
- [ ] Timeline events have source/time; unknown dates are not fabricated.
- [ ] Home never renders blank; error boundary and meaningful fallback are present.

## Projects and Value Map
- [ ] Projects list/detail supports search/filter and status/provenance.
- [ ] Product/work family and project relationships come from canonical MANG_03 data, not copied PVPT enums.
- [ ] Value Map supports filtering, detail drill-down and provenance; no unsupported monetary values.
- [ ] Clicking portfolio in Home opens Projects; clicking map opens Value Map.

## Issue
- [ ] Issue List with counts, status filters, search, qualification/evidence dashboard and detail.
- [ ] New Issue Intake is at the bottom of the Issue page and opens the complete form.
- [ ] Intake validates required observed situation and context, preserves original narrative and evidence, supports explicit unknowns.
- [ ] Intake does not require financial amount, margin, cash-flow estimate or opportunity-cost calculation.
- [ ] Qualification actions have reason, actor, timestamp and audit trail; return/duplicate/out-of-scope/manual-review paths remain visible.
- [ ] Catalogue authoring controls that are deferred stay visibly disabled with explanation, not dead-looking active buttons.

## Solution
- [ ] Solution List has counts, search/filter, candidate detail and comparison.
- [ ] Feasibility gate is applied before ranking.
- [ ] Manager qualitative assessments use governed parameter/profile versions and record assessor, rationale and evidence.
- [ ] UNKNOWN / NOT_ASSESSED remains distinct from low/zero.
- [ ] Same comparison profile/version is used across candidates.
- [ ] No feasible option triggers explicit crisis/escalation rather than fabricated recommendation.

## Decision, Actions, Learning
- [ ] Decision records preserve chosen and rejected/deferred alternatives and reasons.
- [ ] Authority and approval are explicit; no silent auto-approval.
- [ ] Actions have owner, due date, state and reassignment history.
- [ ] Outcome observations append; prior actuals are not overwritten.
- [ ] Expected vs observed values and causal confidence remain distinct.
- [ ] Learning/profile updates are proposals until authorized human approval.

## Data/API/security
- [ ] Server-side validation/authz/audit for every mutation.
- [ ] Durable persistence proven across reload and a new session; localStorage alone does not pass.
- [ ] Migrations apply cleanly; FK/uniqueness/transaction tests pass.
- [ ] Secrets absent from client bundles and repository.
- [ ] Source adapters show NOT CONNECTED until verified by integration test.
- [ ] Backup/restore and rollback evidence recorded before release.

## Visual regression
- [ ] Actual reference image inspected and dimensions recorded.
- [ ] Current screenshot captured at matching viewport.
- [ ] Side-by-side comparison covers hierarchy, widths, RTL, chart geometry, cards, image thumbnails, typography and spacing.
- [ ] Additional viewport screenshots: 1280×800, 1024×768, 768×1024, 390×844.
- [ ] No pixel-match claim without real comparison artifacts and documented deviations.
