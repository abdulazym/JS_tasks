// const phone = document.querySelector('#phone');

// phone.addEventListener('keydown', function(event){
//     let isDigit = false;

//     if (event.key >= 0 || event.key <= 9){
//         isDigit = true;
//     }

//     if (isDigit == true){
//         console.log('number');
//     }else{
//         event.preventDefault();
//     }
// })

// const myForm = document.querySelector("#myForm");
// const sendButton = document.querySelector("#sendButton");

// sendButton.addEventListener('click', function(event){
//     event.preventDefault();

//     console.log(myForm.elements.name.value);
//     console.log(myForm.elements.lastName.value);
//     console.log(myForm.elements.gender.value);
//     if (myForm.elements.auto.checked){
//         console.log('have a car');
//     }
// });

// const myButton = document.querySelector('#myButton');
// const nameInput = document.querySelector('#nameInput');
// const list = document.querySelector('#list');

// myButton.addEventListener('click', function () {
//     const newItem = document.createElement('li');
//     newItem.classList.add('item');
//     newItem.textContent = nameInput.value;
    
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = "remove";

//     deleteButton.addEventListener('click', function() {
//         list.removeChild(newItem);
//     });

//     newItem.appendChild(deleteButton);
//     list.appendChild(newItem);

//     nameInput.value = '';
// });

// try {
//     console.log('до');
//     throw new Error('Mistake');
//     console.log('after');
// } catch (e) {
//     console.log(e.message);
// }
