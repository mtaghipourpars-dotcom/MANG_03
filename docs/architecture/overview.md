# Architecture Overview

**Status:** Conceptual baseline, version 0.3  
**Scope:** Enterprise issue-to-decision-to-outcome service for manufacturing/engineering organizations.

## 1. Product boundary

The service supports management decisions across the value chain. It captures, qualifies, connects, assesses, routes, and tracks issues and candidate solutions. It does not replace ERP, production execution, project management, or detailed production planning, and it does not autonomously reschedule production.

## 2. Architecture views

Maintain three connected but distinct views:

- **Organizational interaction and authority:** who may submit, review, decide, approve, escalate, own actions, and close or continue follow-up.
- **Reusable knowledge network:** issue/solution types, possible causes/effects, resource types, applicability conditions, and evidence.
- **Live case graph:** actual intakes/cases, operational-object links, case-specific candidates, decisions, actions, outcomes, and learning.

The authority view controls who may perform an operation; it is not the Issue–Solution network itself. Reusable knowledge informs a case but is not proof of a case-specific relationship. Do not collapse these views into one fixed workflow.

Detailed entity definitions, cardinalities, network diagrams, integrity rules, and MVP scope are in the [Conceptual Master Data and Issue–Solution Network Map](conceptual-network-map.md).

## 3. Main conceptual layers

1. **Authorized submitters:** create an initial issue submission with description, evidence, urgency/context, and links to known operational objects.
2. **Issue Qualification Gate:** assesses whether the submission is sufficiently described and relevant to enter the formal network. This is distinct from generic case status.
3. **Shared Issue–Solution Network:** links an accepted issue to standard issue types, possible causes/effects, applicable solutions, impacted resources, and operational objects.
4. **Manager review interface:** managers validate facts and impacts, examine alternatives, and may decide within delegated authority or escalate.
5. **Senior-management decision interface:** CEO/senior leaders address cross-functional or higher-authority trade-offs using current goals and decision profiles. The CEO is not only a cash allocator.
6. **Decision and action orchestration:** records the selected decision and assigns one or more actions to appropriate owners. Action ownership may change dynamically.
7. **Execution, outcome, and learning:** tracks action status, observed outcomes, and lessons learned; uses evidence to improve future recommendations.

## 4. Two flows over the same network

- **Backward issue flow:** issues originate anywhere in the organization, are reviewed at appropriate levels, and are escalated when impact or authority requires it.
- **Forward decision/action flow:** decisions and actions flow to the function/person best positioned or authorized to act. This may differ from the issue originator's function.

These are conceptual directions through a connected network, not a mandatory linear path. A case may be resolved by a manager within delegated authority or escalated when required by context, impact, risk, or authority rules.

## 5. Network semantics

Relationships may be many-to-many, conditional, weighted where meaningful, and versioned. Examples include issue-to-solution applicability, issue-to-possible-impact, issue-to-operational-object, solution-to-required-resource, decision-to-action, and case-to-related-case. Each edge should have explicit semantics, source/provenance, and an evidence/confidence state where relevant.

Distinguish:
- generic reusable relationship vs case-specific relationship;
- association vs causal claim;
- proposed/inferred link vs validated fact;
- expected impact vs observed outcome.

Impact propagation must be contextual and reviewed/confirmed where appropriate. A component shortage does not automatically prove delivery delay or financial loss.

## 6. Decision logic

Keep these concepts separate:

- **Feasibility:** can the option be executed under current technical, timing, resource, authorization, and other constraints?
- **Priority:** how desirable is a feasible option under the current decision profile and organizational goals?
- **Decision:** what has an authorized decision-maker selected?
- **Action:** what execution work is assigned, to whom, and by when?
- **Outcome/resolution:** what actually happened, and is the issue resolved or does follow-up remain?

Financial dimensions are important but not exclusive. Cash or margin signals must be interpreted in operational and strategic context. Responses may include ownership changes, resource prioritization, supplier/customer negotiation, qualifying alternate material, timing changes through the appropriate planning/commitment process, or direct liquidity management.

## 7. Profiles and learning

A decision profile expresses current priorities such as delivery commitments, profitability/margin, liquidity/cash flow, customer commitments, quality/safety/compliance, or other configured goals. The applied profile and version must be recorded with each decision. Profiles can change over time.

Initially use simple, explainable weights; equal weights may be a starting point where appropriate. Future recommendation changes must be evidence-based. A selected solution alone does not prove success. Capture comparable context, alternatives, decision rationale, execution, actual outcomes, and lessons learned.

## 8. Initial integration anchors

Link to existing operational objects where available: project/WBS, production order, purchase order, sales order, component/material, contractual milestone, customer/supplier commitment, and relevant resource. Reuse SAP/ERP and other operational structures rather than recreating them. Store source-system identity and external key for each mapped object.

## 9. Design constraints

- Keep initial implementation executable by a small team; avoid premature governance complexity.
- Start with reusable generic issue and solution master data for manufacturing/engineering organizations.
- Keep company-specific setup focused on mapping the generic network to local processes, authority, resources, and operational objects.
- Maintain a traceable history and explicit source/confidence for data and inferred relationships.
- Do not treat every case as identical in closure rules; some issues may be resolved while related actions or follow-up continue.
- The conceptual network does not require a graph database; a relational model with explicit typed relationship records is a valid MVP implementation.

## 10. Design sequence

1. Conceptual master data and relationship model — baseline documented.
2. Qualification and workflow/state model.
3. Issue–Solution network and conditional relationship semantics — visual map and cardinalities documented.
4. Decision profiles, authority, action, outcome, and learning model.
5. Validate the model with realistic end-to-end scenarios.
6. Only then finalize physical database/API/UI implementation.


## 11. Key-resource allocation and executive Home

The service focuses on **key resources**, not an exhaustive inventory of every resource. A resource becomes decision-relevant when it is scarce, a binding constraint, strategically critical, materially exposed to an issue, or contested by multiple issues in the same time window. Cash and cash-flow timing are first-class dimensions because an option that is nominally profitable may still be infeasible before obligations fall due.

Financial evaluation is a manager-review responsibility, not an employee intake requirement. The MVP uses versioned qualitative parameters whose values are assigned by relevant managers after issue review/qualification. Provide defined scales and an explicit Unknown / Not assessed state; record assessor, time, profile/parameter version, and rationale/evidence. Do not require monetary estimates from the submitter, and do not show a quantitative financial-impact screening panel on the Issue intake/detail page. Quantitative monetary valuation and cash-flow modelling are later-phase capabilities, dependent on data quality, process ownership, and organizational maturity. Qualitative financial parameters must inform prioritization alongside effectiveness, risk, urgency, and feasibility without becoming an opaque universal score.

The Home page has two separate primary views:
- **Project Value & Risk Map:** efficiency and risk-adjusted key-resource allocation—where intervention can protect value at proportionate resource cost.
- **Product / Work-Portfolio Status:** effectiveness—whether product families/projects achieve their intended outcomes and commitments.

Neither view replaces the other, and neither should collapse efficiency and effectiveness into one opaque score. Financial signals must identify their evidence state. Current prototype placements and portfolio rows are synthetic fixtures; no live ERP or verified project-level financial values are connected. See the [First-Principles Product Charter](../product/first-principles-key-resource-allocation.md) and its [Persian companion](../product/first-principles-key-resource-allocation.fa.md).
