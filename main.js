//Задачи по js / #1 Фильтрация строки

const string = "Привет! Как дела?";
function getVowels(text) {
    return 'иеаеа';
}
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

for (let i = 0; i < workers.length; i++) {
    if (workers[i].salary > 1000) {
        console.log(workers[i].name);
    }
}


//#3 Анализ строки

