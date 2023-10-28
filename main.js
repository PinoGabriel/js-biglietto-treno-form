
let btn = document.getElementById("myBtn");
let user = document.getElementById("user");
let chilo =  document.getElementById("km");
let age =  document.getElementById("eta");
let costokm = 0.21
let prezzo;


btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + user.value)
    console.log("L'utente ha scritto: " + chilo.value)
    console.log("L'utente ha scritto: " + age.value);
    if (age.value=="2") {
        prezzo = chilo * costokm;
        prezzo = prezzo - (20/100 * prezzo);
        document.getElementById("costoBiglietto").innerHTML = "Ridotto del 20%, il prezzo è di " + prezzo;
    } else if (age.value=="3") {s
        prezzo = chilo * costokm;
        prezzo = prezzo - (40/100 * prezzo);
        document.getElementById("costoBiglietto").innerHTML = "Ridotto del 40%, il prezzo è di " + prezzo.value;
    } else {
        prezzo = chilo * costokm;
        document.getElementById("costoBiglietto").innerHTML = "Prezzo intero, il costo del biglietto è di " + prezzo;
    }
    console.log("il prezzo è di: " + prezzo);
});

