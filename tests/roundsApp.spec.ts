// tests/rounds.spec.ts
import { test, expect } from '@playwright/test';

// base URL 
const baseURL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Rounds Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the base page 
    await page.goto(baseURL);
    await page.fill('#email', 'user@ss.org');
    await page.fill('#password', 'Speedgolf1');
    await page.click('#loginBtn');

    // Ensure login is successful
    await expect(page.locator('#roundsMode')).toBeVisible();
  });

  test('should verify Vanilla HTML integration with React', async ({ page }) => {
    // Click on the Rounds tab
    await page.click('#roundsMode');
    
    // Wait for React 
    await page.waitForFunction(() => {
      const root = document.querySelector('#rounds-react-root');
      return root && !root.classList.contains('hidden');
    }, { timeout: 10000 });

    // Verify root visibility
    const roundsRoot = page.locator('#rounds-react-root');
    await expect(roundsRoot).toBeVisible();
  });

  test('should render React RoundsMode component in Vanilla HTML', async ({ page }) => {
    // Click on the Rounds tab to make the RoundsMode component visible
    await page.click('#roundsMode');
    await page.waitForSelector('#rounds-react-root:not(.hidden)', { timeout: 10000 });
    const roundsRoot = page.locator('#rounds-react-root');
    await expect(roundsRoot).toBeVisible();
  });

  test('should add a new round successfully', async ({ page }) => {
    await page.click('#roundsMode');
    await page.waitForSelector('#rounds-react-root:not(.hidden)', { timeout: 10000 });
    await page.click('#newRoundFAB');

    // Wait for the modal to appear
    const dialog = page.locator('.dialog-container');
    await expect(dialog).toBeVisible({ timeout: 10000 });

    // Fill in form fields
    await dialog.locator('#roundDate').fill('2024-01-01');
    await dialog.locator('#roundCourse').fill('Test Course');
    await dialog.locator('#roundType').selectOption('practice');
    await dialog.locator('#roundHoles').selectOption('18');
    await dialog.locator('#roundStrokes').fill('80');
    await dialog.locator('#roundMinutes').fill('60');
    await dialog.locator('#roundSeconds').fill('30');
    await dialog.locator('#roundNotes').fill('Test round notes');

    // Submit the form
    await dialog.locator('#roundFormSubmitBtn').click();

    // Verify round is added to the table
    const tableRow = page.locator('table#roundsTable tr').filter({ hasText: 'Test Course' });
    await expect(tableRow).toBeVisible({ timeout: 10000 });
  });
});
