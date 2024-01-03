// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");
// }

/*
Alternatively, an anonymous function can be used:
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
})
*/


let numberOfDrumButtons = document.querySelectorAll(".drum").length;

function playInstrument(soundFile) {
  new Audio(`./sounds/${soundFile}.mp3`).play();
};

function pickInstrument(button) {
  switch (button) {
    case "w": playInstrument("tom-1");
    break;
    case "a": playInstrument("tom-2");
    break;
    case "s": playInstrument("tom-3");
    break;
    case "d": playInstrument("tom-4");
    break;
    case "j": playInstrument("snare");
    break;
    case "k": playInstrument("kick-bass");
    break;
    case "l": playInstrument("crash");
    break;
    default: console.log(buttonInnerHTML);
  }
};

for (let i = 0; i<numberOfDrumButtons; i++) { 
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    pickInstrument(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);
  });
};

document.addEventListener("keydown", function(event) {
  pickInstrument(event.key)
  buttonAnimation(event.key);
});

document.querySelectorAll(".drum")[i].addEventListener("keyup", function() {
  this.style.color = "red";
});

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => activeButton.classList.remove("pressed"), 100)
};
