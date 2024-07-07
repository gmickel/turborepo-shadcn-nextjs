import { expect, test } from '@playwright/test';

test('theme toggle button switches between light and dark modes', async ({
  page,
}) => {
  // Navigate to the home page
  await page.goto('/');

  // Check initial theme (assuming it starts in light mode)
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  // Find and click the theme toggle button
  const themeToggleButton = page.locator(
    'button:has(.lucide-sun), button:has(.lucide-moon)',
  );
  await themeToggleButton.click();

  // Check if the theme has changed to dark
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

  // Click the toggle button again
  await themeToggleButton.click();

  // Check if the theme has changed back to light
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  // Check if the correct icon is displayed for light mode
  await expect(page.locator('.lucide-sun')).toBeVisible();
});
