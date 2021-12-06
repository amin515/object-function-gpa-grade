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
        rel: 60,


    }


]


function Result() {

    this.result1 = function (mark) {

        let gpa;
        let grade;

        if (mark >= 0 && mark < 33) {
            gpa = 0,
                grade = 'F'
        } else if (mark >= 33 && mark < 40) {
            gpa = 1,
                grade = 'D'
        } else if (mark >= 40 && mark < 50) {
            gpa = 2,
                grade = 'C'
        } else if (mark >= 50 && mark < 60) {
            gpa = 3,
                grade = 'B'
        } else if (mark >= 60 && mark < 70) {
            gpa = 3.5,
                grade = 'A'
        } else if (mark >= 70 && mark < 80) {
            gpa = 4,
                grade = 'A-'
        } else if (mark >= 80 && mark <= 100) {
            gpa = 5,
                grade = 'A+'
        } else {
            gpa = 'Invalid'
            grade = 'Invalid'
        }

        return {
        
            amadul : gpa,
            mamun  : grade

        }
    }


    this.finalResult = function(bn, en, math, s, ss, rel){

        let cgpa;
        let finalGrade;

       let total = this.result1(bn).amadul + this.result1(en).amadul + this.result1(math).amadul + this.result1(s).amadul + this.result1(ss).amadul + this.result1(rel).amadul

       cgpa = total / 6;
         
       if(bn < 33 || en < 33 || math < 33 || s < 33 || ss < 33 || rel < 33){
        finalGrade = 'F'
       }else if( cgpa >= 0 && cgpa < 1 ){
           finalGrade = 'F'
       }else if( cgpa >= 1 && cgpa < 2 ){
        finalGrade = 'D'
       }else if( cgpa >= 2 && cgpa < 3 ){
        finalGrade = 'C'
       }else if( cgpa >= 3 && cgpa < 3.5 ){
        finalGrade = 'B'
       }else if( cgpa >= 3.5 && cgpa < 4 ){
        finalGrade = 'A'
       }else if( cgpa >= 4 && cgpa < 5 ){
        finalGrade = 'A-'
       }else if( cgpa == 5){
        finalGrade = 'A+'
       }

       return {
        
        finalCgpa : (finalGrade == 'F')  ? 'Failed' : cgpa.toFixed(2),
        fgrade    : finalGrade
        


       }


    }


}


let amin = new Result();


student.map((data => {

    console.log(`
    
    Id      : ${data.id}
    Roll    : ${data.roll}
    Name    : ${data.name}
    Age     : ${data.age}
    Gender  : ${data.gender}
===========================================================================
    Subject        Mark            Gpa       Grade
    Bangla       : ${data.bn}               ${amin.result1(data.bn).amadul}         ${amin.result1(data.bn).mamun}
    English      : ${data.en}               ${amin.result1(data.en).amadul}       ${amin.result1(data.en).mamun}
    Math         : ${data.math}               ${amin.result1(data.math).amadul}         ${amin.result1(data.math).mamun}
    Science      : ${data.s}               ${amin.result1(data.s).amadul}         ${amin.result1(data.s).mamun}
    S-Science    : ${data.ss}               ${amin.result1(data.ss).amadul}       ${amin.result1(data.ss).mamun}
    Religion     : ${data.rel}               ${amin.result1(data.rel).amadul}         ${amin.result1(data.rel).mamun}
    
===============================================================================================
    Final cgpa =   ${amin.finalResult(data.bn, data.en, data.math, data.s, data.ss, data.rel).finalCgpa}                           Final Result = ${amin.finalResult(data.bn, data.en, data.math, data.s, data.ss, data.rel).fgrade}
    
    `)





}))