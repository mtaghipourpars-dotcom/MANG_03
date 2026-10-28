# پیاده‌سازی MANG_03 با Google AI Studio

**هدف:** تبدیل قراردادهای محصول به Web App واقعی و قابل نگهداری، نه صرفاً تولید یک تصویر یا prototype. این مستندات دستور اجرایی مرحله‌به‌مرحله برای عامل کدنویس هستند؛ وجود آن‌ها اثبات نمی‌کند برنامه یا اتصال‌ها اجرا شده‌اند.

## شروع
1. مخزن `mtaghipourpars-dotcom/MANG_03` را در Google AI Studio Build mode وارد کنید.
2. اگر عامل تصویر مرجع Home را از فایل‌های مکالمه نمی‌بیند، تصویر را مستقیماً به prompt پیوست کنید. مرجع تکمیلی `newmodel1/demo/main.png` است؛ این مخزن محصول دیگری است و فقط الگوی بصری/فرایند را ارائه می‌کند.
3. در ابتدا فایل‌های `AGENTS.md`, `MASTER_PROTOCOL.md`, `IMPLEMENTATION_SEQUENCE.md`, `SCREEN_REFERENCE_CONTRACT.md`, `APP_ARCHITECTURE_AND_DATA.md`, `ACCEPTANCE_GATES.md`, `IMPLEMENTATION_LEDGER.md`, `PROMPT_PACK.md` و قراردادهای دامنه مرتبط را به عامل بدهید.
4. فقط Prompt 0 در `PROMPT_PACK.md` را اجرا کنید. این مرحله صرفاً کشف است و نباید کد را تغییر دهد.
5. هر بار فقط یک prompt/gate اجرا شود. تا زمانی که شواهد آزمون و ledger گیت جاری تأیید نشده، به مرحله بعد نروید.
6. پس از هر تغییر، diff را بازبینی و نتایج واقعی آزمون‌ها را ثبت کنید. اگر ابزار اجرا یا مرورگر در دسترس نیست، آزمون را NOT RUN ثبت کنید.

## حقیقت وضعیت فعلی
مستندات و prototype فعلی به‌تنهایی اثبات‌کننده backend پایدار، دیتابیس، احراز هویت/مجوزدهی تولیدی یا اتصال ERP نیستند. این قابلیت‌ها باید ساخته و با شواهد واقعی آزموده شوند.

## ترتیب اجرا
`DISCOVER → VISUAL BASELINE → CONTRACT RECONCILIATION → ARCHITECTURE/DATA → SHELL → API/DB → HOME → PROJECTS/VALUE MAP → ISSUE → SOLUTION → DECISIONS/ACTIONS → LEARNING → SETTINGS → SECURITY/REGRESSION → DATA READINESS → RELEASE`

مرجع دقیق: `IMPLEMENTATION_SEQUENCE.md` و `PROMPT_PACK.md`.
