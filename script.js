var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower= "abcdefghijklmnopqrstuvwxyz"
var special= "!@#$%^&*()_+";
var number=  "123456789";

//generate random password

function generate () {

    var upperinput= document.getElementById("upper").checked
    var lowerinput= document.getElementById ("lower").checked
    var specialinput= document.getElementsById ("special").checked
    var numberinput= document.getElementById ("number").checked

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    return password;
}