class ReadCSV{

    static output = [];

    constructor(filename, model){
        this.filename = filename;
        this.model = model;
    }

    static create(filename, model){
        return new ReadCSV(filename, model);
    }

    static getRecords(filename, model){
        const file = require('../src/fileOps/File');
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync')
        let absolutePath = file.getAbsolutePath(filename);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
        let fileContents = fs.readFileSync(absolutePath);
        const records = parse(fileContents, options)
        let recordsList = Array();
        records.forEach(function (data) {
            recordsList.push(model.create(data));
        })

        return recordsList;
    }
}
module.exports = ReadCSV;