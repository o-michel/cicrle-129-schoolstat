import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 

 // ======= INITIALIZING THE VARIABLES ========= //
let Instructors = document.getElementById('Instructors');
let ascButton = document.getElementById('asc');
let descButton = document.getElementById('desc');

let programTrack = document.getElementById('programTrack');
let ascProgramButton = document.getElementById('ascProgram');
let descProgramButton = document.getElementById('descProgram');

let gender = document.getElementById('gender');
let ascGenderButton = document.getElementById('ascGender');
let descGenderButton = document.getElementById('descGender');

let aggregate = document.getElementById('Aggregate');
let ascAgeButton = document.getElementById('ascAge');
let descAgeButton = document.getElementById('descAge');


 // ======= DATA FROM THE HTML PAGE ========= //
let schoolData = [

    {
        instructor: "Cain Marsh",
        noOfCourse: 4
    },

    {
        instructor: "Nayda Hutchinson",
        noOfCourse: 3
    },

    {
        instructor: "Chastity Cote",
        noOfCourse: 5
    },

    {
        instructor: "Fallon Cantu",
        noOfCourse: 2
    },

    {
        instructor: "Orli French",
        noOfCourse: 1
    }

];

let studentsPerTrack = [

    {
        programTrack: "Frontend Development",
        noOfStudent: 420
    },

    {
        programTrack: "Backend Development",
        noOfStudent: 340
    },

    {
        programTrack: "Cloud Applications",
        noOfStudent: 150
    }

]

let genderDis = [

    {
        gender: "Female",
        noOfPerson: 387 
    },
    {
        gender: "Male",
        noOfPerson: 423 
    }

]

let ageAggregate = [

    {
        aggregate: "Minimum",
        age: 18
    },
    {
        aggregate: "Maximum",
        age: 38
    },
    {
        aggregate: "Average",
        age: 29
    }

]


 // ======= ASC SECTION ========= //

// console.log(schoolData) ~ Instructors per cources
ascButton.addEventListener("click", ()=>{
   let sortedSchoolData = schoolData.sort((a,b) => (b.noOfCourse - a.noOfCourse ));

   Instructors.innerHTML = `<tr>
<td>${sortedSchoolData[0].instructor}</td>
<td>${sortedSchoolData[0].noOfCourse}</td>
</tr>
<tr>
<td>${sortedSchoolData[1].instructor}</td>
<td>${sortedSchoolData[1].noOfCourse}</td>
</tr>
<tr>
<td>${sortedSchoolData[2].instructor}</td>
<td>${sortedSchoolData[2].noOfCourse}</td>
</tr>
<tr>
<td>${sortedSchoolData[3].instructor}</td>
<td>${sortedSchoolData[3].noOfCourse}</td>
</tr>
<tr>
<td>${sortedSchoolData[4].instructor}</td>
<td>${sortedSchoolData[4].noOfCourse}</td>
</tr>`


})
// Student per track
ascProgramButton.addEventListener("click", ()=>{
   let sortedStudentsPerTrack = studentsPerTrack.sort((a,b) => (b.noOfStudent - a.noOfStudent ));

   programTrack.innerHTML = ` <tr>
   <td>${sortedStudentsPerTrack[0].programTrack}</td>
   <td>${sortedStudentsPerTrack[0].noOfStudent}</td>
</tr>
<tr>
   <td>${sortedStudentsPerTrack[1].programTrack}</td>
   <td>${sortedStudentsPerTrack[1].noOfStudent}</td>
</tr>
<tr>
   <td>${sortedStudentsPerTrack[2].programTrack}</td>
   <td>${sortedStudentsPerTrack[2].noOfStudent}</td>
</tr>`


})


// (Gender distribution)
ascGenderButton.addEventListener("click", ()=>{
   let sortedGenderDis = genderDis.sort((a,b) => (b.noOfPerson - a.noOfPerson ));

   gender.innerHTML = `  <tr>
   <td>${sortedGenderDis[0].gender} </td>
   <td>${sortedGenderDis[0].noOfPerson}</td>
</tr>
<tr>
   <td>${sortedGenderDis[1].gender}</td>
   <td>${sortedGenderDis[1].noOfPerson}</td>
</tr>`


})

// (age aggrigate)
ascAgeButton.addEventListener("click", ()=>{
   let sortedAgeAggregate = ageAggregate.sort((a,b) => (b.age - a.age ));

   aggregate.innerHTML = ` <tr>
   <td>${sortedAgeAggregate[0].aggregate}</td>
   <td>${sortedAgeAggregate[0].age}</td>
</tr>
<tr>
   <td>${sortedAgeAggregate[1].aggregate}</td>
   <td>${sortedAgeAggregate[1].age}</td>
</tr>
<tr>
   <td>${sortedAgeAggregate[2].aggregate}</td>
   <td>${sortedAgeAggregate[2].age}</td>
</tr>`


})






 // ======= DESC SECTION ============== //
 


// Instructors
descButton.addEventListener("click", ()=>{

    let sortedSchoolData = schoolData.sort((a,b) => (a.noOfCourse - b.noOfCourse));

    console.log(sortedSchoolData);
    
    Instructors.innerHTML = `<tr>
    <td>${sortedSchoolData[0].instructor}</td>
    <td>${sortedSchoolData[0].noOfCourse}</td>
    </tr>
    <tr>
    <td>${sortedSchoolData[1].instructor}</td>
    <td>${sortedSchoolData[1].noOfCourse}</td>
    </tr>
    <tr>
    <td>${sortedSchoolData[2].instructor}</td>
    <td>${sortedSchoolData[2].noOfCourse}</td>
    </tr>
    <tr>
    <td>${sortedSchoolData[3].instructor}</td>
    <td>${sortedSchoolData[3].noOfCourse}</td>
    </tr>
    <tr>
    <td>${sortedSchoolData[4].instructor}</td>
    <td>${sortedSchoolData[4].noOfCourse}</td>
    </tr>`
    
})

// Student per track 
descProgramButton.addEventListener("click", ()=>{

    let sortedStudentsPerTrack = studentsPerTrack.sort((a,b) => (a.noOfStudent - b.noOfStudent));

    
    programTrack.innerHTML = ` <tr>
    <td>${sortedStudentsPerTrack[0].programTrack}</td>
    <td>${sortedStudentsPerTrack[0].noOfStudent}</td>
 </tr>
 <tr>
    <td>${sortedStudentsPerTrack[1].programTrack}</td>
    <td>${sortedStudentsPerTrack[1].noOfStudent}</td>
 </tr>
 <tr>
    <td>${sortedStudentsPerTrack[2].programTrack}</td>
    <td>${sortedStudentsPerTrack[2].noOfStudent}</td>
 </tr>`
 
})

// Gender distribution 
descGenderButton.addEventListener("click", ()=>{

    let sortedGenderDis = genderDis.sort((a,b) => (a.noOfPerson - b.noOfPerson));
    
    gender.innerHTML = `<tr>
    <td>${sortedGenderDis[0].gender} </td>
    <td>${sortedGenderDis[0].noOfPerson}</td>
 </tr>
 <tr>
    <td>${sortedGenderDis[1].gender}</td>
    <td>${sortedGenderDis[1].noOfPerson}</td>
 </tr>`
 
    
})

// Aggrigate
descAgeButton.addEventListener("click", ()=>{
    let sortedAgeAggregate = ageAggregate.sort((a,b) => ( a.age - b.age ));
 
    aggregate.innerHTML = ` <tr>
    <td>${sortedAgeAggregate[0].aggregate}</td>
    <td>${sortedAgeAggregate[0].age}</td>
 </tr>
 <tr>
    <td>${sortedAgeAggregate[1].aggregate}</td>
    <td>${sortedAgeAggregate[1].age}</td>
 </tr>
 <tr>
    <td>${sortedAgeAggregate[2].aggregate}</td>
    <td>${sortedAgeAggregate[2].age}</td>
 </tr>`
 
 
 })