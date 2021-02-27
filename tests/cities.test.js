const City = require('../src/Models/City')
const Grade = require('../src/Models/Grade')

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Can create a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});
test('Can create a grades object', () => {
    let grade = new Grade();
    expect(grade).toBeInstanceOf(Grade);
});
test('Can create a city object by factory', () => {
    let grade = Grade.create();
    expect(grade).toBeInstanceOf(Grade);
});