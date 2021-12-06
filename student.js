const student = [


    {
        id: 1,
        roll: 1,
        name: 'Nur Amin',
        age: 24,
        gender: 'Male',

        bn: 74,
        en: 65,
        math: 40,
        s: 65,
        ss: 45,
        rel: 74,


    },
    {
        id: 2,
        roll: 2,
        name: 'Abu sufian',
        age: 20,
        gender: 'Male',

        bn: 65,
        en: 65,
        math: 52,
        s: 90,
        ss: 55,
        rel: 30,


    },
    {
        id: 3,
        roll: 3,
        name: 'Mamun',
        age: 21,
        gender: 'Male',

        bn: 94,
        en: 65,
        math: 40,
        s: 42,
        ss: 65,
        rel: 15,


    }


]



function Result() {


    this.result1 = function (marks) {
        let gpa;
        let grade;

        if (marks >= 0 && marks < 33) {
            gpa = 0,
                grade = 'F'
        } else if (marks >= 33 && marks < 40) {
            gpa = 1,
                grade = 'D'
        } else if (marks >= 40 && marks < 50) {
              gpa = 2,
              grade = 'C'
        }else if(marks >= 50 && marks < 60){
            gpa = 3,
            grade = 'B'
        }else if(marks >= 60 && marks < 70){
            gpa = 3.5,
            grade = 'A'
        }else if (marks >= 70 && marks < 80){
            gpa = 4,
            grade = 'A-'
        }else if(marks >= 80 && marks <= 100){
            gpa = 5,
            grade = 'A+'
        }
        return {
        ami : gpa,
        tumi : grade
        }


    }

this.finalResult = function(bn, en, math, s, ss, rel){
  
    let cgpa;
    let totalGrade;

    let total = this.result1(bn).ami + this.result1(en).ami + this.result1(math).ami + this.result1(s).ami + this.result1(ss).ami + this.result1(rel).ami ;
  
    cgpa = total / 6;

    if(bn < 33 || en < 33 || math < 33 || s < 33 || ss < 33 || rel < 33){
        totalGrade = 'F'
    }else if(cgpa >= 0 && cgpa < 1){
        totalGrade = 'F'
    }else if(cgpa >= 1 && cgpa < 2){
        totalGrade = 'D'
    }else if(cgpa >= 2 && cgpa < 3){
        totalGrade = 'C'
    }else if(cgpa >= 3 && cgpa < 3.5){
        totalGrade = 'B'
    }else if(cgpa >= 3.5 && cgpa < 4){
        totalGrade = 'A'
    }else if(cgpa >= 4 && cgpa < 5){
        totalGrade = 'A-'
    }else if(cgpa == 5){
        totalGrade = 'A+'
    }

    return {
   
        gcgpa : (totalGrade == 'F') ? 'Failed' : cgpa.toFixed(2),
        totalGrades : totalGrade

    }


}


}

let fer = new Result();

student.map((data => {

    console.log(`
Id      :  ${data.id}
Name    :  ${data.name}
Roll    :  ${data.roll}
Age     :  ${data.age}
Gender  :  ${data.gender}

------------------------------------------------------------------
Subject       mark                      gpa                            grade
Bangla      : ${data.bn}           ${fer.result1(data.bn).ami}       ${fer.result1(data.bn).tumi}
English     : ${data.en}           ${fer.result1(data.en).ami}       ${fer.result1(data.en).tumi}
Math        : ${data.math}         ${fer.result1(data.math).ami}     ${fer.result1(data.math).tumi}
Science     : ${data.s}            ${fer.result1(data.s).ami}        ${fer.result1(data.s).tumi}
S-Science   : ${data.ss}           ${fer.result1(data.ss).ami}       ${fer.result1(data.ss).tumi}
Religion    : ${data.rel}          ${fer.result1(data.rel).ami}      ${fer.result1(data.rel).tumi}
-----------------------------------------------------------------------------------------------

Final Cgpa =    ${fer.finalResult(data.bn, data.en, data.math, data.s, data.ss,data.rel).gcgpa}                                             Final Grade = ${fer.finalResult(data.bn, data.en, data.math, data.s, data.ss,data.rel).totalGrades}

`)

}))