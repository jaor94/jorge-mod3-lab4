import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
    // Locators
    private username: string = '#user-name';
    private password: string = '#password';
    private loginButton: string = '#login-button';

    constructor(){
        super();
    }

    async setUsername(text: string) {
        //this.driver.startDriver();

        // ElementAction.setText(locator, text)
        await this.driver.Page.fill(this.username, text);
    }

    async setPassword(text: string) {
        await this.driver.Page.fill(this.password, text);
    }

    async clickButton() {
        // page.click(locator); 
        await this.driver.Page.click(this.loginButton);
    }

    async Login(username: string, password: string) {
        await this.driver.Page.fill(this.username, username);
        await this.driver.Page.fill(this.password, password);
        await this.driver.Page.click(this.loginButton);
        //await this.driver.Page.waitForTimeout(10000);
    }
}