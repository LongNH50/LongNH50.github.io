var interval
var currentAnimation
var speed = 250;
window.onload = pageload;

function loadElement() {
    var screen = document.getElementById("text-area");
    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var animationField = document.getElementById("animation");
    var sizeField = document.getElementById("fontsize");
    var turbo = document.getElementById("turbo");
}

function pageload() {
    // loadElement;
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = stop;
    document.getElementById("animation").onchange = changeAnimation;
    document.getElementById("fontsize").onchange = changeSize;
    var turbo = document.getElementById("turbo");
    turbo.checked = false;
    turbo.onclick = changeSpeed;
}


function start() {
    // loadElement;
    // alert("hi")
    var screen = document.getElementById("text-area");
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    screen.value = ANIMATIONS[document.getElementById("animation").value];
    var splitAnimation = screen.value.split("=====\n");
    currentAnimation = splitAnimation;
    interval = setInterval(function () {
        displayFrame(currentAnimation)
    }
        , speed);

}

function displayFrame(animation) {
    var screen = document.getElementById("text-area");
    var currentFrame = animation.shift();
    screen.value = currentFrame;
    animation.push(currentFrame);
    currentAnimation = animation;
}

function stop() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
    var turbo = document.getElementById("turbo");
    turbo.checked = false;
    clearInterval(interval);

}

function changeAnimation() {
    var animationField = document.getElementById("animation");
    var screen = document.getElementById("text-area");
    screen.value = ANIMATIONS[animationField.value];
}

function changeSize() {
    var sizeField = document.getElementById("fontsize");
    var bodyTag = document.getElementById("text-area");
    if (sizeField.value == 'Tiny')
        bodyTag.style.fontSize = "7pt";
    else if (sizeField.value == "Small")
        bodyTag.style.fontSize = "10pt";
    else if (sizeField.value == "Medium")
        bodyTag.style.fontSize = "12pt";
    else if (sizeField.value == "Large")
        bodyTag.style.fontSize = "16pt";
    else if (sizeField.value == "Extra Large")
        bodyTag.style.fontSize = "24pt";
    else if (sizeField.value == "XXL")
        bodyTag.style.fontSize = "32pt";


}

function changeSpeed() {
    // var splitAnimation = screen.value.split("=====\n");
    // currentAnimation = splitAnimation;
    clearInterval(interval);
    var turbo = document.getElementById("turbo")
    if (turbo.checked)
        interval = setInterval(function () {
            displayFrame(currentAnimation)
        }
            , 50);
    else {
        interval = setInterval(function () {
            displayFrame(currentAnimation)
        }
            , speed);
    }
}