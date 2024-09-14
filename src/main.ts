import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// Fetch-selainrajapinnan käyttö:


const button = document.createElement("BUTTON") as HTMLButtonElement

button.innerText = "Nappi"

// Lisätään Button-HTML-elementti index.html-tiedoston DIV-elementille, 
// jonka id on app
app.append(button)