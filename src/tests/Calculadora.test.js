
/**
 * Prueba para sumar
 */
test('prueba de la función suma', async () => { 
    // arrange
    const calc = new Calculadora();
    const a = 5;
    const b = 3;
    const resultadoEsperado = 8;
    // act
    const resultado = calc.suma(a, b);
    // asser
    expect(resultado).toBe(resultadoEsperado);
 })