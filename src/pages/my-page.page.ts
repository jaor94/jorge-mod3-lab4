import { BasePage } from "./base.page";
import { categorias } from "../../tests/resources/list";

export class MyPage extends BasePage{
    private catButton: string                           = "li.ui-menu-item.parent>a";
    private elecButton = async (cat: string)            => `//span[text()="${cat}"]//ancestor::a`;
    private subcatButton= async (subcat:string)         => `//a[@rel='nofollow'][text()="${subcat}"]`;
    private subcatElecc= async (eleccion:string)        => `//a[contains(text(),"${eleccion}")]`;
    private subcatEleccAdd = async (eleccion: string)   => `//a[contains(text(),"${eleccion}")]//ancestor::div[@class='product details product-item-details']/div[@class='product-item-inner']/div/div/form/button`;
    private cartNum:string                              = "span.counter-number";
    private cartIcon:string                             = "a.action.showcart";
    private precioItem  = async (eleccion:string)       => `//a[contains(text(),"${eleccion}")]//ancestor::div[@class='product details product-item-details']/div[@data-role='priceBox']/span/span/span`
    
    private deleteItemFromCart:string                   = "//strong/a[text()='Logitech H3650e Auricular Stereo Headset']//ancestor::div[@class='product-item-details']/div[@class='product actions']/div[@class='secondary']/a"    
    private precioTotal:string                          = "//span[@class='price-wrapper']/span[@class='price']"
    

    constructor(){
        super();
    }

    async clickCategorias() {
        await this.driver.Page.click(this.catButton);
    }

    async clickElec(cat:string) {
        await this.driver.Page.click(await this.elecButton(cat));
    }

    async clickElem(cat:string) {
        await this.driver.Page.click(await this.subcatButton(cat));
    }

    async selecItem(item: string) {
        await this.driver.Page.hover(await this.subcatElecc(item));
    }

    async addCart(item: string) {
        await this.driver.Page.click(await this.subcatEleccAdd(item));
        await this.driver.Page.waitForTimeout(30000);
    }

    async getElementTextCarrito() {
        await this.driver.Page.waitForTimeout(30000);
        return this.driver.Page.textContent(this.cartNum);
    }

    async clickCarrito(){
        await this.driver.Page.click(this.cartIcon);
    }

    async getElementPrice(item:string) {
        //await this.driver.Page.waitForTimeout(10000);
        return this.driver.Page.textContent(await this.precioItem(item));
    }

    async getElementTextTotal() {
        await this.driver.Page.waitForTimeout(30000);
        return this.driver.Page.textContent(this.precioTotal);
    }
}
