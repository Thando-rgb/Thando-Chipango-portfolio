import { test, expect } from '@playwright/test'

test.describe('CV download', () => {
  test('Download CV link points to resume.pdf', async ({ page }) => {
    await page.goto('/')

    const cvLink = page.getByRole('link', { name: /download cv/i })
    await expect(cvLink).toHaveAttribute('href', '/resume.pdf')

    const response = await page.request.get('/resume.pdf')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/pdf')
  })
})