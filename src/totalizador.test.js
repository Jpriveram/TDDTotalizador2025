import {get_cantidad,get_precio} from "./totalizador.js";

describe("Muestra cantidad de items en pantalla  ", () => {
  it("Deberia mostrar cantidad de items en pantalla", () => {
    expect(get_cantidad(100)).toEqual("100");
  });
});

describe("Muestra precio en pantalla  ", () => {
  it("Deberia mostrar precio en pantalla", () => {
    expect(get_precio(20)).toEqual("20");
  });

});


