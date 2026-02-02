import { test, expect } from "@playwright/test";

test.describe("Carrinho vazio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("CT-006: Adicionar um produto", async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await expect(
      page.locator('[data-test="remove-sauce-labs-onesie"]'),
    ).toHaveText("Remove");
  });

  test("CT-007: Verificar quantidade no ícone do carrinho", async ({
    page,
  }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(
      "1",
    );
  });
});

test.describe("Carrinho com um item", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await expect(
      page.locator('[data-test="remove-sauce-labs-onesie"]'),
    ).toHaveText("Remove");
  });

  test("CT-008: Verificar se o produto está no carrinho", async ({ page }) => {
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="inventory-item"]')).toContainText(
      "Sauce Labs Onesie",
    );
  });

  test("CT-009: Remover produto do carrinho", async ({ page }) => {
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
    await expect(page.locator('[data-test="inventory-item"]')).not.toBeVisible();
  });

  test("CT-010: Verificar persistência após logout", async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText(
      "1",
    );
  });

  test('CT-011: Adicionar mais um produto', async ({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await expect(
      page.locator('[data-test="remove-sauce-labs-fleece-jacket"]'),
    ).toHaveText("Remove");
    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText('2');
  })
});
