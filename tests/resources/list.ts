 class Item {
    constructor(public name: string) {}
  }
  
 class Subcategory {
    constructor(public name: string, public items: Item[]) {}
  }
  
 class Category {
    constructor(public name: string, public subcategories: Subcategory[]) {}
  }

  
  const electronicos = new Category("Electrónicos", [
    new Subcategory("Audífonos", [
      new Item("Logitech G935 Auricular Gaming Lightsync Wireless 7.1"),
      new Item("Logitech H3650e Auricular Stereo Headset")
    ]),
    new Subcategory("Computadoras y Accesorios", [
      new Item("Cisco Switch Unmanaged CBS110 24 Puertos"),
      new Item("Dell Servidor Poweredge R650 Rack")
    ])
  ]);
  const herramientas = new Category("Herramientas", [
    new Subcategory("Complementos", [
      new Item("Truper Encendedor Manual para Soldadura de gas"),
      new Item("Truper Pinza Porta Electrodo de 300 A")
    ]),
    new Subcategory("Seguridad", [
      new Item("Hermex Jalador Cilindro Latón"),
      new Item("Hermex Perilla Metálica Contempo")
    ])
  ]);

export const categorias=[electronicos, herramientas];