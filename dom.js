const blocks = document.querySelector('.blocks');
const blocksCount = blocks.children.length-3;
let currentIndex = 0;
const arrowRight = document.querySelector('.arrow__right')
const arrowLeft = document.querySelector('.arrow__left')

arrowRight.addEventListener('click', function(event){
    event.preventDefault();
    
    if (currentIndex < blocksCount){
        currentIndex += 1;
        blocks.style.right = (currentIndex*100) + "px";
    }
})

arrowLeft.addEventListener('click', function(event){
    event.preventDefault();
    
    if (currentIndex > 0){
        currentIndex = currentIndex - 1;
        blocks.style.right = (currentIndex*100) + "px";
    }
})


//blockFirst.classList.remove('block__visible');