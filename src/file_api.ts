// 4/4: hyödynnetään File API:a:

/* Tyypitetään input- ja output-elementit. Koska on tiedossa, että ne ovat 
varmasti index.html-tiedostossa voidaan ne merkitä "not nulleiksi" */
const fileInput: HTMLInputElement = document.querySelector("input[type=file]")!;
const output: HTMLDivElement = document.querySelector(".output")!;

/* Kun input-elementille tapahtuu muutos, haetaan valittu tiedosto 
sille tehtyyn file-muuttujaan, joka on File-tietotyypeistä koostuva array
eli sen tietotyyppi on FileList */
fileInput.addEventListener("change", async () => {
    const [ file ]: FileList = fileInput.files as FileList;

    /* Jos muuttujassa on arvo eli tiedosto, haetaan sen sisältö 
    text-metodilla output-div-elementtiin:*/
    if (file) {
        output.innerText = await file.text();
    }
})