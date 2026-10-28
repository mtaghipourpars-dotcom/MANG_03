# Bilingual Product Contract — English / فارسی

## Language behavior
- The prototype supports English (LTR) and Persian / فارسی (RTL) from a visible language toggle.
- English remains the default initial locale. Persian changes the document language to `fa`, direction to `rtl`, and applies right-to-left layout rules.
- User-facing labels, page headings, descriptions, buttons, form hints, statuses, decision safeguards, validation messages, and demo values must be localized.
- Identifiers and machine-facing keys remain stable across languages: CASE-024, INT-118, CAND-024-A, enum codes, API fields, file paths, and audit IDs must never be translated.
- Search must accept the canonical identifier and localized display text. If a translated title is used in a search index, preserve the canonical English value as an alternate term.
- Dates, numeric values, units, ratings and scores retain their semantic value. Localized numeral formatting may be added only when it does not alter machine values.
- Localization must not change decision logic, hard gates, scoring, feasibility, authority, audit history, or the meaning of evidence.

## Data contract
Store stable machine fields separately from localized display fields. Recommended structure:
- `id`: immutable canonical identifier
- `label.en`, `label.fa`: localized display name
- `description.en`, `description.fa`: localized description
- `status_code`: stable machine enum
- `status_label.en`, `status_label.fa`: localized status label
- `source_text`: original submitted narrative, never silently translated or overwritten
- `translated_text.fa`: optional translation with locale, timestamp, method and reviewer/provenance metadata where accuracy matters

## Translation safeguards
- Do not translate identifiers, code, formulas, evidence references, supplier/customer names, or source quotations automatically as if they were verified facts.
- Preserve the distinction between fact, interpretation, assumption, unknown, estimate and observed outcome.
- Keep the original intake narrative immutable; a translation is an additional representation, not a replacement.
- Domain terminology must be consistent with `ui-glossary-fa-en.csv`.
- Do not silently fall back to English for decision-critical warnings or validation messages. Missing Persian strings should be reported by a localization coverage test.
- Prototype localization is client-side and session-only; it is not a production translation service or durable language preference.

## Coverage and acceptance
1. Every visible UI string has English and Persian equivalents.
2. Both locales support navigation, intake, qualification, solution assessment, decision, actions, outcome review, settings and guardrail flows.
3. Persian uses RTL without horizontal overflow at desktop and 390px mobile widths.
4. Changing language preserves the current case, form contents and session-only records.
5. Tests verify language metadata, direction, key headings, form labels, error/guardrail states and dynamic content.
6. All human-authored specifications, decision records, test documentation and seed data used by the product have an accessible Persian counterpart or explicit bilingual columns.
