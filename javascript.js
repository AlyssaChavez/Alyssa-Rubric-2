// JavaScript Document

function myFunction() { "use strict";
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person === null || person === "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("name").innerHTML = txt;
					  }

					 
					 function myFruit() { "use strict";
    var text;
    var fruits = document.getElementById("myInput").value;

    switch(fruits) {
        case "Banana":
            text = "Banana is good!";
        break;
        case "Orange":
        text = "I am not a fan of orange.";
        break;
        case "Apple":
        text = "How you like them apples?";
        break;
        default:
        text = "I have never heard of that fruit...";
    }
    document.getElementById("fruit").innerHTML = text;
					 }