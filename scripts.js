const styles = [
    { name: 'Authoritative', summary: 'High expectations with warmth and respect.', good: 80, bad: 20 },
    { name: 'Authoritarian', summary: 'Strict rules and obedience focus.', good: 60, bad: 40 },
    { name: 'Permissive', summary: 'Lenient with few demands.', good: 70, bad: 50 },
    { name: 'Uninvolved', summary: 'Low responsiveness and guidance.', good: 30, bad: 70 },
    { name: 'Positive/Gentle', summary: 'Empathy and natural consequences.', good: 85, bad: 25 },
    { name: 'Helicopter', summary: 'Overprotective and involved.', good: 60, bad: 40 },
    { name: 'Free-Range', summary: 'Encourages independence within boundaries.', good: 75, bad: 30 },
    { name: 'Tiger', summary: 'Achievement-focused discipline.', good: 70, bad: 50 }
];

const methods = [
    { name: 'Montessori', summary: 'Self-directed activity in prepared environments.', good: 80, bad: 30 },
    { name: 'Waldorf', summary: 'Arts-based learning with daily rhythm.', good: 70, bad: 40 },
    { name: 'Reggio Emilia', summary: 'Project-based child-led discovery.', good: 75, bad: 35 },
    { name: 'Charlotte Mason', summary: 'Short lessons using living books.', good: 70, bad: 30 },
    { name: 'Unschooling', summary: 'Learning from life experiences.', good: 65, bad: 45 },
    { name: 'Forest School', summary: 'Outdoor nature-rich exploration.', good: 80, bad: 30 },
    { name: 'Classical Education', summary: 'Grammar, Logic, Rhetoric.', good: 70, bad: 40 },
    { name: 'RIE', summary: 'Respectful infant caregiving.', good: 85, bad: 20 },
    { name: 'Pikler', summary: 'Independent motor development.', good: 80, bad: 25 },
    { name: 'Faith-Based', summary: 'Guided by scripture and moral character.', good: 85, bad: 30 }
];

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    const title = document.createElement('h3');
    title.textContent = item.name;
    const summary = document.createElement('p');
    summary.textContent = item.summary;
    const goodMeter = document.createElement('div');
    goodMeter.className = 'meter';
    const goodBar = document.createElement('div');
    goodBar.style.width = item.good + '%';
    goodMeter.appendChild(goodBar);
    const badMeter = document.createElement('div');
    badMeter.className = 'meter';
    const badBar = document.createElement('div');
    badBar.style.width = item.bad + '%';
    badBar.style.background = '#ff9e9e';
    badMeter.appendChild(badBar);
    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(goodMeter);
    card.appendChild(badMeter);
    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const styleContainer = document.querySelector('#styles .cards');
    const methodContainer = document.querySelector('#methods .cards');
    styles.forEach(item => styleContainer.appendChild(createCard(item)));
    methods.forEach(item => methodContainer.appendChild(createCard(item)));
});
