import { chromium, devices } from 'playwright';
import assert from 'node:assert';

( async () => {
  // Setup
  const browser = await chromium.launch(
    {
        headless: false
    }
  );
  const context = await browser.newContext(devices['Galaxy S8']);
  const page = await context.newPage();

  // The actual interesting bit
  await context.route('**.jpg', route => route.abort());
  await page.goto('https://example.com/');

  await page.waitForTimeout(5000);
  assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion

  // Teardown
  await context.close();
  await browser.close();
})()