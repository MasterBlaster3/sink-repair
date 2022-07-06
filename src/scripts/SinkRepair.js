import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"
import { Completions } from "./Completions.js"

//invokes the Requests function
export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
            ${Completions()}
        </section>
    `
}