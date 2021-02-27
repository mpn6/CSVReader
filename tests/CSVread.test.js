const CSVRead = require('../src/CSVReader');
const City = require('../src/Models/City')
const Grade = require('../src/Models/Grade')
const expect = require('expect');

test('Can Read CSV File - worldcities.csv', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});

test('Can Read CSV File - grades.csv', () => {
    let filename  = 'data/grades.csv';
    let records = CSVRead.getRecords(filename, Grade);
    expect(records.length).toBe(4);
});