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

let likeBtn = document.querySelector("#like");
var flag = true;
likeBtn.onclick = function like(){
    if(flag){
        likeBtn.style.backgroundColor = 'coral';
        likeBtn.style.color = 'white';
        flag = false;
    }
    else{
        likeBtn.style.backgroundColor = 'white';
        likeBtn.style.color = 'black';
        flag = true;
    }
}


var flagTwo = false;
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    mouse = { x:0, y:0 },
    draw = false
;
context.strokeStyle = "white";
document.querySelector("#paint").onclick = function(e){
    if(!flagTwo){
        let ClientRect = this.getBoundingClientRect();
        mouse.x = e.clientX - ClientRect.left;
        mouse.y = e.clientY - ClientRect.top;
        draw = true;
        context.beginPath();
        context.moveTo(mouse.x, mouse.y);
        flagTwo = true;
    }
    else{
        flagTwo = false;
    }
};
canvas.addEventListener("mousemove", function(e){
    if(flagTwo){
        if(draw === true){
            let ClientRect = this.getBoundingClientRect();

            mouse.x = e.clientX - ClientRect.left;
            mouse.y = e.clientY - ClientRect.top;

            context.lineTo(mouse.x, mouse.y);
            context.stroke();
        }
    }
});
