const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test("Should return the number 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("This should return a greeting with your name", () => {
    expect(greeting('Austin')).toEqual("Hello Austin")
})

// test("This should add two numbers together", () => {
//     expect(add(3, 4)).toEqual(7)
// })

// test('This should return the remainder of two numbers', () => {
//     expect(subtract(5,3)).toEqual(2)
// })

// test("This should return the product of two numbers", () => {
//     expect(multiply(2,3)).toEqual(6)
// })

// test("This should return the quotient of two numbers", () => {
//     expect(divide(6, 3)).toEqual(2)
// })

describe("Math functions", () => {
    test("Return sum of two numbers", () => {
        expect(add(2, 3)).toEqual(5)
    });
    test("Returns difference of two numbers", () => {
        expect(subtract(5, 3)).toEqual(2)
    });
    test("Returns the product of two numbers", () => {
        expect(multiply(2, 3)).toEqual(6)
    });
    test("Returns the quotient of two numbers", () => {
        expect(divide(6, 3)).toEqual(2)
    });


})

 

