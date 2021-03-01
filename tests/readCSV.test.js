const ReadCSV = require('../src/readCSV');
const City = require('../src/Models/City')
const Grade = require('../src/Models/Grade')
const expect = require('expect');

test('Can Read CSV File - worldcities.csv', () => {
    let filename  = 'data/worldcities.csv';
    let records = ReadCSV.getRecords(filename, City);
    expect(records.length).toBe(6);
});

test('Can Read CSV File - grades.csv', () => {
    let filename  = 'data/grades.csv';
    let records = ReadCSV.getRecords(filename, Grade);
    expect(records.length).toBe(4);
});

test('Can create a readCSV object', () => {
    let readCSV = new ReadCSV();
    expect(readCSV).toBeInstanceOf(ReadCSV);
});

test('Can create a readCSV object by factory', () => {
    let readCSV = ReadCSV.create();
    expect(readCSV).toBeInstanceOf(ReadCSV);
});