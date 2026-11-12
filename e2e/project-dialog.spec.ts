import { test, expect } from '@playwright/test'

test.describe('Project dialog', () => {
  test('opens a project dialog and paginates with wrap-around', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Explore Network Intrusion Detection' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await expect(page.getByRole('dialog').getByRole('heading', { name: /network intrusion detection/i })).toBeVisible()
    await page.getByRole('button', { name: /next project/i }).click()
    await page.getByRole('button', { name: /previous project/i }).click()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })
})