# Change Log

## 2026-10-28 — Conceptual network model completed
- Added `docs/architecture/conceptual-network-map.md` with Mermaid diagrams for the reusable knowledge network, live case graph, authority structure, and a realistic many-to-many case topology.
- Defined entity catalogue and conceptual cardinalities across intake, qualification, cases, reusable issue/solution types, operational objects, resources, decisions, actions, outcomes, learning, and authority.
- Separated reusable knowledge relationships from case-specific links and evidence.
- Specified relationship semantics, provenance, confidence, validity/versioning, and integrity rules.
- Clarified that explicit typed relationship records in a relational database are sufficient for the conceptual MVP; a graph database is not required.
- Updated README, architecture overview, and master-data model to align with the network map.
- Diagrams are illustrative conceptual topology, not verified company-specific causal links or live-data claims.

## 2026-10-28 — Architecture baseline recorded
- Established MANG_03 as an enterprise Issue–Solution decision-support service, not a production planning optimizer.
- Documented three interaction layers and both manager modes: decide within delegated authority or review/escalate.
- Added a distinct Issue Qualification Gate before formal acceptance and first-stage solution suggestions.
- Distinguished Issue Intake from accepted Issue Case and preserved all qualification dispositions.
- Documented dynamic many-to-many relationships, backward issue escalation, and forward decision/action routing.
- Added operational-object linkage, decision profiles, feasibility versus priority, decision/action/resolution separation, and outcome-based learning.
- Recorded open decisions rather than treating unconfirmed details as settled.
