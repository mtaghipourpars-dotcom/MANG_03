# Decision, Action, Outcome, and Organizational Learning

## 1. Decision support, not autonomous authority
The initial product recommends and structures choices for authorized people. It does not autonomously make CEO-level decisions or modify operational schedules. Future automation may be considered separately and must retain explicit authority, safeguards, and auditability.

## 2. Configurable decision profiles
A profile represents the priorities relevant to a decision at a particular time. Parameters may include:
- sales/customer commitments and delivery dates
- liquidity preservation and cash-flow timing
- profitability and margin
- quality, safety, and compliance
- constrained resources, capacity, and other organizational goals

Profiles are configurable and versioned. Each decision records the profile version, parameter values, criteria/weights, hard constraints, and any justified override. A profile is not assumed to be a permanent strategic setting.

The profile should influence evaluation and ranking, not silently remove otherwise applicable solution candidates. Hard constraints (for example, legal, safety, technical qualification, or authority restrictions) are represented separately from weighted preferences and must show explicit reasons when they rule out an option.

## 3. Feasibility versus profile-based priority
Evaluate feasibility separately from preference. A candidate may rank highly under the active profile but be infeasible due to material, capacity, timing, technical qualification, authorization, or other constraints. Display feasibility and its reasons/uncertainty independently from profile-based ranking.

## 4. Financial impact of each solution candidate
Each solution candidate receives its own financial-impact assessment, even before it is selected. The assessment is case-specific and should use available operational and financial evidence rather than a fixed financial score attached to the solution type.

Where supported by data, record separate components:
- direct implementation / procurement / expediting cost
- expected revenue and margin/profit impact
- cash inflow/outflow amounts and timing
- cost or loss expected to be avoided
- opportunity cost of consuming or freeing shared resources
- delay, contractual, or customer-commitment cost where evidenced
- other material financial effects with a stated basis

Keep **net financial impact**, **profitability/margin**, and **cash-flow/liquidity timing** as distinct measures. A solution can improve margin while worsening near-term cash flow, or protect a delivery commitment at a direct cost. Do not add the same impact twice across linked cases or dimensions.

Each assessment should record currency, calculation period/horizon, baseline/comparison scenario, formula or method, input values, data source, assumptions, low/base/high estimate or uncertainty range where appropriate, confidence, calculation timestamp, and model/version. Clearly label missing data and estimates; do not present unsupported precision as fact. Expected impact is not the same as observed outcome.

## 5. Candidate evaluation and visibility
A candidate may include:
- expected benefits/adverse impacts by dimension and affected object
- solution-level financial-impact assessment
- resource requirements and timing
- operational dependencies and affected objects
- feasibility, constraints, and confidence
- evidence/provenance and assumptions
- rank under the applied decision profile

The system must not equate rank with authority to decide. Profile changes may change rankings, but must not automatically delete candidate records.

## 6. Decisions across organizational levels
A lower-level manager's selection is a recorded decision, not a global lock on the Issue–Solution network. Higher-level authorized managers must still be able to view and assess other applicable candidates and may select a different option within their authority and hard constraints.

When a later decision changes the earlier direction:
- preserve the earlier decision, rationale, authority, profile version, and timestamp;
- create a new or explicitly superseding decision linked to the prior decision;
- record which options were reconsidered and why;
- assess actions already started and explicitly continue, amend, or cancel them through authorized steps;
- retain the history and show the current effective decision without erasing prior records.

Do not hide or disable alternatives merely because a lower-level option was selected. An option may be marked infeasible or restricted only for a recorded, current reason such as technical qualification, legal/safety constraints, resource unavailability, or delegated authority. Show the reason and distinguish a hard constraint from a preference.

## 7. Decision record
Capture:
- case and decision identifier, and any superseded/prior decision
- authorized decision-maker and authority basis
- timestamp and current profile/version and parameter values
- alternatives considered, selected option(s), rejected options
- rationale, assumptions, exceptions, and risk acceptance
- financial and non-financial expected outcomes and measures
- generated actions and assigned owners
- later actual results and retrospective assessment

## 8. Actions and ownership
One decision can create multiple actions. Assign action ownership based on the decision and current responsibility, not automatically to the issue submitter or originating department. Support reassignment, due dates, dependencies, progress, evidence, and escalation. Record assignment history.

If a new decision conflicts with work already underway, do not silently overwrite the old action. Record authorized continuation, change, cancellation, or replacement and any associated cost/impact.

## 9. Outcome and resolution
Record observed outcomes independently from expectations:
- actual execution and completion evidence
- actual delivery/financial/resource/quality effects where available
- whether the original issue is resolved, partially resolved, remains open, or needs follow-up
- residual risks and unintended consequences

Do not require every issue and all related work to follow one universal closure pattern.

## 10. Learning from evidence
Never infer success from the fact that a solution was selected. Learning should compare expected and actual outcomes and account for context, execution quality, uncertainty, and comparability. If a solution repeatedly performs poorly under comparable conditions, its future recommendation rank may be reduced; if it performs well, confidence may increase. Keep a traceable record of the evidence and learning rule used.

In an initial version, start with simple, explainable baseline weights (equal weights where appropriate). Recommendations can become more informed as decision, action, outcome, and lesson records accumulate. A useful future explanation might state that a similar solution was selected in several comparable cases, with the actual outcomes shown—not merely claim that it is preferred.

## 11. Core distinctions
- Feasibility ≠ Priority
- Decision ≠ Action ≠ Resolution
- Selected solution ≠ successful outcome
- Relationship ≠ proven causality
- Estimated impact ≠ observed impact
- A lower-level decision ≠ suppression of higher-level alternatives


## 12. Manager-owned parametric assessment as the initial financial-impact model
The initial MVP must not require experts or managers to calculate precise financial values for every candidate. Start with manager-owned, contextual 1–5 ratings for understandable impact dimensions, with written scale anchors, a short rationale, assumptions, and explicit confidence/unknown states. Subject-matter experts provide facts and evidence; managers own the initial enterprise-level assessment; higher-level forums may challenge and refine it. Preserve all revisions and their authors.

The initial candidate dimensions and their directions are proposed in [Parametric Solution Impact Assessment](parametric-impact-assessment.md): delivery/commitment contribution (higher is better), financial resources required (lower is generally better), margin/profit effect (higher is better), liquidity effect (higher is better), scarce/shared-resource demand (lower is generally better), and execution risk (lower is generally better). The final parameter list and scale anchors remain open for validation.

A 1–5 rating is ordinal, not money. Do not add raw ratings into a purported financial value or treat a rating of 4 as twice a rating of 2. Keep dimensions visible and separate. Unknown/not assessed is not zero or neutral. Refine in stages: initial managerial view, cross-functional review, quantified analysis when material and supported by evidence, then actual outcomes after execution. Not every candidate needs a full financial model.
