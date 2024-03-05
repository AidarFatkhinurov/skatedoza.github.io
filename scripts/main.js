/*function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
  }
*/

/*
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };
*/

//Добавление смены изображения
var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/iconskatedoza.jpg") {
        myImage.setAttribute("src", "images/iconTest.jpg");
    } else {
        myImage.setAttribute("src", "images/iconskatedoza.jpg");
    }
};

//Добавление персонального приветственного сообщения

var myButton = document.querySelector("Button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Skateboarding is the best sport, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Skateboarding is the best sport, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}