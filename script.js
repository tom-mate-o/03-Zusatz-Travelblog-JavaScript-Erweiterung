
//alle Elemente mit der Klasse Fragen werden ausgewählt und darüber iteriert
document.querySelectorAll(".frage").forEach(function(frageElement) {
    //fügt dem Frageelemnt einen click Event Listener hinzu
    frageElement.addEventListener("click", function() {
        //CLICK als Console Log um Funktion zu überprüfen
        console.log("CLICK");

        //Variable antwortElement wird definiert.
        //Ihr wird der Wert des Elements zugewiesen das direkt nach frageElement kommt
        var antwortElement=frageElement.nextElementSibling;

        //Toggle zwischen den Klassen antwort und antwortHidden
        antwortElement.classList.toggle("antwort");
        antwortElement.classList.toggle("antwortHidden");
        
    });
});



document.getElementById("modeButton").addEventListener("click", function(){
    console.log("CLICK BUTTON");

    var buttonElement = document.getElementById("modeButton");

    buttonElement.classList.toggle("darkmode");
    buttonElement.classList.toggle("lightmode");

    var spanElement = buttonElement.querySelector("span");

    if (buttonElement.classList.contains("darkmode")) {
        spanElement.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    } else if (buttonElement.classList.contains("lightmode")) {
        spanElement.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
    }
});


function modefunktion(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}





// if (antwortElement.classList.contains("antwortHidden")){
        //     antwortElement.classList.remove("antwortHidden");
        //     antwortElement.classList.add("antwort");
        // } else {
        //     antwortElement.classList.remove("antwort");
        //     antwortElement.classList.add("antwortHidden");
        // }