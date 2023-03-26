import { BasePage } from "./base.page";
import { lista } from "../../tests/resources/list";

export class MyPage extends BasePage{
    
    private catButton: string = "li.ui-menu-item.parent>a";
    private elecButton: string = "//span[text()='Electrónicos']//ancestor::a";
    private subcatButton: string = "//a[@rel='nofollow'][text()='Audífonos']";
    private subcatElecc: string = "//a[contains(text(),'Logitech H3650e Auricular Stereo Headset')]";
    private subcatEleccAdd: string="//a[contains(text(),'Logitech H3650e Auricular Stereo Headset')]//ancestor::div[@class='product details product-item-details']/div[@class='product-item-inner']/div/div/form/button";
    private cartNum:string = "span.counter-number";
    
    constructor(){
        super();
    }

    async clickButton() {
        await this.driver.Page.click(this.catButton);
    }

    async clickElec() {
        await this.driver.Page.click(this.elecButton);
    }

    async clickElem() {
        await this.driver.Page.click(this.subcatButton);
    }

    async selecItem() {
        await this.driver.Page.hover(this.subcatElecc);
    }

    async addCart() {
        await this.driver.Page.click(this.subcatEleccAdd);
        
    }

    async getElementText() {
        await this.driver.Page.waitForTimeout(10000);
        return this.driver.Page.textContent(this.cartNum);
        
    }

}