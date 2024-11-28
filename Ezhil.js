class Student{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class Bootcamp{
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister){
        if(!(studentToRegister.name) || !(studentToRegister.email)){
            console.log("Invalid name or email");
            return false; 
        }

        for(const stu of this.students){
            console.log("insdie for loop", stu); 
            if(stu.email === studentToRegister.email){
                console.log(stu); 
                console.log("This email is already registered");
                return false;
            }

        this.students.push(studentToRegister);
        console.log(Registering ${studentToRegister.name} to the${this.name} bootcamp);
        return true; 
        }
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
};
runTest(reactBootcamp, testStudent);