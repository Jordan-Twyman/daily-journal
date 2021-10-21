
export const JournalEntryComponent = (entry) => {
    if (entry.mood === 'Happy') {
        return `
        <article class="entry" id="entry-${entry.id}">
        <i class="bi bi-emoji-smile mood"></i>
            <h2>${entry.concept}</h2>
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
        </article>
    `
    } else if (entry.mood === 'Ok') {
        return `
        <article class="entry" id="entry-${entry.id}">
        <i class="bi bi-emoji-neutral mood"></i>
            <h2>${entry.concept}</h2>
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
        </article>
    `
    } else {
        return `
        <article class="entry" id="entry-${entry.id}">
        <i class="bi bi-emoji-frown mood"></i>
            <h2>${entry.concept}</h2>
            <p>${entry.date}</p>
            <p>${entry.entry}</p>
        </article>
    `
    }
}