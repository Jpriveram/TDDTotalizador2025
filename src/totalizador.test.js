import {get_cantidad,get_precio,get_estado,totalizador} from "./totalizador.js";

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

describe("Muestra estado en pantalla  ", () => {
  it("Deberia mostrar el estado seleccionado  en pantalla", () => {
    expect(get_estado("CA")).toEqual("CA");
  });
});


