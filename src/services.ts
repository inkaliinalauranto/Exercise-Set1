export interface itemModel {
    userId: number
    id: number
    title:string
    completed: boolean
}

// Fetch-selainrajapinnan käyttö:
export async function fetchTodos(): Promise<itemModel[]> {
    // Fetch palauttaa promisen, joka riisutaan await-avainsanalla:
    const response: Response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // Muutetaan data JavaScriptiksi json-metodilla erillisessä säikeessä, minkä 
    // vuoksi muuntamisen yhteydessä on käytettävä awaitia:
    const data = await response.json()
    return data
  }