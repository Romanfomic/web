document.querySelector("#registration").onclick = function registration(){
    var response = prompt("Желаете пройти регистрацию на сайте?", "");
    var message;
    if (response == "Да") {
        message = "Круто!"
    } else {
        message = "Попробуйте ещё раз"
    }
    alert(message);
}
document.querySelector("#enter").onclick = function enter(){
    var response = prompt("Введите логин", "");
    var message;
    if (response == "Админ") {
        var responseTwo = prompt("Введите пароль", "");
        if(responseTwo == "Я главный") { message = "Здравствуйте!"; }
        else if(responseTwo = null) { message = "Отменено"; }
        else { message = "Неверный пароль"; }
    } else if (response == null ){ message = "Отменено"; }
    else{ message = "Я вас не знаю"; }
    alert(message);
}


function Accumulator(startingValue) {
    this.value = [];
    this.read = function() {
        this.value[this.value.length] = +prompt('Добавить:', 0);
    };
    this.change = function (){
        let tempOne = +prompt('Поменять элемент:', 0);
        let indexOne = this.value.indexOf(tempOne)
        if(indexOne === -1){
            alert('Элемент не найден!');
            return;
        }
        let tempTwo = +prompt('На элемент:', 0);
        let indexTwo = this.value.indexOf(tempTwo)
        if(indexTwo === -1){
            alert('Элемент не найден!');
            return;
        }
        this.value[indexOne] = tempTwo;
        this.value[indexTwo] = tempOne;
    }
    this.delete = function (index){
        if(this.value.length !== 0) {
            this.value.splice(index, 1);
        }
    };
}

var addsArray = document.getElementById('addsText');
let accumulator = new Accumulator(0);
document.querySelector("#send").onclick = function send() {
    accumulator.read();
    let str = ''
    for(i = 0; i < accumulator.value.length; i++){
        str += accumulator.value[i] + '\n'
    }
    addsArray.innerHTML = str;
}
document.querySelector("#change").onclick = function change() {
    accumulator.change();
    let str = ''
    for(i = 0; i < accumulator.value.length; i++){
        str += accumulator.value[i] + '\n'
    }
    addsArray.innerHTML = str;
}
document.querySelector("#delete").onclick = function deleteElement() {
    accumulator.delete(0);
    str = ''
    for(i = 0; i < accumulator.value.length; i++){
        str += accumulator.value[i] + '\n'
    }
    addsArray.innerHTML = str;
}

document.querySelector('#filter').onclick = function filteArray(){
    let newArray = accumulator.value;
    newArray.sort(function(a, b) {
        return a - b;
    });
    let valueOne = +prompt('Введите a:', 0);
    let indexOne = newArray.indexOf(valueOne);
    if(indexOne === -1){
        alert('Значение не найдено!');
        return;
    }
    let valueTwo = +prompt('Введите b:', 0);
    let indexTwo = newArray.indexOf(valueTwo);
    if(indexTwo === -1){
        alert('Значение не найдено!');
        return;
    }
    alert(newArray.slice(indexOne, indexTwo+1))
}

let notificationCount = 0;
var notificationButton = document.getElementById('notification');
function changeNotification(){
    notificationCount ++;
    notificationButton.innerHTML = `Уведомлений: ${notificationCount}`;
}
let timerId = setInterval(() => changeNotification(), 3000)

document.querySelector('#notification').onclick = function notificationFunc(){
    clearInterval(timerId)
    setTimeout(() => timerId = setInterval(() => changeNotification(), 3000), 10000)
}