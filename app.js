





let amin = '[{"name":"Nur Amin","roll":20,"gender":"Male","marks":[{"bn":40,"en":60,"math":45,"s":65,"ss":74,"rel":65}]},{"name":"Humayun Kabir","roll":34,"gender":"Male","marks":[{"bn":44,"en":73,"math":45,"s":95,"ss":45,"rel":45}]},{"name":"abu Sufian","roll":24,"gender":"Male","marks":[{"bn":45,"en":47,"math":51,"s":62,"ss":54,"rel":61}]},{"name":"Sabbir Rahman","roll":32,"gender":"Male","marks":[{"bn":75,"en":63,"math":54,"s":69,"ss":77,"rel":36}]},{"name":"Shahriar Somrat","roll":19,"gender":"Male","marks":[{"bn":38,"en":65,"math":51,"s":56,"ss":72,"rel":52}]},{"name":"Abu Achem","roll":31,"gender":"Male","marks":[{"bn":51,"en":95,"math":54,"s":69,"ss":85,"rel":32}]},{"name":"Mamun Islam","roll":32,"gender":"Male","marks":[{"bn":49,"en":66,"math":45,"s":45,"ss":71,"rel":62}]},{"name":"Abu Raihan","roll":23,"gender":"Male","marks":[{"bn":41,"en":63,"math":51,"s":60,"ss":45,"rel":34}]},{"name":"Sumaya tasneem","roll":29,"gender":"Female","marks":[{"bn":43,"en":64,"math":65,"s":54,"ss":47,"rel":40}]},{"name":"Abu Sayeed","roll":25,"gender":"Male","marks":[{"bn":50,"en":66,"math":55,"s":95,"ss":74,"rel":35}]}]';


let arr = JSON.parse(amin);
// console.log(arr);
localStorage.setItem('Student information', amin);


let amin1 = '[{"name":"Shahriar Somrat","rel":"Friends","phone":"0178546532","location":"Bogura"},{"name":"Abu Achem","rel":"Friends","phone":"0113252464","location":"Bogura"},{"name":"Nur Amin","rel":"Friends","phone":"01303292586","location":"Bogura"},{"name":"Sabbir Rahman","rel":"Friends","phone":"017875463","location":"Chittagong"},{"name":"Sumaya Tasneem","rel":"Friends","phone":"0170011258","location":"Bogura"},{"name":"Abu Raihan","rel":"Friends","phone":"0125488654","location":"Netrokona"},{"name":"Humayun Kabir","rel":"Friends","phone":"011524876","location":"Sylhet"},{"name":"Mamun Islam","rel":"Friends","phone":"0178543236","location":"Rangpur"},{"name":"Abu Sufian","rel":"Friends","phone":"017526485","location":"Dhaka"},{"name":"Abu Sayeed","rel":"Friends","phone":"+99-0214587","location":"Cumilla"}]';


let arr1 = JSON.parse(amin1);
// console.log(arr1);
localStorage.setItem('family phonebook', amin1);

let amin2 = '[{"id":1,"name":"Nur Amin","age":32,"skill":"MERN Stack","location":"Bogura"},{"id":1,"name":"Shariar Somarat","age":32,"skill":"IOS","location":"Bogura"},{"id":3,"name":"Sabbir Rahman","age":32,"skill":"Linux","location":"Rangpur"},{"id":4,"name":"Sumaya Tasneem","age":42,"skill":"Node.js","location":"Chuadanga"},{"id":5,"name":"Humayun Kabir","age":32,"skill":"mongoDB","location":"Tangail"},{"id":6,"name":"Abu Sayeed","age":29,"skill":"React.js","location":"Cumilla"},{"id":7,"name":"Abu Achem","age":37,"skill":"JavaScript","location":"Dhaka"},{"id":8,"name":"Abu Raihan","age":34,"skill":"Django","location":"Sherpur"},{"id":9,"name":"Mamun Islam","age":31,"skill":"Java","location":"Rankgpur"},{"id":10,"name":"Abu Sufian","age":35,"skill":"Python","location":"Cumilla"}]';

let arr2 = JSON.parse(amin2);

// console.log(arr2);

localStorage.setItem('devs information', amin2);


























































// console.log(arr[0]["marks"])

// function Result(){
//     let gpa;
//     let cgpa;

//     this.result = (marks) =>{

//     if(marks >=0 && marks < 33 ){
//      gpa = 0;
//      grade = 'F'
//      }else if(marks >= 33 && marks < 40){
//          gpa = 1;
//          grade = 'D'
//      }else if(marks >= 40 && marks < 50){
//         gpa = 2;
//         grade = 'C'
//     }else if(marks >= 50 && marks < 60){
//         gpa = 3;
//         grade = 'B'
//     }else if(marks >=60 && marks < 70){
//         gpa = 3.5;
//         grade = 'A-'
//     }else if(marks >= 70 && marks < 80){
//         gpa = 4;
//         grade = 'A'
//     }else if(marks >= 80 && marks < 100){
//         gpa = 5;
//         grade = 'A+'
//     }else {
//        gpa = 'Invalid'
//        grade = 'Invalid'
//     }
//     return {
//         gpa1   : gpa,
//         grade1 : grade
//     }

// }

// }





