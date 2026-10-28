# Rejected and Deferred Alternatives Ledger

## Purpose
A decision must not erase viable alternatives. Keep rejected, deferred, and unselected options available for controlled reconsideration when the evidence or constraints change.

## Required record per alternative
- Case and decision version identifiers.
- Candidate / solution type and its assessed context.
- Disposition: selected, rejected, deferred, blocked, or superseded.
- Decision-time reason and evidence references.
- Hard-gate status separately from profile priority.
- Explicit reopening trigger (observable and testable).
- Owner responsible for monitoring that trigger.
- Reassessment event, new evidence, and resulting decision link.
- Timestamp and actor; history is append-only in production.

## Reopening rules
1. A changed condition creates a reassessment request; it does not silently change the active decision.
2. A blocked candidate cannot be reopened for selection until the named hard gate is evidenced as satisfied.
3. Reassessment creates a new comparison/decision version; never overwrite the prior rationale or its frozen profile targets.
4. A prior option's old score is not reused when material context, data freshness, constraints, or profile version changes.
5. A reopened alternative can still be rejected again, with the new reason recorded.

## CASE-024 synthetic example
| Alternative | Disposition | Reason | Reopening trigger |
|---|---|---|---|
| Expedite existing supplier order | Retained, not selected | Cost and recovery date are unconfirmed | Supplier provides a dated commitment and a costed expedite offer |
| Qualify alternate source/component | Deferred — hard gate | Engineering and Quality approval are not evidenced | Documented technical equivalence and both required approvals |

## MVP boundary
The HTML prototype supports a session-only reconsideration flag. It does not provide durable event history, notifications, trigger monitoring, or concurrency protection. Production acceptance requires append-only audit records and an explicit reassessment workflow.
