import './style.css'
import { itemModel, fetchTodos } from './services.ts'
import { h1, h3, div, paragraph } from './dom_utils.ts'

const app = document.querySelector<HTMLDivElement>('#app')!

const mainTitle: HTMLElement = h1("Tehtäväsetti 1 - 4 eri selainrajapintaa")
const exercise1Title: HTMLElement = h3("1. Otsikoiden haku kolmannen osapuolen API:sta fetch-rajapintaa hyödyntämällä")
const paragraphContainer: HTMLDivElement = div("container")

interface todoInfo {
  title: string
}

const fetchTitles = async () => {
  const data: itemModel[] = await fetchTodos()
  const titles: string[] = data.map((todo: todoInfo) => {
    return todo.title
  })

  const uniqueTitles: string[] = []
  titles.forEach((title) => {
    if (!uniqueTitles.includes(title)) {
      uniqueTitles.push(title)
    }
  })

  const uniqueParagraphTitles: HTMLParagraphElement[] = uniqueTitles
    .map((title: string) => { 
      return paragraph(title) 
    })

  paragraphContainer.append(...(uniqueParagraphTitles.slice(0, 10)))
}

await fetchTitles()

app.append(mainTitle, exercise1Title, paragraphContainer)