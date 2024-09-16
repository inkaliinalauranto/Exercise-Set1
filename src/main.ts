import './style.css'
import { paragraphContainer, checkbox, label } from './fetch_and_dom_apis.ts'
import { h1, h3, paragraph } from './dom_utils.ts'
import './html_dom_api.ts'
import './file_api.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

/* Määritellään eri HTML-elementtejä, jotka lisätään myöhemmin diviin, jonka 
id on app.*/
const mainTitle: HTMLElement = h1("Tehtäväsarja 1 - neljä verkkoselaimen eri rajapintaa")
const exercise1Title: HTMLElement = h3("1. Otsikoiden haku kolmannen osapuolen API:sta fetch-rajapintaa hyödyntämällä")
const exercise1Details: HTMLParagraphElement = paragraph("Klikkaa kohdan 2 checkboxia.")
const exercise2Title: HTMLElement = h3("2. AbortControllerin käyttö useissa samoissa fetch-pyynnöissä")
const exercise2Details: HTMLParagraphElement = paragraph("Avaa console kehittäjän työkaluista ja vaihda checkboxin arvo useamman kerran todeksi. Otsikkodatan haku perutaan, jos data on jo haettu onnistuneesti.")

// Lisätään app-id:llä merkittyyn diviin yllä määritetyt HTML-elementit: 
app.append(mainTitle, exercise1Title, exercise1Details, paragraphContainer, exercise2Title, exercise2Details, checkbox, label)
