import { test, expect } from '@playwright/test';

test.describe('PillJourney section', () => {
  test('renders all 4 stage selector buttons', async ({ page }) => {
    await page.goto('/');
    await page.locator('#stage-selectors-container').scrollIntoViewIfNeeded();
    const stageButtons = page.locator('#stage-selectors-container button');
    await expect(stageButtons).toHaveCount(4);
  });

  test('displays stage detail card with stage 1 content', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/Dissolution/i).first()).toBeVisible();
  });

  test('stage selector scrolls horizontally on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const container = page.locator('#stage-selectors-container');
    await container.scrollIntoViewIfNeeded();
    const overflowX = await container.evaluate((el) =>
      getComputedStyle(el).overflowX
    );
    expect(['auto', 'scroll']).toContain(overflowX);
  });
});
