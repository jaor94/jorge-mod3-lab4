import { driverInstance } from "../src/core/driver";
import { BasePage } from "../src/pages/base.page";
import { MyPage } from "../src/pages/my-page.page";


describe('Test comprar', ()=>{
    let myPage: MyPage;
    beforeAll(async () => {              
        await driverInstance.startDriver();
        myPage = new MyPage();  
        // loginPage = new LoginPage();
    },);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await myPage.navigateTo('https://flow.bo/');
    });

    it('Clicks Button', async () => {
        await myPage.clickButton();
    });

    it('Clicks Electronicos', async () => {
        await myPage.clickElec();
    });

    it('Clicks Elemento', async () => {
        await myPage.clickElem();
    });

    it('Select Elemento', async () => {
        await myPage.selecItem();
    });

    it('Add Elemento', async () => {
        await myPage.addCart();
    });

    it('Valor cart', async () => {
        const valor = await myPage.getElementText();
        console.log(valor);
        expect(valor).toEqual("1");
    });
});