
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const contentTarget = document.querySelector(".journal-entries")

export const EntryListComponent = () => {
  getEntries()
  .then(() => {

    let allTheEntries = useJournalEntries();

    let entryHTML = "";
   
    allTheEntries.forEach((singleEntry) => {

        entryHTML += JournalEntryComponent(singleEntry);
    });

    contentTarget.innerHTML = `
    ${entryHTML}`

  });
};

// document.querySelector("#notes-nav-link").addEventListener("click", () => {
//   NoteList()
// })