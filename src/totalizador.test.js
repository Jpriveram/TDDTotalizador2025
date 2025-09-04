import totalizador from "./totalizador.js";

describe("Muestra cantidad de items en pantalla  ", () => {
  it("Deberia mostrar cantidad de items en pantalla", () => {
    expect(totalizador(100)).toEqual("100");
  });
});


