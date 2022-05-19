import Calculadora from "../lib/Calculadora"



const cases = [[1, 3, 4], [-2, -2, -4], [2, -2, 0]];

/**
 * Prueba para sumar
 */
test.each(cases)('probar que %p + %p vale %p', async (a, b, r) => { 
    // arrange
    const calc = new Calculadora();
    const resultadoEsperado = 8;
    // act
    const resultado = calc.suma(a, b);
    // asser
    expect(resultado).toBe(r);
 })

 test('la raiz de 33 es 5.744562647 con una precision de 0.001', async () => { 
     const calc = new Calculadora();
     const valor = 33;
     const resultadoEsperado = 5.744562647;
     // act
     const resultado = calc.raiz(valor);
     // assert
     expect(resultado).tobeCloseTo(resultadoEsperado, 3);

  })