
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









// if (antwortElement.classList.contains("antwortHidden")){
        //     antwortElement.classList.remove("antwortHidden");
        //     antwortElement.classList.add("antwort");
        // } else {
        //     antwortElement.classList.remove("antwort");
        //     antwortElement.classList.add("antwortHidden");
        // }