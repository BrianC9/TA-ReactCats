import { test, expect } from '@playwright/test'
const PAGE = 'http://127.0.0.1:5173/'
const RANDOM_FACT_URL = 'https://catfact.ninja/fact'

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`runnign ${testInfo.title}`)
  await page.goto(PAGE)
})

test(' show the right heading and right title', async ({ page }) => {
  const text = page.getByRole('heading', {})
  await expect(text).toContainText('Random cats')
  await expect(page).toHaveTitle('Vite App')
})

test(' show the text and image', async ({ page }) => {
  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')
  await expect(text, image).toBeVisible()
})

// ADD a test to

test('check if the text is in the image src ', async ({ page }) => {
  // Click to the button
  const text = await page.getByRole('paragraph').textContent()
  const textFormated = text.replace(/ /g, '%20')

  const image = await page.waitForSelector('img')

  const imageSrc = await image.getAttribute('src')

  await expect(imageSrc.includes(textFormated)).toBeTruthy()
})

test('button changes the text', async ({ page }) => {
  // Click to the button
  const text = await page.getByRole('paragraph')
  const textBeforeClick = await text.textContent()

  const responsePromise = page.waitForResponse(response => response.url() === RANDOM_FACT_URL && response.status() === 200)
  await page.getByRole('button').click()

  await responsePromise

  const textAfter = await page.getByRole('paragraph')

  const textAfterClick = await textAfter.textContent()

  console.log([textBeforeClick, textAfterClick])

  await expect(textBeforeClick !== textAfterClick).toBeTruthy()
})
