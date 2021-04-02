const {  } = require('./app.js');

// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
/*test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("One yen should be 127.9 dollars", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 euro are 127.9 ye, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 127.9/1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yen);
})


test("One yen should be 127.9 dollars", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(3.5)

    // if 1 euro are 127.9 ye, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 0.8/127.9; 
    
    // this is the comparison for the unit test1
    expect(expected).toBe(pounds);
})