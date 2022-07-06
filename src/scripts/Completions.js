import { getCompletions, deleteCompletion } from "./dataAccess.js";

const mainContainer = document.querySelector("#container")

export const Completions = () => {
    const completions = getCompletions()
    
    const completionString = (completion) => {
        let listHTML = `<li class="list">${completion.description}
        <button class="completion__delete"
                    id="completion--${completion.id}">
                Delete
            </button>
            </li>`
            return listHTML
    }
    let html = `
        <ul class="complete_list">
            ${completions.map(completionString).join("")
        }
    </ul>
    `
    return html
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("completion--")) {
        const [, completionId] = click.target.id.split("--")
        deleteCompletion(parseInt(completionId))
    }
})