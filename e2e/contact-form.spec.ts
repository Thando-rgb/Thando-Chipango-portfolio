import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('shows validation alerts when required fields are missing', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /start a conversation/i }).click()
    await page.getByRole('form').dispatchEvent('submit')
    const alerts = page.getByRole('alert')
    await expect(alerts.first()).toContainText(/please add your name/i)
  })

  test('requires a message of at least ten characters', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /start a conversation/i }).click()
    await page.getByLabelText('Your name').fill('Alex')
    await page.getByLabelText('A little about it').fill('too short')
    await page.getByRole('form').dispatchEvent('submit')
    await expect(page.getByRole('alert').first()).toContainText(/at least 10 characters/i)
  })

  test('rejects a malformed optional email', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /start a conversation/i }).click()
    await page.getByLabelText('Your name').fill('Alex Smith')
    await page.getByLabelText('A little about it').fill('I would love to work together on a project.')
    await page.getByLabelText('Your email').fill('not-an-email')
    await page.getByRole('form').dispatchEvent('submit')
    await expect(page.getByRole('alert').first()).toContainText(/valid email address/i)
  })
})