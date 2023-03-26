// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/core/driver";
import { mainHeader } from "../src/pages/components/main-header.page";
import { inventoryPage } from "../src/pages/inventory.page";
import { LoginPage } from "../src/pages/login.page";
import { items } from "./resources/items";

describe('Feature Login SauceDemo', () => {
    let loginPage: LoginPage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        loginPage = new LoginPage();
        await loginPage.navigateTo('https://www.saucedemo.com/');
        await loginPage.setUsername('standard_user');
        await loginPage.setPassword('secret_sauce');
        await loginPage.clickButton();
        // loginPage = new LoginPage();
    }, 30000);

    afterAll(async () => {
        // await inventoryPage.addToCartItem('Sauce Labs Backpack');
        // await inventoryPage.addToCartItem('Sauce Labs Bolt T-Shirt');
        await driverInstance.closeDriver();
    });

    test('Validate Cart icon Counter', async () => {
        //items.item1;
        await inventoryPage.addToCartItem('Sauce Labs Backpack');
        await inventoryPage.addToCartItem('Sauce Labs Bolt T-Shirt');
        //await driverInstance.Page.waitForTimeout(5000);


        //Validate icon cart is 2

        const cartIconCounterValue = await mainHeader.getElementText();
        console.log(cartIconCounterValue);
        expect(cartIconCounterValue).toEqual("2");

        
    }, 30000);
});