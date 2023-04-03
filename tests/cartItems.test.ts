import { driverInstance } from "../src/core/driver";
import { BasePage } from "../src/pages/base.page";
import { MyPage } from "../src/pages/my-page.page";
import { categorias } from "./resources/list";
import { url } from "./resources/url";


describe('Test verificar cantidad de items en carrito', ()=>{
    let myPage: MyPage;

    const categoriaElegida = categorias[0].name;
    const subcategoriaElegida = categorias[0].subcategories[1].name;
    const itemElegido = categorias[0].subcategories[1].items[0].name;
    const itemElegido2 = categorias[0].subcategories[1].items[1].name;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        myPage = new MyPage();
    },);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Ingresar a la Pagina', async () => {
        await myPage.navigateTo(url);
    });

    it('Click en Categorías', async () => {
        await myPage.clickCategorias();
    });

    it('Selecciona Categoría', async () => {
        await myPage.clickElec(categoriaElegida);
    });

    it('Selecciona Subcategoria', async () => {
        await myPage.clickElem(subcategoriaElegida);
    });

    it('Selecciona Items', async () => {
        await myPage.selecItem(itemElegido);
        await myPage.addCart(itemElegido);
        await myPage.selecItem(itemElegido2);
        await myPage.addCart(itemElegido2);
    });

    it('Items en carrito', async () => {
        const valor = await myPage.getElementTextCarrito();
        
        expect(valor).toEqual("2");
    });
});