# First-Principles Product Charter: Key-Resource Allocation

**Status:** Product-level design invariant  
**Applies to:** Product scope, Issue assessment, Solution comparison, Home dashboard, decision records, outcome review, and learning  
**Language:** English; see the Persian companion document.

## 1. The problem, reduced to fundamentals

An organization has finite cash, time, capacity, and managerial attention. These resources cannot be used twice in the same time window. Every allocation therefore has an opportunity cost. Under cash-flow pressure, a nominally profitable or urgent activity may still be infeasible if cash is unavailable before obligations fall due.

The product exists to help authorized managers allocate **key organizational resources** to the issues and opportunities that matter most, using traceable evidence and explicit trade-offs. It is not a general inventory of every organizational resource and not an autonomous executive.

## 2. Product purpose

Help managers:
1. Identify which issues threaten or enable the organization's most important commitments and outcomes.
2. Understand the financial and operational consequences of each plausible response.
3. Compare feasible alternatives using explicit assumptions, time horizons, constraints, confidence, and resource opportunity cost.
4. Record who decided, why, under what authority, and what evidence would confirm the result.
5. Learn whether resources were used efficiently and whether the intended outcome was achieved.

The central operating question is: **Given scarce key resources—especially cash and the timing of cash flows—which issue deserves attention and allocation now, what does the chosen response cost, and what value or risk does it change?**

## 3. Scope boundary: key resources, not all resources

A resource belongs in the decision model when it is scarce, strategically critical, a binding constraint, materially exposed to a decision, or shared by competing issues in the same time window.

Examples include:
- **Financial:** available cash, cash-flow timing, due obligations, incremental cash required, avoidable cash outflow, working-capital exposure, margin at risk, and funding gap.
- **Operational bottlenecks:** constrained machine/capacity windows, critical components, scarce qualified suppliers, specialist skills, and time-critical engineering/quality approvals.
- **Commitment-bearing capacity:** resources whose allocation changes the probability or timing of delivery, contractual milestones, customer obligations, or business continuity.

Do not build an exhaustive resource registry merely for completeness. Ordinary resources remain in their systems of record unless their scarcity or impact makes them relevant to a decision.

## 4. Separate effectiveness from efficiency

These are independent decision dimensions and must remain visible separately.

- **Effectiveness:** Does the option protect or achieve the intended business outcome—such as a critical commitment, product/project objective, customer outcome, safety requirement, or continuity?
- **Efficiency:** What resources, cash, time, and opportunity cost are consumed to achieve that outcome? Is the expected value proportionate to those costs?

A low-cost option can be ineffective. An effective option can be financially inefficient or infeasible under cash timing. Do not collapse both dimensions into one opaque score. Apply hard safety, legal, technical, authority, and liquidity constraints first; then compare the remaining feasible options under a versioned decision profile.

## 5. Financial assessment as a standard dimension of every issue

Every issue receives a financial-impact screening as a standard part of assessment—not as an optional field or decorative dashboard widget. The screening may conclude that an effect is not applicable, unknown, or potentially material; it must record the basis. The depth of quantification should be proportional to materiality, uncertainty, and decision stakes.

Where relevant, capture or derive:
- incremental cash required and expected payment dates;
- expected cash inflow/outflow timing and the period of exposure;
- due obligations and the consequences of a funding gap;
- cost to intervene versus cost/exposure if no action is taken;
- margin or value at risk, with the calculation basis;
- expected avoided cost or cash release, without double-counting;
- financial impact horizon and dependencies;
- source, timestamp, owner, confidence, currency/unit, and scenario/version.

Distinguish **actual, forecast, estimate, assumption, and unknown**. Unknown values stay unknown; they are not silently treated as zero. Estimated benefit is not realized benefit. A missing supplier confirmation alone does not prove a delivery miss, causal link, or financial loss. Do not double-count the same exposure through multiple linked issues.

## 6. Cash-flow-first does not mean cash-only

Cash availability and timing are hard realities, but cash must not become an unconditional universal priority. A decision profile may emphasize liquidity protection in a crisis while retaining hard obligations, safety, legal requirements, technical feasibility, strategic commitments, and downstream consequences.

A cash benefit that arrives after an obligation is due may not solve the immediate liquidity gap. A high-margin project may consume cash before it generates cash. The model must therefore reason over time-phased cash flows and constraints—not just revenue, margin, or a single financial score.

When no alternative is demonstrably feasible, the service must say so and allow an authorized manager to abstain, request evidence, or use a controlled, time-limited emergency path with an owner, expiry, and review. It must not fabricate a recommendation to fill the screen.

## 7. Home page: the executive's first view

The fixed Home page must make **efficiency and effectiveness equally legible**, with two primary visual anchors:

1. **Project Value & Risk Map** — shows the relationship between expected/observed value and risk/exposure, with financial dimensions and evidence status accessible on drill-down. It should help identify where intervention may protect the most value for the resources required.
2. **Product / Work-Portfolio Status** — shows whether product families and their projects are achieving intended outcomes and commitments, including delivery, margin, liquidity, customer, and critical milestone signals where evidence exists.

The Home page also needs issue-status cards that open the correctly filtered Issue list/detail, plus decisions awaiting action, projects needing attention, intervention windows, and material updates.

These views answer different questions:
- Portfolio status: **Are we achieving the outcomes and commitments that matter?** (effectiveness)
- Value & risk map: **Where is value exposed, and what resource-efficient intervention is available?** (efficiency and risk-adjusted allocation)

Financial indicators should be visible, not buried in a report, but each must disclose whether it is verified, estimated, assumed, or unknown. Demo values must be explicitly marked synthetic. Do not invent monetary amounts or imply live ERP data.

## 8. Decision logic and record

For every Issue, with deeper quantification when materiality or decision stakes warrant it:
1. Preserve the original report and establish what is observed versus unknown.
2. Link relevant products, projects, commitments, and key resources only when the relationship is supported.
3. Estimate time-phased operational and financial impact, including a no-action baseline where defensible.
4. Generate or register case-specific alternatives.
5. Apply hard feasibility gates, including cash timing and binding resource constraints.
6. Compare feasible alternatives on a shared, versioned profile across effectiveness, efficiency, financial exposure, confidence, reversibility, and time-to-impact.
7. Record selected option, rejected alternatives and reasons, authority, assumptions, expected outcome, resource allocation, owner, deadline, and review trigger.
8. Compare observed results against the frozen decision-time baseline; mark attribution as verified, partial, uncertain, or not established.

Keep these concepts distinct: issue urgency, qualification, feasibility, priority, decision, action completion, resolution, and proven value.

## 9. Evidence and integrity invariants

- No source, no claimed fact; no evidence, no asserted certainty.
- Estimate is not actual; association is not causation.
- Decision is not action; action completion is not resolution.
- Selected option is not proof of success.
- Financial impact is not duplicated across related issues.
- A resource allocation is time-bound and competes with other uses.
- Feasibility is distinct from priority; authority is distinct from priority.
- Human decision authority and rationale remain explicit.
- A rejected alternative records why it was rejected and what evidence or condition would reopen it.
- The service may abstain from recommending when evidence or feasibility is insufficient.

## 10. MVP acceptance tests

The MVP should demonstrate, with clearly labeled synthetic data:
- A material issue whose cash timing changes the ranking or feasibility of alternatives.
- Separate display of effectiveness and efficiency, without collapsing them into a single score.
- At least one case where a high-outcome option is infeasible due to a hard constraint.
- An explicit no-action baseline and a defensible comparison of intervention cost versus exposure.
- Provenance and confidence for material financial figures; unknown values remain unknown.
- Home drill-down from the Value & Risk Map and Portfolio Status into the relevant project, commitment, issue, decision, and evidence.
- Decision-time targets frozen and later compared with observed outcomes.
- No claim of realized savings or causal attribution without evidence.

## 11. Non-goals

Do not turn the MVP into an exhaustive enterprise resource-management system, a replacement ERP, an automatic production scheduler, a generic KPI wall, or a black-box ranking engine. The product is a decision-support service for allocating scarce key resources to important issues with financial clarity, explicit constraints, accountable decisions, and outcome evidence.
