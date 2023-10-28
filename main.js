
let btn = document.getElementById("myBtn");
let user = document.getElementById("user");
let chilo =  document.getElementById("km");
let age =  document.getElementById("eta");
let costokm = 0.21
let prezzo;
let minorenne = document.getElementById("v2");
let over65 = document.getElementById("v3");

btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + user.value)
    console.log("L'utente ha scritto: " + chilo.value)
    console.log("L'utente ha scritto: " + age);
    if (age = minorenne) {
        prezzo = chilo * costokm;
        prezzo = prezzo - (20/100 * prezzo);
        document.getElementById("costoBiglietto").innerHTML = "Ridotto del 20%, il prezzo è di " + prezzo;
    } else if (age = over65) {
        prezzo = chilo * costokm;
        prezzo = prezzo - (40/100 * prezzo);
        document.getElementById("costoBiglietto").innerHTML = "Ridotto del 40%, il prezzo è di " + prezzo;
    } else {
        prezzo = chilo * costokm;
        document.getElementById("costoBiglietto").innerHTML = "Prezzo intero, il costo del biglietto è di " + prezzo;
    }
    console.log("il prezzo è di: " + prezzo);
});

