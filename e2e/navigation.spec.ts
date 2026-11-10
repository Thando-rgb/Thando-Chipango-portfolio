import { test, expect } from '@playwright/test'

test.describe('Navigation and footer links', () => {
  test('main navigation links resolve to correct sections', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /work/i })).toHaveAttribute('href', '#work')
    await expect(page.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    await expect(page.getByRole('link', { name: /experience/i })).toHaveAttribute('href', '#experience')
    await expect(page.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact')
  })

  test('footer social links point to correct external URLs', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/Thando-rgb')
    await expect(page.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/thando-chipango')
  })

  test('email and phone contact links resolve correctly', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: 'thandochipango316@gmail.com' })).toHaveAttribute('href', 'mailto:thandochipango316@gmail.com')
    await expect(page.getByRole('link', { name: '+265 992 714 117' })).toHaveAttribute('href', 'tel:+265 992 714 117')
  })
})
