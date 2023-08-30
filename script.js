
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

// def. funktion zum setzten des farbmodus im local storage
function setDarkModePreference(darkMode){
    localStorage.setItem("darkMode", darkMode)
    loadDarkModePreferences();
}

// def. funtkion die Farbmodus aus dem local storage lädt
function loadDarkModePreferences(){
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true"){ // wenn true, bekommt der body die css klasse dark mode
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode"); // wenn nicht, wird sie entfernt
    }
}


// ladet den gespeicherten Farbmodus beim Laden der Seite
document.addEventListener("DOMContentLoaded", function(){
    loadDarkModePreferences();
});

document.getElementById("modeButton").addEventListener("click", function(){
    console.log("CLICK BUTTON");

    var buttonElement = document.getElementById("modeButton");

    

    var spanElement = buttonElement.querySelector("span");

    if (buttonElement.classList.contains("darkmode")) {
        spanElement.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
        setDarkModePreference(true); // darkMode im Local storage auf true
    } else if (buttonElement.classList.contains("lightmode")) {
        spanElement.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
        setDarkModePreference(false); //darkMode im Local storage auf false
    }

    buttonElement.classList.toggle("lightmode");
    buttonElement.classList.toggle("darkmode");
    
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