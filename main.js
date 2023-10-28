
let btn = document.getElementById("myBtn");
let user = document.getElementById("user");
let chilo =  document.getElementById("km");
let age =  document.getElementById("eta");
let costokm = 0.21
let prezzo;
let costofinale
let myName = document.getElementById("myName");
let costoBiglietto = document.getElementById("costoBiglietto");


btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + user.value)
    console.log("L'utente ha scritto: " + chilo.value)
    console.log("L'utente ha scritto: " + age.value);
    if (age.value=="minorenne") {
        prezzo = (parseInt(chilo.value) * costokm)
        costofinale = prezzo - (20/100 *prezzo);
        myName.innerHTML = user.value;
        costoBiglietto.innerHTML = costofinale.toFixed(2) + "€";
    } else if (age.value=="over65") {
        prezzo = (parseInt(chilo.value) * costokm)
        costofinale = prezzo - (40/100 *prezzo);
        myName.innerHTML = user.value;
        costoBiglietto.innerHTML = costofinale.toFixed(2) + "€";
    } else {
        costofinale = (parseInt(chilo.value) * costokm)
        myName.innerHTML = user.value;
        costoBiglietto.innerHTML = costofinale.toFixed(2) + "€";
    }
    console.log("il prezzo è di: " + prezzo);
    console.log("il costofinale è di: " + costofinale);
});