
import { BasePage } from "../base.page";

class MainHeaderPage extends BasePage {
    // Locators    
    private iconCartCounter = 'span.shopping_cart_badge';

    constructor(){
        super();
    }

    async getElementText() {
        //await this.driver.Page.click(this.itemAddCartButton(itemName));
        this
        return this.driver.Page.textContent(this.iconCartCounter);
    }
}
export const mainHeader = new MainHeaderPage();