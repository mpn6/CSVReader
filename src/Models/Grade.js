module.exports = class Grade {
    constructor(data = null) {
        if(data) {
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.studentID = data.studentID;
            this.homework1 = data.homework1;
            this.homework2 = data.homework2;
            this.homework3 = data.homework3;
            this.homework4 = data.homework4;
            this.homework5 = data.homework5;
            this.total = data.total;
        }

    }
    //Factory Method to Create a City
    static create(data) {
        return new Grade(data);
    }
}