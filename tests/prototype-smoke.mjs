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
  await page.getByRole("heading", { name: /Good afternoon, Manager/ }).waitFor();

  for (const [key, heading] of [
    ["issue", /Issue intake & qualification/],
    ["solution", /Compare solution candidates/],
    ["decision", /Decision & action tracking/],
    ["outcome", /Outcomes & organizational learning/],
    ["settings", /Settings & demo controls/],
    ["home", /Good afternoon, Manager/]
  ]) {
    await page.locator(`[data-page="${key}"]`).first().click();
    await page.getByRole("heading", { name: heading }).waitFor();
  }

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
  await page.getByRole("button", { name: "Withhold recommendation" }).click();
  await page.getByText(/Recommendation withheld for this session/i).waitFor();
  assert.equal(await page.locator(".candidate.selected").count(), 0, "abstention must remove the visual recommended-selection state");
  await page.getByRole("button", { name: "Clear session hold" }).click();
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
