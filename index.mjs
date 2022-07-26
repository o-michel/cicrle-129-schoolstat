import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 

let Instructors = document.getElementById('Instructors');
let ascButton = document.getElementById('asc');
let descButton = document.getElementById('desc');

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

]

// console.log(schoolData)
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
