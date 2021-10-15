export const Journal = (journal) => {
    return `
        <section class="journal-card">
            <div class="journal__id">${journal.id}.</div>
            <div class="journal__concept">${journal.concept}</div>
            <div class="journal__date">${journal.date}</div>
            <div class="journal__entry">${journal.entry}</div>
            <div class="journal__mood">${journal.mood}</div>
        </section>
    `
}