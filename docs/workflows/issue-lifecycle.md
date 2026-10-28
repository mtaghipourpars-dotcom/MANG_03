# Issue Lifecycle and Qualification Gate

## 1. End-to-end conceptual flow
Authorized user submits an Issue Intake → qualification gate evaluates it → accepted intake becomes/links to an Issue Case → candidate solutions are shown → manager review and/or authorized decision → decision creates actions → actions execute → actual outcomes are recorded → case resolution/follow-up is determined → lessons learned inform future recommendations.

This is a conceptual lifecycle, not a mandatory fixed route. The system must support authority-based branching and case-specific follow-up.

## 2. Intake versus formal case
**Issue Intake** is the initial report. It must be stored even if it is incomplete, duplicated, redirected, or not accepted. **Issue Case** represents an accepted issue in the formal Issue–Solution process. This distinction is fundamental.

Initial intake fields to consider:
- concise title and description
- submitter identity and organizational context
- when/where observed
- observed fact versus interpretation
- affected process or operational object, if known
- evidence/attachments or references
- immediate risk/urgency indicators
- possible duplicate or related case reference

Avoid requiring submitters to know the full value-chain impact or propose a complete solution.

## 3. Qualification gate responsibilities
The gate checks whether the issue is sufficiently clear, in scope, non-duplicative (or linkable to an existing case), and suitable for the formal network. Criteria must be explicit and auditable.

Possible results:
- Accepted
- Needs information
- Potential duplicate / linked to existing case
- Out of scope / redirected
- Not accepted with reason and authorized review where required

The gate may use deterministic rules, assisted analysis, and human review. Do not silently discard a real issue due to an opaque score. Keep intake history and the rationale for every disposition.

## 4. Candidate solutions timing
The current architecture intent is to assess the issue before showing the first-stage solution candidates. After qualification, show applicable initial solutions from the standard Issue–Solution network. Candidates are suggestions, not commitments or final decisions.

## 5. Organizational interaction layers
### Layer 1 — Authorized submitters
Submit initial issues and evidence; provide requested missing information; follow status and clarifications according to permissions.

### Layer 2 — Manager review interface
Review facts, applicability, impacts, alternatives, and confidence. Managers may:
- resolve/decide within delegated authority;
- request more evidence;
- assign a local action;
- escalate with rationale when cross-functional impact, risk, or authority exceeds their scope.

### Layer 3 — Senior-management decision interface
CEO/senior leaders decide cases requiring enterprise-level trade-offs. Options may include changing action ownership, prioritizing resources, negotiating supplier/customer commitments, qualifying alternate material, changing timing through the appropriate planning/commitment process, or selecting another feasible response. Senior management is not restricted to allocating cash.

These layers define interaction/authority, not an invariant three-step approval chain. Rules may permit a case to be resolved at layer 2 or escalated differently when justified.

## 6. Backward and forward flows
- **Backward flow:** issue originates wherever observed and is reviewed/escalated as required by its impact and authority needs.
- **Forward flow:** decision generates actions assigned to the person/function best suited to execute. The action owner may differ from the issue originator and may change after a decision.

## 7. Do not conflate statuses
Keep separate state concepts for:
- intake/qualification status
- case review/escalation status
- decision status
- action status
- resolution/follow-up status

A decision does not imply an action was completed; action completion does not automatically prove the issue was resolved. Some cases may be considered resolved while related follow-up continues.

## 8. Traceability requirements
Record timestamps, actor, previous and new state, reason, evidence, authority basis, and relevant profile/rule version for important transitions. Preserve rejected or redirected intake history. Merges/duplicate links should remain traceable and reversible according to governance rules.


## 9. Manufacturing Issue–Solution qualification matrix
The reusable manufacturing taxonomy, ordered qualification checks, data-readiness levels, issue-to-solution applicability patterns, relationship semantics, governance, and MVP acceptance checklist are defined in the [Manufacturing Issue–Solution Matrix and Qualification Framework](../design/manufacturing-issue-solution-matrix.md). This matrix is a generic starter baseline; validate site-specific safety, quality, compliance, authority, and source-system rules during the pilot. Qualification must preserve intake history, avoid opaque scoring as the sole gate, and must not require a submitter to diagnose root cause or supply a solution.


## 10. Enterprise-wide catalogue extensibility
Issue and Solution catalogues are enterprise-wide and designed for later user extensibility across the value chain. The MVP does not activate an inline ADD flow: NEW ISSUE and NEW SOLUTION remain visible but disabled in their related forms. A later version may search existing definitions, propose explainable matches and relationships, and save reviewed proposals as Draft/Provisional while preserving the live intake. Qualification templates and relationships must remain Proposed until reviewed; similarity does not prove identity, causality or applicability. See [Enterprise Value-Chain Issue–Solution Knowledge Network](../design/enterprise-value-chain-extensible-issue-solution-network.md).


## 11. Canonical enterprise-wide reference matrix
The [Enterprise Issue–Solution Reference Matrix](../design/enterprise-issue-solution-reference-matrix.md) governs domain coverage, qualification checks, solution archetypes, relationship semantics, user-extensible catalogues, versioning, resource conflicts and outcome review. The manufacturing matrix is a domain appendix, not a scope boundary.


## MVP catalogue scope
The MVP does not allow users to create reusable Issue Types or Solution Types. In the related Issue Type and Solution Type forms, show **NEW ISSUE** and **NEW SOLUTION** in their intended positions but keep them visibly disabled, with helper text such as “Available in a future version”; they must have no click/keyboard action or side effects. This does not disable normal Issue Intake submission or case-specific Solution Candidate creation. When no Issue Type fits, preserve the intake as **Not sure / Other — classification review required** and route it for review. When no Solution Type fits, record manual review/escalation rather than force-fitting a solution. Runtime catalogue authoring and AI-generated qualification templates/relationships are deferred to a later version. See [D-025/D-026](../../DECISIONS.md) and the [canonical matrix](../design/enterprise-issue-solution-reference-matrix.md).
