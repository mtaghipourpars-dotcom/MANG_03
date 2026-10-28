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
  await page.locator("#title").fill("Browser smoke test intake");
  await page.locator("#domain").selectOption({ label: "Finance" });
  await page.locator("#urgency").selectOption({ label: "Critical — immediate review" });
  await page.locator("#description").fill("Observed cash-flow pressure; cause and impact remain unverified.");
  await page.locator("#evidence").fill("SMOKE-EVIDENCE-001");
  await page.getByRole("button", { name: "Save intake" }).click();

  await page.getByText("Browser smoke test intake", { exact: true }).waitFor();
  await page.getByText("SMOKE-EVIDENCE-001", { exact: true }).waitFor();
  await page.getByText(/disappear when this page is refreshed or closed/i).waitFor();
  const intakeIdText = await page.locator("#content").innerText();
  const intakeId = intakeIdText.match(/INT-DEMO-\d+-\d+/)?.[0];
  assert.ok(intakeId, "temporary intake ID should be visible in the queue");

  await page.locator("#caseSearch").fill("Browser smoke test intake");
  await page.locator("#caseSearch").press("Enter");
  await page.getByRole("status").getByText(new RegExp(intakeId)).waitFor();

  await page.getByRole("button", { name: "Qualification" }).click();
  await page.getByRole("button", { name: "Mark information needed" }).click();
  await page.getByText("Returned for additional information.", { exact: false }).waitFor();
  await page.getByRole("button", { name: "Issue detail" }).click();
  await page.getByText("Needs information", { exact: true }).first().waitFor();

  await page.getByRole("button", { name: "Qualification" }).click();
  const disabledCatalogButtons = page.getByRole("button", { name: "NEW ISSUE" });
  assert.ok(await disabledCatalogButtons.count() >= 1, "NEW ISSUE should remain visible in qualification");
  for (let i = 0; i < await disabledCatalogButtons.count(); i++) {
    await assertDisabled(disabledCatalogButtons.nth(i));
  }
  await page.locator('[data-page="solution"]').first().click();
  const disabledSolutionButtons = page.getByRole("button", { name: "NEW SOLUTION" });
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
