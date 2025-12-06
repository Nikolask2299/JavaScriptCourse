
const student = {
    firstName: "John",
    lastName: "Doe",
    marks: [
        {
            subject: "Math",
            mark: 90
        },
        {
            subject: "Science",
            mark: 85
        },
        {
            subject: "English",
            mark: 95
        },
        {
            subject: "History",
            mark: 80
        }
    ],

    printStudentInfo() {
        console.log(
            `Student: ${this.firstName} ${this.lastName}\n` +
            `Marks:\n` +
            this.marks.map(mark => `${mark.subject}: ${mark.mark}`).join("\n")
        );
    }
}


class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    };
}

class Student {
    constructor(firstName, lastName, marks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.marks = marks;
    };

    printStudentInfo() {
        console.log(
            `Student: ${this.firstName} ${this.lastName}\n` +
            `Marks:\n` +
            this.marks.map(mark => `${mark.subject}: ${mark.mark}`).join("\n")
        );
    };

    getAverageMark() {
        if (this.marks.length > 0) {
            const totalMark = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
            return totalMark / this.marks.length;
        } else {
            return 0;
        }
    };

    getMarkInfo(subject) {
        let mrks = [];
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].subject === subject) {
                mrks.push(this.marks[i]);
            }
        }
    };

    addMark(subject, mark) {
        if (mark >= 0 && mark <= 100) {
            this.marks.push(new Mark(subject, mark));
        } else {
            console.log("Invalid mark value. Mark must be between 0 and 100.");
        }
    }

    removeMark(subject) {
        for (let i = 0; i < this.marks.length; i++) {
            if (this.marks[i].subject === subject) {
                this.marks.splice(i, 1);
            }
        }
    }
}



