var drumsLength = document.querySelectorAll(".drum").length;

for (var i=0; i<drumsLength; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);
}

//checks mouse click
function buttonClick()
{
var button = this.innerHTML;
makeSound(button);
buttonAnimation(button);
}

//checks keyboard click
document.addEventListener("keydown", function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

//function to make the sound
function makeSound(key)
{
  switch (key)
  {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

       case "l":
       var snare = new Audio("sounds/snare.mp3");
       snare.play();
       break;

    default:
    break;
  }
}

//animation function
function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); //adds the class pressed to the onscreen key, check css for pressed
  var delay = 150; //0.15 seconds
  setTimeout(function(){
    activeButton.classList.remove("pressed"); //removes the class pressed after 0.15 seconds
  }, delay);
}
