import { test, expect } from '@playwright/test'

test.describe('Hero section', () => {
  test('renders name, tagline, CV download link, and scroll-to-work link', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Thando Chipango' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /thoughtful code/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /download cv/i })).toHaveAttribute('href', '/resume.pdf')
    await expect(page.getByRole('link', { name: /scroll to selected work/i })).toHaveAttribute('href', '#work')
  })

  test('"Explore my work" link scrolls to work section', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work')
  })
})
