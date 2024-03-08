// alert('tes')
function handleClick() {
    alert("ini di klik");
}

var drumButtons = document.querySelectorAll(".drum");
console.log(drumButtons);

for (let i = 0; i <drumButtons.length; i++) {
    console.log(drumButtons[i]);
    drumButtons[i].addEventListener("click", function() {
        let btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        
        buttonAnimation(btnInnerHTML);
    });
}

// deteksi keyboard yg ditekan

addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
        break;
        case "a":
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play();
        break;
        case "s":
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play();
        break;
        case "j":
        var audio = new Audio("sounds/snare.mp3")
        audio.play();
        break;
        case "k":
        var audio = new Audio("sounds/crash.mp3")
        audio.play();
        break;
        case "l":
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play();
        break;
    default:
        alert("gak ada buttonnya")
    }
}

function buttonAnimation(key){
    let activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");
    activeBtn.classList.add("white")

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
        activeBtn.classList.remove("white");
    }, 1000);
}