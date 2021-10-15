import { Journal } from './JournalEntry.js'
import { useJournalEntries } from './JournalDataProvider.js'
import { JournalList } from './JournalEntryList.js'

const allTheJournal = useJournalEntries()

for (const journal of allTheJournal) {
    console.log(journal)
}

JournalList()
