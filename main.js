
let btn = document.getElementById("myBtn");
let user = document.getElementById("user");
let chilo =  document.getElementById("km");
let age =  document.getElementById("eta");

btn.addEventListener("click", function() {
    alert("L'utente ha scritto: " + user.value)
    alert("L'utente ha scritto: " + chilo.value)
    alert("L'utente ha scelto: " + age.value)
});

console.log("user", user);