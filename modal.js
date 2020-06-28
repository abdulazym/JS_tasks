const divModal = document.createElement('div');
    divModal.className = 'modal hide';
    divModal.innerHTML = `<div class="modal__content"> 
    <div class="modal__text">Hello, <strong>world!</strong></div>
    <div class="cross">
        <span></span>
        <span></span>
    </div>
</div>`;

    document.body.append(divModal);//спроси почему не работало, когда добавлял в функцию

const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn__open');
const cross = document.querySelector('.cross');
const modalText = document.querySelector('.modal__text')

//открытие
btnOpen.addEventListener('click', (event)=>{
    event.preventDefault();


    modal.classList.remove('hide');
})

//закрытие
modal.addEventListener('click', (event)=>{
    
    if (event.target.closest('.cross') || event.target.contains(modal)){
        modal.classList.add('hide');
    }//почему без closest не работает?
})

// cross.addEventListener('click', (event)=>{
//     modal.classList.add('hide');
// })