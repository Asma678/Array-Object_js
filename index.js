
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
{name: 'baba', id: 101, marks: 23 },
{name: 'yaga', id: 200, marks: 45 },
{name: 'wick', id: 115, marks: 75 },]

// Q.1: We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

let names = []
for (const student of studentRecords) {
    names.push(student.name.toUpperCase());
}
console.log(names); //[ 'JOHN', 'BABA', 'JOHN', 'WICK' ]


//Q.2:  Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'john', id: 123, marks:98},{name: 'wick', id: 115, marks:75}]

let names2 = studentRecords.filter(stu => stu.marks > 50);
console.log(names2);// [{ name: 'John', id: 123, marks: 98 },{ name: 'Wick', id: 115, marks: 75 }]


//Q.3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let names3 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(names3); //[ { name: 'John', id: 123, marks: 98 } ]

//Q.4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks2 = studentRecords.reduce( ((acc,emp) => acc+emp.marks), 0)
console.log(totalMarks2);//241

//Q.5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let names1 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names1); // [ 'John', 'Wick' ]


//Q.6:  This time we are required to print the sum of marks of the students with id > 120.

let totalMarks = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks); // 143


//Q.7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//                   {name: 'Baba', id: 101, marks : 23 },
//                   {name: 'John', id: 200, marks : 45 },
//                   {name: 'Wick', id: 115, marks : 75 }, ]


let totalMarks1 = studentRecords.map(function(stu){ 
            if(stu.marks < 50){
                stu.marks += 15;}
            return stu;
        }).filter(stu => stu.marks > 50).reduce((acc,curr) => acc+curr.marks, 0);
console.log(totalMarks1); // 233


//Q.8: Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

function Student (fName, class0, rollno) {
    this.fName = fName;
    this.class0 = class0;
    this.rollno = rollno;
}

const studArr = [new Student("John", "sixth", 30), new Student("Baba", "seventh", 29), new Student("Yaga", "sixth", 25), new Student("Wick", "eight", 45), new Student("donal", "two", 78), new Student("henry", "eight", 85)];

console.log(studArr);