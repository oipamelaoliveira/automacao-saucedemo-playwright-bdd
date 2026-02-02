import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  // Declarar a variável erroLogin
  let erroLogin;

  // Abrir o site antes de cada teste
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    
  // Definir erroLogin
    erroLogin = page.locator('[data-test="error"]');
  });

  // Executar os testes
  test("CT-001: Login com sucesso", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("CT-002: Login com username inválido", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(erroLogin).toBeVisible();
  });

  test("CT-003: Login com password inválida", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(erroLogin).toBeVisible();
  });

  test("CT-004: Login sem username", async ({ page }) => {
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(erroLogin).toBeVisible();
  });

  test("CT-005: Login sem password", async ({ page }) => {
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="login-button"]').click();
    await expect(erroLogin).toBeVisible();
  });
});
