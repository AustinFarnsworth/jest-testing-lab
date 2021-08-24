const {returnTwo, greeting, add} = require('./functions')

test("Should return the number 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("This should return a greeting with your name", () => {
    expect(greeting('Austin')).toEqual("Hello Austin")
})

test("This should add two numbers together", () => {
    expect(add(3, 4)).toEqual(7)
})