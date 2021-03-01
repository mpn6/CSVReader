const expect = require('expect');
const Caculate = require("../src/Calculate");


test('Can calculate addition', () => {
    let result = Caculate.calculate(1,2,"add");
    expect(result).toBe(3);
});

test('Can calculate subtraction', () => {
    let result = Caculate.calculate(1,2,"subtract");
    expect(result).toBe(-1);
});
