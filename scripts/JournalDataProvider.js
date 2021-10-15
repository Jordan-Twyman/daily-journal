/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },

    {
        id: 2,
        date: "07/25/2025",
        concept: "FlexBox",
        entry: "We played flexbox games to learn about content placement.",
        mood: "Happy"
    },

    {
        id: 3,
        date: "07/26/2025",
        concept: "Javascript",
        entry: "We talked about how to import and export javascript files to main.",
        mood: "Frustrated"
    },

    {
        id: 4,
        date: "07/30/2025",
        concept: "BootStrap",
        entry: "We were given a new tool to enhance the CSS process.",
        mood: "Excited"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}
