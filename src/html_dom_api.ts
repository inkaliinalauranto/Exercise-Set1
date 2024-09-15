// 3/4: HTML DOM API:a

/* Haetaan ensin lomake-, nimikenttä-, sähköpostikenttä- ja nappielementit 
id:n perusteella. Merkataan, ettei niiden arvot ole nulleja, koska on 
varmassa tiedossa, että elementit näillä tunnuksilla on olemassa 
index.html-tiedostossa. Määritellään kullekin elementille tietotyypit 
as-avainsanalla */
const form: HTMLFormElement = document.getElementById("form")! as HTMLFormElement
const nameField: HTMLInputElement = document.getElementById("userName")! as HTMLInputElement;
const emailField: HTMLInputElement = document.getElementById("userEmail")! as HTMLInputElement;
const sendButton: HTMLButtonElement = document.getElementById("sendButton")! as HTMLButtonElement;

/* Toteutetaan lomakkeen toiminnallisuudet mukaillen dokumentaation 
esimerkkiä: 
https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#examples.*/
sendButton.disabled = true;

// Simuloidaan lomakkeen tietojen lähettämistä alert-ikkunalla, johon 
// tuodaan lomakkeella lähetettävät tiedot:
form.addEventListener("submit", () => {
    alert("Lomake lähetetään nimellä " + nameField.value + " ja sähköpostilla " + emailField.value)
})

nameField.addEventListener("input", (event: Event) => {
    // Haetaan ja tyypitetään muuttujaan tapahtuman input-elementti:
    const inputElement: HTMLInputElement = event.target as HTMLInputElement;
    /* Haetaan ja tyypitetään muuttujaan totuusarvo, joka saadaan vertaamalla 
    input-elementissä olevan merkkijonon alkioiden lukumäärää nollaan siten, 
    että merkkijonosta on otettu alusta ja lopusta ylimääräiset välilyönnit 
    pois. Näin nimi ei ole esimerkiksi pelkkä välilyönti. Jos merkkejä on, 
    muuttujaan tallettuu arvo true ja muussa tapauksessa false. */
    const isInputValue: boolean = inputElement.value.trim().length !== 0;
    /* Jos merkkejä on eli isInputValuen arvo on true ja lomakeen nappi on 
    disabloitu, enabloidaan nappi, jotta lähettäminen onnistuu. 
    Vaihtoehtoisesti, jos nimikentässä ei ole kriteerit täyttävää merkkijonoa 
    ja nappi on enabloitu, disabloidaan se. */
    if (isInputValue && sendButton.disabled) {
        sendButton.disabled = false;
    } else if (!isInputValue && !sendButton.disabled) {
        sendButton.disabled = true;
    }
});


