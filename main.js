//Задачи по js / #1 Фильтрация строки

const string = "Привет как дела";

const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

const getVowels = text => {
    let extractedVowels = '';

    for (let i = 0; i < string.length; i++) {
        const currentLetter = string[i];
    
        if (vowels.includes(currentLetter)){
            extractedVowels += currentLetter;
        }
    }

    return extractedVowels;
}// почему не нужно ";"


console.log(getVowels(string));

// var str = 'Получить гласные';
// str = str.replace(/[^аеёиоуыэюя]/ig, '');
// console.log(str);
//аеёиоуыэюя


//#2 Выборка объекта
const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }];

const getWorthyWorkers = workersArr => {
    const worthyWorkers = [];

    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000){
            worthyWorkers.push(currentWorker.name)
        }
    });    

    return worthyWorkers;
    }


console.log(getWorthyWorkers(workers));


    // for (let i = 0; i < workers.length; i++) {
//     if (workers[i].salary > 1000) {
//         console.log(workers[i].name);
//     }
// }


//#3 Анализ строки

const path = "/users/download/index.html"
// 

const isHtml = controller =>{
    const requiredExt = '.html';
    const pathExt = controller.slice(-5);

    return pathExt == requiredExt;
}
 
console.log(isHtml(path));

//Задачи по DOM

