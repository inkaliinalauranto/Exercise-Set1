function createGenericElement(type: string): HTMLElement {
    const element: HTMLElement = document.createElement(type)
    return element
}

export function h1(text: string): HTMLElement {
    const h1: HTMLElement = createGenericElement("h1")
    h1.innerText = text
    return h1
}

export function h3(text: string): HTMLElement {
    const h3: HTMLElement = createGenericElement("h3")
    h3.innerText = text
    return h3
}

export function div(className: string): HTMLDivElement {
    const div: HTMLDivElement = document.createElement("div")
    div.className = className
    return div
}

export function paragraph(text: string): HTMLParagraphElement {
    const p: HTMLParagraphElement = document.createElement("p")
    p.innerText = text
    return p
}