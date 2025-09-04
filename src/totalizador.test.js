import {get_cantidad,get_precio,totalizador} from "./totalizador.js";

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

describe("Muestra precio neto en pantalla  ", () => {
    it("Deberia mostrar precio neto en pantalla", () => {
      expect(totalizador(100,4)).toEqual("400");
    });
});


