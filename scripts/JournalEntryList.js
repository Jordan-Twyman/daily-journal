
import { useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";

const entryLog = document.querySelector('.journal-entries');

export const EntryListComponent = () => {

    const entries = useJournalEntries();

    for(let entry of entries) {
        entryLog.innerHTML += JournalEntryComponent(entry);
    }
}