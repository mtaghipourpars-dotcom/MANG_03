# MANG_03 Screen Reference Contract

## Reference hierarchy
1. User-provided PARS executive Home screenshot in the conversation: visual authority for Home composition and card treatment.
2. `https://github.com/mtaghipourpars-dotcom/newmodel1/blob/main/demo/main.png`: supplementary reference for visual implementation details and image-led product/decision cards. It belongs to a different PVPT product and contains synthetic/sample content; it is not a source of MANG_03 business facts.
3. `docs/demo/mvp-prototype.html`: current implementation evidence only. It does not override agreed design or business contracts.

If the actual attached screenshot cannot be accessed in Google AI Studio, ask the user to attach it; do not claim visual match from a URL or textual description alone.

## Home structure — required order
1. Executive status cards.
2. Issue workbench / queue.
3. Two-column primary zone:
   - Project Value & Risk Map.
   - Product / Work-Portfolio Status.
4. Two-column decision zone:
   - Management decisions requiring attention (use project/asset thumbnails, not generic icons where a source image is available).
   - Priority project portfolio.
5. Latest material developments / timeline and decision-integrity context.

The visual hierarchy and order must be stable. Do not place an unrelated welcome panel above the dashboard. Do not leave Home blank or replace it with a generic landing page.

## Executive status cards
Show only decision-relevant counts/indicators, each linked to its filtered destination:
- Key-resource/value exposure.
- Customer commitments at risk.
- Cash/liquidity timing at risk (qualitative in MVP unless sourced values exist).
- Management decisions awaiting attention.
- Near intervention deadlines.

Every card must show its status and data classification. For demo data, display a clear DEMO / SYNTHETIC marker. Do not represent sample amounts as live organizational values.

## Primary views
### Project Value & Risk Map
- Bubble/scatter map with explicitly named axes, units, legend and intervention zones.
- Distinguish exposure/risk from expected/observed value and intervention timing.
- Provide source/evidence status and a clickable path to the Value Map page and relevant project/Issue details.
- Never plot an unknown monetary value as zero; omit it or show unknown distinctly.
- Use separate labels for actual, forecast, assumption and synthetic values.

### Product / Work-Portfolio Status
- Image-backed cards for product/work families when suitable assets exist; do not use generic icons instead of available product images.
- Each card shows family/product label, status, linked project/commitment count where supported, and data provenance.
- Click opens Projects page with the family/filter context.
- MANG_03 family names and actual project taxonomy must come from its own canonical model/data; do not import PVPT's six product-family enum into MANG_03.

### Management decisions requiring attention
- Use a thumbnail of the related asset/project when an approved image exists.
- Show Issue/case reference, project if grounded, decision required, urgency/deadline and next owner/action. Missing values remain explicitly unknown.
- Click opens the relevant Decision Brief/details, preserving the selected case context.

### Priority project portfolio
- Table/list with project/case ID, commitment or outcome, status, intervention horizon, exposure and provenance.
- Click opens Projects or Value Map with the same filter context.

### Latest material developments
- Timeline of dated events with source/actor, event type and linked case/decision/action. If dates are unknown, label them; never invent timestamps.

## Other pages
- Sidebar route order and canonical IDs: `home`, `projects`, `value-map`, `issue`, `solution`, `decision-actions`, `learning-outcomes`, `settings`.
- Visible labels in English: Home, Projects, Value Map, Issue, Solution, Decision & Actions, Learning Outcomes, Settings. Persian labels: خانه، پروژه‌ها، نقشه ارزش، مسئله، راهکار، تصمیم و اقدامات، نتایج یادگیری، تنظیمات.
- Issue page: Issue List and dashboards; New Issue Intake button at bottom opens complete form.
- Solution page: Solution List, feasibility and assessment dashboards, candidate comparison.
- All navigation must work by mouse and keyboard; selected filters/context survive drill-down and provide a visible reset.

## Responsive and visual audit
Capture reference-size and 1280×800, 1024×768, 768×1024, 390×844 screenshots. Record dimensions and differences. Test horizontal overflow, text clipping, RTL layout, keyboard focus, empty/error/loading states and chart labels. No pixel-match claim without a real screenshot comparison.
