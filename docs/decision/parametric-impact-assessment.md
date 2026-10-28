# Parametric Solution Impact Assessment — Initial Model

## 1. Purpose and design rule

The initial version must not require ordinary experts or managers to calculate a precise financial value for every proposed solution. In many real cases, the necessary data is unavailable, calculation is complex, or the estimate is inherently uncertain.

Start with a **manager-owned, parameter-based assessment**. A responsible manager records a structured first view of each case-specific solution candidate using understandable scales. The system preserves the dimensions and their meanings; it must not present the result as an audited monetary calculation.

At higher decision levels, the assessment can be challenged, supported with evidence, refined, or replaced with quantified analysis. Preserve earlier values and who changed them.

## 2. Who provides the assessment

- **Issue submitter / subject-matter expert:** supplies facts, context, technical evidence, operational estimates, and uncertainty. They are not required to calculate enterprise financial impact.
- **Responsible manager:** owns the initial impact assessment for each solution candidate, using available evidence and managerial judgment.
- **Higher-level manager / decision forum:** reviews and may refine the assessment, request missing information, or commission a more detailed financial analysis.
- **System:** stores the assessment, explains scale meanings, supports comparison under a selected Decision Profile, and preserves history. It does not invent missing values or imply false precision.

The role permitted to edit or approve each stage must be controlled by the organization’s authority configuration. A higher-level revision must not erase the earlier assessment.

## 3. Initial 1–5 scales

A 1–5 score is an ordinal category with a written anchor, not a currency amount and not automatically a linear measurement. The following anchors are proposed for the MVP and should be validated with users before being treated as final.

| Parameter | Meaning of score 1 | Meaning of score 3 | Meaning of score 5 | Direction |
|---|---|---|---|---|
| Effect on delivery/customer commitment | Very limited positive contribution, or negligible effect | Material contribution to protecting/meeting the commitment | Critical contribution to protecting a major commitment | Higher is better |
| Financial resources required | Very low funding requirement | Material funding requirement | Very high funding requirement | Lower is generally better |
| Expected effect on margin/profit | Strongly adverse | Approximately neutral or mixed | Strongly positive | Higher is better |
| Expected effect on liquidity | Strongly worsens liquidity / cash timing | Approximately neutral or mixed | Strongly improves liquidity / cash timing | Higher is better |
| Use of scarce/shared resources | Very low demand or frees capacity | Material use | Very high demand on a constrained resource | Lower is generally better |
| Execution risk/uncertainty | Low | Material / moderate | Very high | Lower is generally better |

Scores 2 and 4 represent intermediate levels between the written anchors. Each organization should define examples and local language for these anchors. Do not force every parameter to have the same direction: the meaning of a high score must be visible next to the control.

For parameters where an ordinal scale is not suitable, or where no reasonable judgment can yet be made, allow **Unknown / Not assessed**. This is not score 0, not neutral, and must not silently be treated as an average score. Capture a short explanation when a key parameter is unknown.

## 4. Important interpretation rules

1. **Assess each solution candidate in the context of the specific case.** A reusable solution type must not have one permanent impact score reused across all cases.
2. **Separate impact from requirement.** “Financial resources required” is a burden/need, not the financial benefit or net impact of a solution.
3. **Separate dimensions.** Delivery protection, funding need, margin, liquidity, scarce-resource demand, and risk remain visible as distinct values.
4. **Do not sum raw 1–5 scores into a purported financial value.** A score of 4 is not twice a score of 2; ordinal scales do not establish that relationship.
5. **Do not let a profile hide the underlying values.** The Decision Profile can express current organizational priorities and may produce a comparative ranking, but users must be able to inspect each dimension and its direction.
6. **Keep feasibility separate from preference.** A high profile rank does not override legal, safety, technical, resource, timing, or authority constraints.
7. **Do not mistake an estimate for a result.** Record expected impact at decision time and actual observed outcomes after execution as separate records.

## 5. Progressive refinement

Use staged detail rather than requiring precision at intake:

- **Stage A — Initial managerial view:** 1–5 parameter ratings, key assumptions, a brief rationale, and confidence/uncertainty.
- **Stage B — Cross-functional review:** validate the important assumptions, identify affected operational objects and shared resources, and revise scores where needed.
- **Stage C — Quantified assessment when justified:** add amounts, cash-flow timing, baseline/comparison scenario, data sources, method, range, and currency for material impacts where evidence is available.
- **Stage D — Actual outcome:** record realized cost, margin/profit, cash-flow, delivery, resource, and other outcomes where observable; compare them with the earlier estimate.

Not every candidate must reach Stage C. The decision forum should determine the depth of analysis based on materiality, risk, uncertainty, and the authority required—not because every field must always be completed.

## 6. Record and audit requirements

For each candidate assessment, retain:
- case and solution-candidate identifiers;
- parameter values, scale-definition version, and profile version if used in evaluation;
- assessed-by role/user and timestamp;
- stage/status (initial, reviewed, quantified, superseded);
- short rationale and material assumptions;
- confidence or uncertainty, separately from impact magnitude;
- evidence/source links where available;
- revision history, including prior values and reasons for change.

Unknown values must remain explicit. The system should identify which missing values materially limit comparison, rather than quietly filling them.

## 7. Example (illustrative only)

A manager compares two ways to address a critical component shortage:

| Parameter | Expedite purchase | Use an alternate qualified component |
|---|---:|---:|
| Effect on delivery commitment (higher is better) | 5 | 4 |
| Financial resources required (lower is better) | 5 | 2 |
| Expected effect on margin/profit (higher is better) | 2 | 4 |
| Expected effect on liquidity (higher is better) | 1 | 4 |
| Use of scarce/shared resources (lower is better) | 3 | 2 |
| Execution risk (lower is better) | 2 | 3 |

These scores are fictional examples, not measured facts. They do **not** prove that the alternate component is always preferable. Expediting may protect a particularly important customer commitment; the alternate may require engineering approval or carry qualification risk. The active profile, hard constraints, evidence, and authority determine the decision. If technical qualification is not satisfied, a favorable score cannot make that candidate feasible.

The example intentionally does not convert scores into currency or a single universal total. A quantified financial analysis can be added later for the dimensions that justify it.

## 8. Open design decisions

- Final parameter list and organization-specific definitions/anchors.
- Whether “delivery effect” should be expressed as positive contribution, expected delay avoided, or both.
- How Decision Profiles compare ordinal ratings without implying false mathematical precision.
- Which materiality/risk conditions trigger Stage C quantified analysis.
- Who may enter, validate, approve, and revise each assessment stage.
- How to handle conflicting managerial assessments and low-confidence ratings.
- How quantified amounts, ranges, currency, and cash timing will be sourced and reconciled when added.

Until these are explicitly decided, the 1–5 scales above are a proposed MVP baseline, not a finalized financial formula.
