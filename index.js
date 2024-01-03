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


let numberOfDrumButtons = $(".drum").length;

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
    default: console.log(button);
  }
};

for (let i = 0; i<numberOfDrumButtons; i++) { 
  $(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    pickInstrument(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);
  });
};

$("keydown", function(event) {
  pickInstrument(event.key)
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  let activeButton = $("." + currentKey);
  activeButton.addClass("pressed");
  setTimeout(() => activeButton.removeClass("pressed"), 100)
};
