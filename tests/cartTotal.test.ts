import { driverInstance } from "../src/core/driver";
import { BasePage } from "../src/pages/base.page";
import { MyPage } from "../src/pages/my-page.page";
import { categorias } from "./resources/list";
import { url } from "./resources/url";

describe('Test monto total a pagar', ()=>{
    let myPage: MyPage;

    const categoriaElegida = categorias[0].name;
    const subcategoriaElegida = categorias[0].subcategories[1].name;
    const itemElegido = categorias[0].subcategories[1].items[0].name;
    const itemElegido2 = categorias[0].subcategories[1].items[1].name;

    let totalAPagar:number = 0;

    beforeAll(async () => {              
        await driverInstance.startDriver();
        myPage = new MyPage();
    },);

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Ingresar a la pagina', async () => {
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
        let valor1 = await myPage.getElementPrice(itemElegido);
        const stringValor1:any = valor1?.match(/\d+\.\d+/g)?.[0]?.replace(",",".").replace(".","");
        const intValor1 = parseInt(stringValor1);
        totalAPagar += intValor1;
        await myPage.addCart(itemElegido);
        await myPage.selecItem(itemElegido2);
        let valor2 = await myPage.getElementPrice(itemElegido2);
        const stringValor2:any = valor2?.match(/\d+\.\d+/g)?.[0]?.replace(",",".").replace(".","");
        const intValor2 = parseInt(stringValor2);
        totalAPagar += intValor2;
        await myPage.addCart(itemElegido2);
    });

    it('Total en carrito', async () => {
        await myPage.clickCarrito();
        const valor = await myPage.getElementTextTotal();
        const numero:any = valor?.match(/\d+\.\d+/g)?.[0]?.replace(",",".").replace(".","");
        const elnumero = parseInt(numero)
                
        expect(elnumero).toEqual(totalAPagar);
    });
});