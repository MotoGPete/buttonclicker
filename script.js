
   
// function onClick() {
//     document.getElementById(‘login’).innerHTML = “logout”;
//     console.log("this message is coming from script.js");
// }

function onClick() {

    var btn = document.getElementById("loginbtn");

    if (btn.value == "login") {
        btn.value = "logout";
        btn.innerHTML = "logout";
    }
    else {
        btn.value = "login";
        btn.innerHTML = "login";
    }

}

function removeDef() {
    var button = document.getElementById("adddefinition");
    button.remove();
}
