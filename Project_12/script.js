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


document.querySelector("#addsButton").onclick = function addsButton(){
    let unorderedList = document.createElement('ul');
    var adds = document.querySelector(".adds")
    adds.append(unorderedList);
    while (true) {
        let data = prompt("Введите текст для элемента списка", "");
        if (!data) {
            break;
        }
        let listElement = document.createElement('li');
        listElement.textContent = data;
        unorderedList.append(listElement);
    }
}

function showNotification(html) {
    let notification = document.createElement('button');
    notification.className = "notification";
    notification.innerHTML = html;
    document.body.append(notification);
    notification.insertAdjacentHTML("beforeend", '<button class="remove-button">[x]</button>');
    notification.lastChild.onclick = () => notification.remove();
    setTimeout(() => notification.remove(), 1500);
}

let i = 1;
setInterval(() => {
    let strNote = `Уведомление ${i++}`
    showNotification(strNote);
}, 5000);

let ball = document.querySelector("#ball")
let field = document.querySelector("#field")
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

var X = document.getElementById('X');
var Y = document.getElementById('Y');
function pos(e){
    X.value = e.pageX;
    Y.value = e.pageY;
}
addEventListener('click', pos, false);

