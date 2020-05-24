'use strict'


// Task 1 - done!


function Student(name, email) {
    const _name = name;
    const _email = email;
    const array = []
    this.getName = function () {
        return _name
    }
    this.getEmail = function () {
        return _email
    }
    this.addHomeworkResult = function (topic, success) {
        const findTopic = array.some((item) =>
            item.topic === topic
        );
        if (findTopic) {
            array.forEach((item, index) => {
                if (item.topic === topic) {
                    array[index].results.push([{
                        name: _name,
                        email: _email
                    }]);
                }
            });
            return;
        } else {
            array.push({
                topic,
                success,
                results: [{
                    name: _name,
                    email: _email
                }]
            });
        }
    };

    this.getHomeworkResults = function () {
        console.log(array)
    }
}



const student = new Student('John', 'john@gmail.com')

student.getName()
student.getEmail()

student.addHomeworkResult('HTML', true)
student.getHomeworkResults()

const teacher = new Student('Leila', 'leila@gmail.com')

teacher.getName()
teacher.getEmail()

teacher.addHomeworkResult('CSS', true)
teacher.getHomeworkResults()



//////////////////////////////////////////////////////////////


// Task 2 - it is difficult to understand explanation of technical requirenment


const list = [{
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        name: 'Jane',
        email: 'jane@gmail.com'
    },
    {
        name: 'Jack',
        email: 'jack@gmail.com'
    },
    {
        name: 'Mary',
        email: 'mary@gmail.com'
    }
]



function FrontendLab(students, failedLimit) {

    this.failedHomeworksLimit = failedLimit
    this.studentsList = students

    this.printStudentsList = function () {
        console.log(this.studentsList)
    }
    this.addHomeworkResults = function (homeworkResult) {
        return homeworkResult
    }
    this.printStudentsEligibleForTest = function () {
        console.log(this.studentsList)
    }
}

const lab = new FrontendLab(list, 1)