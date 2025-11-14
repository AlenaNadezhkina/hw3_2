import { test, expect } from '@playwright/test';
const {chromium} = require('playwright');
const {email , password, password2} = require("../user.js");

test('test', async ({ page }) => {
    await page.goto('https://netology.ru/');
    await page.getByRole('link', { name: 'Войти' }).click();
    await page.getByText('Войти по почте').click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Пароль' }).dblclick();
    await page.getByRole('textbox', { name: 'Пароль' }).fill(password2);
    await page.getByTestId('login-submit-btn').click();
    await expect(page.getByText('Вы ввели неправильно логин или пароль.')).toBeVisible()
});