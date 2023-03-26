import { BasePage } from "./base.page";

class InventoryPage extends BasePage {
    // Locators    
    //private itemAddCartButton = (itemName: string) => `//div[text()='${itemName}']/ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']`;
    private itemAddCartButton = async (itemName: string) => `//div[@class="inventory_item_name"][text()="${itemName}"]//ancestor::div[@class="inventory_item"]//button[contains(@id, "add-to-cart")]`;

    //   //div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item_description']//button

    constructor(){
        super();
    }

    async addToCartItem(itemName: string) {        
        await this.driver.Page.click(await this.itemAddCartButton(itemName));
    }
}

export const inventoryPage = new InventoryPage();