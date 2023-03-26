// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";

describe('Feature Login SauceDemo', () => {
    let loginPage: LoginPage;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        loginPage = new LoginPage();  
        // loginPage = new LoginPage();
    }, 30000);

    afterAll(async () => {
        //await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.navigateTo('https://www.saucedemo.com/');
    });

    it('Sets Username', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.setUsername('standard_user');
    });

    it('Sets Password', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.setPassword('secret_sauce');
    });

    it('Clicks login Button', async () => {
        //await loginPage.Login('standard_user', 'secret_sauce');
        await loginPage.clickButton();
    });
});