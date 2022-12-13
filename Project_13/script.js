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


let footerLink = document.querySelector(".footerOtherDescription")
footerLink.onclick = function(event) {
    function handleLink() {
        let isLeaving = confirm(`Покинуть страницу?`);
        if (!isLeaving) return false;
    }
    let target = event.target.closest('a');
    if (target && footerLink.contains(target)) {
        return handleLink();
    }
};

let thumbs = document.querySelector("#thumbs")
let largeImg = document.querySelector("#largeImg")
thumbs.onclick = function(event) {
    let thumbnail = event.target.closest('a');
    if (!thumbnail) return;
    showThumbnail(thumbnail.href);
    event.preventDefault();
}

function showThumbnail(href) {
    largeImg.src = href;
}

let ul = document.querySelector("#ul");
ul.onclick = function(event) {
    if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
    } else {
        singleSelect(event.target);
    }

}
ul.onmousedown = function() {
    return false;
}
function toggleSelect(li) {
    li.classList.toggle('selected');
}
function singleSelect(li) {
    let selected = ul.querySelectorAll('.selected');
    for(let elem of selected) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}

let slider = document.querySelector("#slider");
let thumb = document.querySelector(".thumb");
thumb.onmousedown = function(event) {
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
}

let rule = document.querySelector("#rule")
rule.onclick = function() {
    let start = Date.now();
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        rule.style.left = timePassed / 5 + 'px';
        if (timePassed > 2000) clearInterval(timer);
    }, 20);
}


//----------
document.querySelector("#mainButton").onclick = function animateButton(){
    let mainText = document.querySelector("#mainText")
    animateText(mainText)
}
function animateText(textArea) {
    let text = textArea.value;
    let to = text.length, from = 0;
    animate({
        duration: 5000,
        timing: bounce,
        draw: function(progress) {
            let result = (to - from) * progress + from;
            textArea.value = text.slice(0, Math.ceil(result))
        }
    });
}
function bounce(timeFraction) {
    for (let a = 0, b = 1; ; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}
function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;
        var progress = options.timing(timeFraction)
        options.draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
//----------

let currentDroppable = null;
let carItems = document.querySelector("#carItems")

carItems.onmousedown = function(event) {
    let carItem = event.target.closest('li');
    let shiftX = event.clientX - carItem.getBoundingClientRect().left;
    let shiftY = event.clientY - carItem.getBoundingClientRect().top;
    carItem.style.position = 'absolute';
    carItem.style.zIndex = 1;
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
        carItem.style.left = pageX - shiftX + 'px';
        carItem.style.top = pageY - shiftY + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        carItem.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        carItem.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                if(!carItem)
                    return;
                enterDroppable(carItem);
            }
        }
    }
    document.addEventListener('mousemove', onMouseMove);
    carItem.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        carItem.onmouseup = null;
    };
};
let addsSum = document.querySelector(".addsSum");
let priceSum = 0;
function enterDroppable(carItem) {
    carItem.remove();
    let price = Number(carItem.querySelector(".price").innerHTML);
    priceSum += price;
    addsSum.innerHTML = `Сумма: ${priceSum}`;
    price = 0;
}
carItems.ondragstart = function() {
    return false;
};