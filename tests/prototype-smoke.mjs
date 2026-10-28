import assert from "node:assert/strict";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const errors = [];
try {
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });
  const htmlPath = resolve("docs/demo/mvp-prototype.html");
  await page.goto(pathToFileURL(htmlPath).href);
  await page.getByText("Open Issue Cases", { exact: true }).waitFor();
  await page.getByRole("heading", { name: "Project Value & Risk Map" }).waitFor();
  await page.getByRole("heading", { name: "Product / Work-Portfolio Status" }).waitFor();
  await page.getByRole("heading", { name: "Issue List & Work Queue" }).waitFor();
  assert.ok(await page.locator(".home-issue-workbench").count() === 1, "Home should show the Issue workbench after the status cards");
  const homeSectionOrder = await page.locator("#content h2").evaluateAll(nodes => nodes.map(n => n.textContent.trim()));
  assert.ok(homeSectionOrder.indexOf("Issue List & Work Queue") < homeSectionOrder.indexOf("Project Value & Risk Map"),
    "Home should place the Issue workbench before the value-risk map");
  assert.ok(homeSectionOrder.indexOf("Project Value & Risk Map") < homeSectionOrder.indexOf("Management decisions requiring attention"),
    "Home should place value/portfolio views before management decisions");
  assert.ok(homeSectionOrder.indexOf("Management decisions requiring attention") < homeSectionOrder.indexOf("Latest material developments"),
    "Home should place latest developments after decisions and project portfolio");
  assert.deepEqual(await page.locator("#nav [data-page]").evaluateAll(nodes => nodes.map(n => n.dataset.page)),
    ["home", "projects", "valueMap", "issue", "solution", "decision", "outcome", "settings"],
    "sidebar should contain the eight agreed destinations in the agreed order");
  await page.locator('#nav [data-page="projects"]').click();
  await page.getByRole("heading", { name: "Product / Work-Portfolio Status" }).waitFor();
  assert.equal(await page.locator(".projects-photo-grid .product-photo").count(), 6,
    "Projects page should show six product-family photo tiles");
  await page.locator('#nav [data-page="valueMap"]').click();
  await page.getByRole("heading", { name: "Project Value & Risk Map" }).waitFor();
  assert.equal(await page.locator(".value-map-large .map-point").count(), 5,
    "Value Map page should show five project markers");
  await page.locator('#nav [data-page="home"]').click();
  await page.locator('.portfolio-card [data-act="go-projects"]').click();
  await page.getByRole("heading", { name: "Priority project register" }).waitFor();
  await page.locator('#nav [data-page="home"]').click();
  await page.locator('.value-risk-card [data-act="go-value-map"]').click();
  await page.getByRole("heading", { name: "Project exposure register" }).waitFor();
  await page.locator('#nav [data-page="home"]').click();
  assert.equal(await page.locator(".product-photo-grid .product-photo").count(), 6,
    "Home portfolio should show six photo-led product family tiles instead of generic icons");
  assert.equal(await page.locator(".management-decision .decision-thumb").count(), 2,
    "management decisions should use photographic thumbnails");
  assert.equal(await page.locator(".value-risk-map .map-point").count(), 5,
    "value-risk map should show five interactive synthetic project markers");
  await page.getByText("Cash-flow timing", { exact: true }).waitFor();
  await page.getByRole("button", { name: /Switch interface to Persian|تغییر زبان رابط به فارسی/ }).click();
  assert.equal(await page.locator("html").getAttribute("lang"), "fa", "Persian locale should set document language");
  assert.equal(await page.locator("html").getAttribute("dir"), "rtl", "Persian locale should enable RTL layout");
  await page.getByText("پرونده‌های مسئله باز", { exact: true }).waitFor();
  await page.getByRole("heading", { name: "نقشه ارزش و ریسک پروژه‌ها" }).waitFor();
  await page.getByRole("heading", { name: "وضعیت سبد محصولات / حوزه‌های کاری" }).waitFor();
  await page.getByText("زمان‌بندی جریان نقد", { exact: true }).waitFor();
  await page.locator('[data-page="issue"]').first().click();
  assert.equal(await page.getByRole("heading", { name: "غربالگری اثر مالی" }).count(), 0,
    "the removed quantitative financial screening panel must not appear in Persian Issue detail");
  await page.locator('[data-page="home"]').first().click();
  await page.getByRole("button", { name: /Switch interface to English|تغییر زبان رابط به انگلیسی/ }).click();
  assert.equal(await page.locator("html").getAttribute("lang"), "en", "English locale should restore document language");
  assert.equal(await page.locator("html").getAttribute("dir"), "ltr", "English locale should restore LTR layout");
  await page.getByText("Open Issue Cases", { exact: true }).waitFor();

  for (const [key, heading] of [
    ["issue", /Issue List & Qualification/],
    ["solution", /Solution List & Assessment/],
    ["decision", /Decision & action tracking/],
    ["outcome", /Outcomes & organizational learning/],
    ["settings", /Settings & demo controls/],
    ["home", /Project Value & Risk Map/]
  ]) {
    await page.locator(`[data-page="${key}"]`).first().click();
    await page.getByRole("heading", { name: heading }).waitFor();
    if (key === "issue") {
      assert.equal(await page.getByRole("heading", { name: "Financial Impact Screening" }).count(), 0,
        "quantitative financial assessment must not appear on Issue intake/detail in the current MVP");
      assert.equal(await page.locator("#issue-list-table tbody tr").count(), 4, "Issue page should show four illustrative Issue records");
      await page.locator("#issue-search").fill("supplier");
      assert.equal(await page.locator("#issue-list-table tbody tr:visible").count(), 1, "Issue search should filter the list");
      await page.locator("#issue-search").fill("");
      assert.equal(await page.locator("#issue-list-table tbody tr:visible").count(), 4, "clearing Issue search should restore rows");
      assert.equal(await page.locator(".issue-intake-footer [data-act='new-intake']").count(), 1,
        "New Issue Intake should be at the bottom of the Issue page");
    }
  }

  await page.locator('[data-page="solution"]').first().click();
  await page.getByRole("heading", { name: "Solution List" }).waitFor();
  assert.equal(await page.locator("#solution-list-table tbody tr").count(), 3, "Solution page should show candidate list and statuses");
  await page.locator("#solution-search").fill("alternate");
  assert.equal(await page.locator("#solution-list-table tbody tr:visible").count(), 1, "Solution search should filter the list");
  await page.locator("#solution-search").fill("");
  await page.locator("#mang03-language-toggle").click();
  await page.getByRole("heading", { name: "فهرست راهکارها و ارزیابی" }).waitFor();
  assert.equal((await page.locator(".candtitle").first().innerText()).trim(), "تسریع سفارش فعلی تأمین‌کننده",
    "candidate labels generated after navigation should be translated into Persian");
  await page.locator("#mang03-language-toggle").click();
  await page.getByRole("heading", { name: /Solution List & Assessment/ }).waitFor();

  await page.locator('[data-page="issue"]').first().click();
  await page.getByRole("button", { name: /New Issue Intake/ }).click();
  await page.getByRole("button", { name: "Save intake" }).click();
  assert.equal(await page.locator("#title").evaluate(el => el.validity.valueMissing), true,
    "blank title should be rejected by native required-field validation");
  assert.equal(await page.locator("#description").evaluate(el => el.validity.valueMissing), true,
    "blank observed situation should be rejected by native required-field validation");
  await page.locator("#title").fill("Browser smoke test intake");
  await page.locator("#domain").selectOption({ label: "Finance" });
  await page.locator("#urgency").selectOption({ label: "Critical — immediate review" });
  await page.locator("#description").fill("Observed cash-flow pressure; cause and impact remain unverified.");
  await page.locator("#evidence").fill("SMOKE-EVIDENCE-001");
  await page.getByRole("button", { name: "Save intake" }).click();

  await page.getByText("Browser smoke test intake", { exact: false }).waitFor();
  await page.getByText("SMOKE-EVIDENCE-001", { exact: false }).waitFor();
  assert.equal(await page.evaluate(() => document.activeElement?.id), "intakeQueueHeading",
    "after submit, keyboard focus should move to the new intake queue");
  await page.getByText(/disappear when this page is refreshed or closed/i).waitFor();
  const intakeIdText = await page.locator("#content").innerText();
  const intakeId = intakeIdText.match(/INT-DEMO-\d+-\d+/)?.[0];
  assert.ok(intakeId, "temporary intake ID should be visible in the queue");

  await page.locator("#caseSearch").fill("Browser smoke test intake");
  await page.locator("#caseSearch").press("Enter");
  await page.getByRole("status").waitFor();
  assert.match(await page.getByRole("status").innerText(), new RegExp(intakeId), "search should identify the matching intake");
  await page.locator("#caseSearch").fill("supplier quality");
  await page.locator("#caseSearch").press("Enter");
  assert.match(await page.getByRole("status").innerText(), /CASE-019/, "search should match an illustrative case by title");

  await page.getByRole("button", { name: "Qualification" }).click();
  await page.getByRole("button", { name: "Mark information needed" }).click();
  await page.getByText("Returned for additional information.", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Issue detail" }).click();
  await page.getByText("Needs information", { exact: true }).first().waitFor();

  await page.getByRole("button", { name: "Qualification" }).click();
  const disabledCatalogButtons = page.getByRole("button", { name: "NEW ISSUE", exact: true });
  assert.ok(await disabledCatalogButtons.count() >= 1, "NEW ISSUE should remain visible in qualification");
  for (let i = 0; i < await disabledCatalogButtons.count(); i++) {
    await assertDisabled(disabledCatalogButtons.nth(i));
  }
  await page.locator('[data-page="solution"]').first().click();
  await page.getByRole("heading", { name: "Recommendation abstention & emergency path" }).waitFor();
  await page.locator("#g3-abstain-reason").selectOption({ label: "Hard constraint unresolved" });
  await page.locator("#g3-evidence-note").fill("Engineering approval evidence is missing.");
  await page.getByRole("button", { name: "Withhold recommendation" }).click();
  await page.getByText(/Recommendation withheld for this session/i).waitFor();
  await page.getByText(/Engineering approval evidence is missing/i).waitFor();
  assert.equal(await page.locator(".candidate.selected").count(), 0, "abstention must remove the visual recommended-selection state");
  await page.locator('[data-page="decision"]').first().click();
  await page.getByText(/Current-session abstention guard is active/i).waitFor();
  await page.locator('[data-page="solution"]').first().click();
  await page.getByText(/Recommendation withheld for this session/i).waitFor();
  await page.getByRole("button", { name: "Clear session hold" }).click();
  assert.equal(await page.locator(".candidate.selected").count(), 1, "clearing abstention must restore the fixture's selected-candidate styling");
  await page.locator("#g3-emergency-title").fill("Temporarily hold the non-critical release");
  await page.locator("#g3-emergency-owner").fill("Production Planning Lead");
  await page.locator("#g3-emergency-expiry").fill("2099-01-01T12:00");
  await page.locator("#g3-emergency-reversible").check();
  await page.getByRole("button", { name: "Record emergency proposal" }).click();
  await page.getByText(/Emergency proposal 1: Temporarily hold the non-critical release/i).waitFor();
  await page.locator('[data-page="decision"]').first().click();
  await page.getByRole("heading", { name: "Rejected / deferred alternatives ledger" }).waitFor();
  await page.getByRole("button", { name: "Flag for reconsideration" }).first().click();
  await page.getByText("REOPEN WHEN TRIGGER MET", { exact: true }).waitFor();
  await page.locator('[data-page="outcome"]').first().click();
  await page.getByRole("heading", { name: "Decision change & value proof ledger" }).waitFor();
  await page.locator("#g3-baseline").fill("Prior comparable cases took 12 days; source: last quarter sample.");
  await page.locator("#g3-changed-decision").fill("Changed from expedite to resequence after liquidity review; manager confirmed.");
  await page.locator("#g3-observed-outcome").fill("Milestone achieved after 5 days; project log reference DEMO-OBS-01.");
  await page.locator("#g3-measurement-window").fill("5 days after action");
  await page.getByRole("button", { name: "Record value evaluation" }).click();
  await page.getByText(/Evaluation captured \(session-only\)/i).waitFor();
  await page.getByText(/Attribution: Not established/i).waitFor();
  await page.getByText(/Measurement window: 5 days after action/i).waitFor();
  await page.locator('[data-page="solution"]').first().click();
  const disabledSolutionButtons = page.getByRole("button", { name: "NEW SOLUTION", exact: true });
  assert.ok(await disabledSolutionButtons.count() >= 1, "NEW SOLUTION should remain visible in Solution");
  for (let i = 0; i < await disabledSolutionButtons.count(); i++) {
    await assertDisabled(disabledSolutionButtons.nth(i));
  }
  await page.locator('[data-page="issue"]').first().click();

  const opener = page.locator('.pagehead button[data-act="new-intake"]');
  await opener.click();
  await page.locator("#intakeForm button[type='submit']").focus();
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(() => document.activeElement?.getAttribute("aria-label")), "Close",
    "Tab from final modal control should wrap to close button");
  await page.locator("#closeModal").click();
  assert.equal(await opener.evaluate(el => el === document.activeElement), true,
    "closing the modal should restore focus to the opener");

  await opener.click();
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#modalback").evaluate(el => el.classList.contains("open")), false,
    "Escape should close the modal");
  assert.equal(await opener.evaluate(el => el === document.activeElement), true,
    "Escape dismissal should restore opener focus");

  await opener.click();
  await page.locator("#cancelIntake").click();
  assert.equal(await page.locator("#modalback").evaluate(el => el.classList.contains("open")), false,
    "Cancel should close the modal");

  await opener.click();
  await page.locator("#modalback").click({ position: { x: 4, y: 4 } });
  assert.equal(await page.locator("#modalback").evaluate(el => el.classList.contains("open")), false,
    "backdrop click should close the modal");

  await page.reload();
  await page.locator('[data-page="issue"]').first().click();
  assert.equal(await page.getByText("Browser smoke test intake", { exact: false }).count(), 0,
    "temporary intake should clear after a full page refresh");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('[data-page="home"]').first().click();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert.equal(overflow, false, "mobile layout should not overflow horizontally");

  assert.deepEqual(errors, [], "no browser page errors or console errors should occur");
  console.log("PASS: navigation, intake, queue retention in-page, search, qualification state, disabled catalogue controls, modal focus, and mobile overflow.");
} finally {
  await browser.close();
}

async function assertDisabled(locator) {
  assert.equal(await locator.isDisabled(), true, "catalogue authoring button must be disabled");
}
