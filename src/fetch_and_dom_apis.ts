import { itemModel } from "./interfaces.ts"
import { div, paragraph } from './dom_utils.ts'


// 1/4 Fetch-selainrajapinnan ja 2/4 DOM-rajapinnan AbortControllerin käyttö.

/* Alustetaan AbortController-tyyppiä oleva muuttuja, johon 
AbortController-instanssi talletetaan myöhemmin:*/
let controller: AbortController;
const url: string = "https://jsonplaceholder.typicode.com/todos"


export async function fetchTodos(): Promise<itemModel[]> {
  /* Ennen fetch-rajapintakutsua asetetaan AbortController-instanssi aiemmin 
  alustettuun muuttujaan */
  controller = new AbortController();
  /* Haetaan AbortControllerista signal-ominaisuus muuttujaan, ja tyypitetään 
  muuttuja signaalin tietotyypin mukaan: */
  const signal: AbortSignal = controller.signal;

  /* Fetch palauttaa promisen, joka riisutaan await-avainsanalla. "Sisällä" 
  oleva vastaus on Response-tietotyyppiä, jollaisen fetch API aina 
  palauttaa. */
  const response: Response = await fetch(url, { signal });
  // Virheenkäsittely:
  if (!response.ok) {
    throw new Error("Request failed with statucode: " + response.status);
  }
  // Muutetaan data JavaScriptiksi json-metodilla erillisessä säikeessä, 
  // minkä vuoksi muuntamisen yhteydessä on käytettävä awaitia. Funktio 
  // palauttaa Promisen arraysta, joka pitää sisällään itemModel-muotoisia 
  // objekteja.
  const data: Promise<itemModel[]> = await response.json();
  return data;
}


/* Asetetaan myöhemmin tämän divin sisään fetchTodos-funktiolla haettujen 
tehtäväobjektien otsikot */
export const paragraphContainer: HTMLDivElement = div("container1");


/* Muuttujaan fetchTitles määritellään asynkroninen anonyymi nuolifunktio, 
jossa mock-dataa haetaan kolmannen osapuolen rajapinnasta. Lopuksi osa 
alkuperäisessä datassa olevien objektien title-avaimien arvoista lisätään 
yhteen div-elementtiin paragraph-elementeiksi muutettuina. */
///// Tarvitseekohan tätä funktiota tyypittää?
export const fetchTitles = async () => {
  const data: itemModel[] = await fetchTodos();
  // Kerätään titles-merkkijono-arrayhyn data-arrayn objekteista 
  // title-avainten arvot:
  const titles: string[] = data.map((todo: itemModel) => {
    return todo.title;
  })

  const uniqueTitles: string[] = [];
  // Karsitaan pois samannimiset otsikot:
  titles.forEach((title) => {
    if (!uniqueTitles.includes(title)) {
      uniqueTitles.push(title);
    }
  })

  // Asetetaan samannimisistä otsikoista karsitut arryssa olevat otsikot 
  // yksitellen omien p-tagiensa sisään ja p-elementit sisältöineen edelleen 
  // uuteen arrayhyn:
  const uniqueParagraphTitles: HTMLParagraphElement[] = uniqueTitles
    .map((title: string) => { 
      return paragraph(title); 
    })

  // Haetaan p-elementti-arraysta 10 ensimmäistä alkiota. "Räjäytetään" 
  // array alkoiden ympäriltä spread-operaattorilla ja lisätään alkiot 
  // alussa alustettuun tyhjään diviin.
  paragraphContainer.append(...(uniqueParagraphTitles.slice(0, 10)));
}


/* Luodaan checkbox ja label. Spesifioidaan, minkä tyyppisiä HTML-elementtejä 
ne ovat: */
export const checkbox: HTMLInputElement = document.createElement("input");
checkbox.type = "checkbox";

export const label: HTMLLabelElement = document.createElement("label");
label.innerText = "Näytä otsikot";


/* Jos controller-muuttujalla on arvo, on funktiota, jossa käytetään 
fetchiä, käytetty ja data jo haettu. Kutsutaan siis AbortControllerin 
abort-metodia. Koska haetun datan sisällään pitämän div-elementin 
display-ominaisuuden arvo voi olla none, muutetaan se oletusarvoon. 
Muussa tapauksessa kutsutaan funktiota, joka parsii 3. osapuolen 
rajapinnasta haettua dataa. */
async function fetchOrAbort(containerDiv: HTMLDivElement): Promise<void> {
  if (controller) {
    controller.abort();
    console.log("Fetchaus abortoidaan!")
    containerDiv.style.display = "grid";
  } else {
    await fetchTitles()
  }
}


/* Kun checkboxin tapahtumankuuntelijan arvo vaihtuu, haetaan anonyymissa 
asynkronisessa nuolifunktiossa checkboxin checked-ominaisuuden arvo. Jos 
se on tosi, kutsutaan fetchOrAbort-funktiota. Muussa tapauksessa piilotetaan 
divin sisältö.  */
checkbox.addEventListener("change", async (event: Event) => {
  const checkbox: HTMLInputElement = event.target as HTMLInputElement;
  const isChecked: boolean = checkbox.checked;
  // Kutsutaan asynkronista funktiota, jossa haetaan ja käsitellään dataa 
  // API:sta.
  if (isChecked) {
    await fetchOrAbort(paragraphContainer)
  } else {
    paragraphContainer.style.display = "none";
  }
})
