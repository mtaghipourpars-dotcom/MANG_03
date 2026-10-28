# Recommendation Abstention and Emergency Reversible-Action Path

## Decision rule
The service must be allowed to abstain from ranking or recommending a candidate. An abstention is a valid, explainable result—not a system failure and not permission to bypass controls.

## Mandatory abstention conditions
Withhold a recommendation when any material condition applies:
- Decision-critical evidence is stale, unavailable, contradictory, or lacks usable provenance.
- A hard technical, safety, legal, compliance, resource, or delegated-authority gate is unresolved.
- No candidate is currently feasible.
- Material uncertainty means the ranking would create false confidence.
- Candidate feasibility depends on an unverified assumption that could reverse the choice.

The UI must state the reason, identify the missing evidence/gate, preserve candidate assessments, and show what would permit reassessment. Weighted priority must never override a hard gate.

## Emergency path
Where waiting creates a greater immediate risk, a separately governed emergency path may permit a narrow, reversible containment proposal. It is not a general recommendation override.

Every emergency record must include:
- Immediate threat and evidence available at the time.
- Proposed minimum-scope action and accountable owner.
- Reversibility rationale and rollback/stop condition.
- Explicit expiry or review deadline.
- Required authorizer and authority basis.
- Safety/legal/technical controls that remain non-waivable.
- Review after execution, actual outcome, and whether the action was stopped, reversed, or extended by an authorized new decision.

The emergency path must not auto-execute. Expiry must trigger review/stop/escalation; it cannot be silently extended. An emergency action must not be called successful merely because it was initiated.

## Prototype behavior and limitation
The MVP exposes a recommendation hold for stale/conflicting evidence, unresolved hard gates, or no feasible candidate. It also captures a session-only proposal requiring action, owner, future expiry, and explicit reversibility confirmation. This is a UI-only proposal; no authorization, persistence, alerting, expiry enforcement, or execution is implemented.

## Acceptance checks
- A user can withhold a recommendation with a reason.
- The current-session UI clearly marks the recommendation as withheld and removes the visual selected-candidate treatment.
- The hold remains visible on the decision page during the same session.
- Emergency proposal cannot be recorded without owner, action, future expiry, and reversibility confirmation.
- The UI clearly says proposal only, not approved/executed.
- Production tests verify role authorization, immutable event history, expiry enforcement, review and rollback, and non-waivable hard gates.
