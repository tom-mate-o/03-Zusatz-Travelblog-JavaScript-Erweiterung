
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

    var buttonKlasse = document.getElementById("modeButton");

    buttonKlasse.classList.toggle("darkmode");
    buttonKlasse.classList.toggle("lightmode");

    if(buttonKlasse.classList.contains("darkmode")){
        document.querySelector("span").innerHTML= '<i class="fa-solid fa-sun"></i> Light Mode';
    } else if(buttonKlasse.classList.contains("lightmode")) {
        document.querySelector("span").innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
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