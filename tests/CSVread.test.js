const CSVRead = require('../src/Read');
const City = require('../src/Models/City')
const Grade = require('../src/Models/Grade')
const expect = require('expect');

test('Can Read CSV File', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});

test('Can Read CSV File', () => {
    let filename  = 'data/grades.csv';
    let records = CSVRead.getRecords(filename, Grade);
    expect(records.length).toBe(4);
});