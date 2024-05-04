const fname = document.getElementById('name');
const  age = document.getElementById('age');
const hobby = document.getElementById('hobby');

const nameInput = window.prompt('What is your name?');
const ageInput = window.prompt('What is your age?');
const hobbyInput = window.prompt('Enter your hobbies');

const hobbyInputArray = hobbyInput.split(", ");
const  finalArray = [];
hobbyInputArray.forEach((eachElement) =>{
    finalArray.push(`<span>${eachElement}</span>`);
});

fname.innerHTML = nameInput;
age.innerHTML = ageInput;
hobby.innerHTML = finalArray.join(", ");
