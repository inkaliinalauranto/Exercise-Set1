import './style.css'
import { paragraphContainer, checkbox, label } from './fetch_and_dom_apis.ts'
import { h1, h3 } from './dom_utils.ts'
import './html_dom_api.ts'
import './file_api.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

// Määritellään kaksi geneeristä HTML-elementtiä ja yksi HTML-div-elementti, 
// jotka lisätään myöhemmin diviin, jonka id on app.
const mainTitle: HTMLElement = h1("Tehtäväsarja 1 - neljä verkkoselaimen eri rajapintaa")
const exercise1Title: HTMLElement = h3("1. Otsikoiden haku kolmannen osapuolen API:sta fetch-rajapintaa hyödyntämällä")
const exercise2Title: HTMLElement = h3("2. AbortControllerin käyttö useissa samoissa fetch-pyynnöissä")

// Lisätään app-id:llä merkittyyn diviin yllä määritetyt HTML-elementit: 
app.append(mainTitle, exercise1Title, paragraphContainer, exercise2Title, checkbox, label)
