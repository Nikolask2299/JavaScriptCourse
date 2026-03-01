//2

class Student {
    constructor(firstName, lastName, group) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
    }
}


function getBinarySearchStudent(array, firstName, lastName) {
    array.sort((a, b) => {
        if (a.firstName + a.lastName > b.firstName + b.lastName) {
            return 1;
        } else if (a.firstName + a.lastName < b.firstName + b.lastName) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log(array);

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle].firstName === firstName && array[middle].lastName === lastName) {
            return array[middle];
        } else if (array[middle].firstName + array[middle].lastName > firstName + lastName) {
            end = middle - 1;
        } else {
            start = middle + 1;           
        }

    }
    
    return null;
}

array = [
    new Student("Pesho", "Ivanov", "1"),
    new Student("Gosho", "Petrov", "2"),
    new Student("Mariika", "Ivanova", "3"),
    new Student("Ivan", "Ivanov", "4"),
    new Student("Pesho", "Petrov", "5"),
    new Student("Gosho", "Ivanov", "6"),
    new Student("Mariika", "Petrova", "7")
];

console.log(getBinarySearchStudent(array, "Pesho", "Petrov"));
