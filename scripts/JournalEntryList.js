/**
 *   FishList which renders individual fish objects as HTML
 */
 import { useJournalEntries } from "./JournalDataProvider.js"
 import { Journal } from "./JournalEntry.js"

 export const JournalList = () => {

     const contentElement = document.querySelector("#journal-list")
     const journals = useJournalEntries()

     // Generate all of the HTML for all of the fish
     let journalHTMLRepresentations = ""
     for (const singleJournalObject of journals) {
         /*
             Invoke the Fish component function
             and pass the current fish object as an argument.
             Each time, add the return value to the
             fishHTMLRepresentations variable with `+=`
         */
               journalHTMLRepresentations += Journal(singleJournalObject)

     }

     // Add a section, and all of the fish to the DOM
     contentElement.innerHTML += `
         <article class="journal-list">
             ${journalHTMLRepresentations}
         </article>
     `
 }