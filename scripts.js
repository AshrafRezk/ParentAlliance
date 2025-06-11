const styles = [
    {
        name: 'Authoritative',
        summary: 'High expectations with warmth and respect.',
        traits: [80,70,75,65,80,70,80],
        good: 80,
        bad: 20,
        grows: ['responsibility', 'confidence', 'empathy'],
        neglects: ['spontaneity']
    },
    {
        name: 'Authoritarian',
        summary: 'Strict rules and obedience focus.',
        traits: [30,90,40,40,50,70,90],
        good: 60,
        bad: 40,
        grows: ['discipline', 'respect for rules'],
        neglects: ['creativity', 'independence']
    },
    {
        name: 'Permissive',
        summary: 'Lenient with few demands.',
        traits: [70,30,60,80,60,40,30],
        good: 70,
        bad: 50,
        grows: ['self-expression', 'creativity'],
        neglects: ['self-control', 'accountability']
    },
    {
        name: 'Uninvolved',
        summary: 'Low responsiveness and guidance.',
        traits: [20,20,70,40,30,20,10],
        good: 30,
        bad: 70,
        grows: ['self-reliance'],
        neglects: ['emotional connection', 'guidance']
    },
    {
        name: 'Positive/Gentle',
        summary: 'Empathy and natural consequences.',
        traits: [85,50,60,70,75,65,60],
        good: 85,
        bad: 25,
        grows: ['cooperation', 'problem-solving'],
        neglects: ['respect for authority']
    },
    {
        name: 'Helicopter',
        summary: 'Overprotective and involved.',
        traits: [60,75,40,45,60,55,70],
        good: 60,
        bad: 40,
        grows: ['security', 'achievement'],
        neglects: ['independence', 'risk-taking']
    },
    {
        name: 'Free-Range',
        summary: 'Encourages independence within boundaries.',
        traits: [70,50,80,70,75,60,50],
        good: 75,
        bad: 30,
        grows: ['confidence', 'resilience'],
        neglects: ['structure', 'safety concerns']
    },
    {
        name: 'Tiger',
        summary: 'Achievement-focused discipline.',
        traits: [40,90,50,40,70,80,85],
        good: 70,
        bad: 50,
        grows: ['work ethic', 'perseverance'],
        neglects: ['creativity', 'emotional regulation']
    }
];

const methods = [
    {
        name: 'Montessori',
        summary: 'Self-directed activity in prepared environments.',
        traits: [80,40,90,70,75,60,50],
        good: 80,
        bad: 30,
        grows: ['independence', 'concentration', 'self-motivation'],
        neglects: ['structured group work']
    },
    {
        name: 'Waldorf',
        summary: 'Arts-based learning with daily rhythm.',
        traits: [70,60,50,90,70,60,70],
        good: 70,
        bad: 40,
        grows: ['creativity', 'imagination'],
        neglects: ['early academics', 'technology']
    },
    {
        name: 'Reggio Emilia',
        summary: 'Project-based child-led discovery.',
        traits: [75,55,60,85,65,50,45],
        good: 75,
        bad: 35,
        grows: ['collaboration', 'critical thinking'],
        neglects: ['standardized assessment']
    },
    {
        name: 'Charlotte Mason',
        summary: 'Short lessons using living books.',
        traits: [65,70,70,60,70,70,75],
        good: 70,
        bad: 30,
        grows: ['love of literature', 'habit formation'],
        neglects: ['modern technology']
    },
    {
        name: 'Unschooling',
        summary: 'Learning from life experiences.',
        traits: [60,30,80,75,65,45,40],
        good: 65,
        bad: 45,
        grows: ['curiosity', 'independence'],
        neglects: ['structure', 'external accountability']
    },
    {
        name: 'Forest School',
        summary: 'Outdoor nature-rich exploration.',
        traits: [70,50,85,80,70,55,40],
        good: 80,
        bad: 30,
        grows: ['resilience', 'environmental awareness'],
        neglects: ['indoor academics']
    },
    {
        name: 'Classical Education',
        summary: 'Grammar, Logic, Rhetoric.',
        traits: [50,80,40,50,65,80,90],
        good: 70,
        bad: 40,
        grows: ['logic', 'memorization'],
        neglects: ['creativity', 'flexibility']
    },
    {
        name: 'RIE',
        summary: 'Respectful infant caregiving.',
        traits: [90,40,60,60,80,50,40],
        good: 85,
        bad: 20,
        grows: ['autonomy', 'secure attachment'],
        neglects: ['structured academics']
    },
    {
        name: 'Pikler',
        summary: 'Independent motor development.',
        traits: [80,40,70,50,75,60,40],
        good: 80,
        bad: 25,
        grows: ['confidence', 'motor skills'],
        neglects: ['group learning']
    },
    {
        name: 'Faith-Based',
        summary: 'Guided by scripture and moral character.',
        traits: [70,60,50,70,80,70,80],
        good: 85,
        bad: 30,
        grows: ['moral development', 'community'],
        neglects: ['secular perspectives']
    }
];

const styleResources = {
    'Authoritative': {
        forum: 'https://www.reddit.com/r/ScienceBasedParenting/',
        book: 'https://www.apa.org/pubs/books/4317012',
        video: 'https://www.youtube.com/watch?v=h7Xiktyx20U'
    },
    'Authoritarian': {
        forum: 'https://www.reddit.com/r/Parenting/comments/149g1f6/authoritarian_vs_authoritative/',
        book: 'https://www.goodreads.com/book/show/110540.Between_Parent_and_Child',
        video: 'https://www.youtube.com/watch?v=_wMRgEBqVv4'
    },
    'Permissive': {
        forum: 'https://www.reddit.com/r/Parenting/comments/16xxai5/permissive_vs_gentle_parenting/',
        book: 'https://positivepsychology.com/parenting-styles/',
        video: 'https://www.youtube.com/watch?v=PAW3gLZ_uy8'
    },
    'Uninvolved': {
        forum: 'https://parentingscience.com/parenting-style/',
        book: 'https://www.ncbi.nlm.nih.gov/books/NBK568743/',
        video: 'https://www.youtube.com/watch?v=fyO8pvpnTdE'
    },
    'Positive/Gentle': {
        forum: 'https://www.reddit.com/r/Parenting/comments/12yepgf/what_is_gentle_parenting/',
        book: 'https://www.goodreads.com/book/show/26030769-the-gentle-parenting-book',
        video: 'https://www.youtube.com/watch?v=FJq6cG8w-vE'
    },
    'Helicopter': {
        forum: 'https://www.reddit.com/r/Parenting/comments/tb3nwa/how_do_you_stop_being_a_helicopter_parent/',
        book: 'https://www.amazon.com/Honey-I-Wrecked-Kids-Misbehavior/dp/0973393931',
        video: 'https://www.youtube.com/watch?v=Sq6bC4t8cWk'
    },
    'Free-Range': {
        forum: 'https://www.reddit.com/r/Parenting/comments/176ympt/any_free_range_parents_here/',
        book: 'https://www.goodreads.com/book/show/6085823-free-range-kids',
        video: 'https://www.youtube.com/watch?v=Bjg0R26VWt4'
    },
    'Tiger': {
        forum: 'https://www.reddit.com/r/Parenting/comments/mb1bk4/tiger_parenting_pros_cons/',
        book: 'https://www.goodreads.com/book/show/8575087-battle-hymn-of-the-tiger-mother',
        video: 'https://www.youtube.com/watch?v=4Y2n_EErfA0'
    }
};

const methodResources = {
    'Reggio Emilia': {
        forum: 'https://www.reddit.com/r/ReggioEmilia/',
        book: 'https://www.goodreads.com/book/show/375297.The_Hundred_Languages_of_Children',
        video: 'https://www.youtube.com/watch?v=Jk1hJxr0f0g'
    },
    'Charlotte Mason': {
        forum: 'https://www.reddit.com/r/CharlotteMason/',
        book: 'https://www.goodreads.com/book/show/726640.Home_Education',
        video: 'https://www.youtube.com/watch?v=Uu4AOZzmyMk'
    },
    'Unschooling': {
        forum: 'https://www.reddit.com/r/unschooling/',
        book: 'https://www.goodreads.com/book/show/13513052-free-to-learn',
        video: 'https://www.youtube.com/watch?v=azEY3nz4j9g'
    },
    'Forest School': {
        forum: 'https://www.reddit.com/r/ForestSchool/',
        book: 'https://www.goodreads.com/book/show/16104656-learning-with-nature',
        video: 'https://www.youtube.com/watch?v=TZrj5JYFQ4o'
    },
    'Classical Education': {
        forum: 'https://www.reddit.com/r/ClassicEducation/',
        book: 'https://www.goodreads.com/book/show/507725.The_Well_Trained_Mind',
        video: 'https://www.youtube.com/watch?v=-sLFzReTp24'
    },
    'RIE': {
        forum: 'https://www.reddit.com/r/RIEParenting/',
        book: 'https://www.goodreads.com/book/show/96037.Your_Self_Confident_Baby',
        video: 'https://www.youtube.com/watch?v=_Z3P0s8COEE'
    },
    'Pikler': {
        forum: 'https://pikler.org/en/',
        book: 'https://www.goodreads.com/book/show/18824933-the-pikler-collection',
        video: 'https://www.youtube.com/watch?v=rqQkL2VLRrQ'
    },
    'Montessori': {
        forum: 'https://www.reddit.com/r/Montessori/',
        book: 'https://www.goodreads.com/book/show/11249316-the-montessori-toddler',
        video: 'https://www.youtube.com/watch?v=rZL3g6k6Y_M'
    },
    'Waldorf': {
        forum: 'https://www.reddit.com/r/waldorfeducation/',
        book: 'https://www.goodreads.com/book/show/7241760-the-waldorf-early-childhood-education',
        video: 'https://www.youtube.com/watch?v=djvPyQn3Rk4'
    },
    'Faith-Based': {
        forum: 'https://www.reddit.com/r/ChristianParenting/',
        book: 'https://www.goodreads.com/book/show/83669.Shepherding_a_Child_s_Heart',
        video: 'https://www.youtube.com/watch?v=O6oC7YX9au0'
    }
};

const icons = {
    'Authoritative': '🎯',
    'Authoritarian': '🛡️',
    'Permissive': '🎈',
    'Uninvolved': '😴',
    'Positive/Gentle': '🧸',
    'Helicopter': '🚁',
    'Free-Range': '🐔',
    'Tiger': '🐯',
    'Montessori': '🏫',
    'Waldorf': '🎨',
    'Reggio Emilia': '🧩',
    'Charlotte Mason': '📚',
    'Unschooling': '🌱',
    'Forest School': '🌳',
    'Classical Education': '🏛️',
    'RIE': '👶',
    'Pikler': '🤸',
    'Faith-Based': '🙏'
};

let journeyData = {};

function getExample(name) {
    return `An example of ${name} in action.`;
}

function renderMarkdown(text) {
    return text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

function getResources(name) {
    if (methodResources[name]) {
        return {
            videos: [methodResources[name].video],
            books: [methodResources[name].book],
            forums: [methodResources[name].forum]
        };
    }
    if (styleResources[name]) {
        return {
            videos: [styleResources[name].video],
            books: [styleResources[name].book],
            forums: [styleResources[name].forum]
        };
    }
    return {
        videos: [
            `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' parenting style')}`
        ],
        books: [
            `https://www.goodreads.com/search?q=${encodeURIComponent(name + ' parenting')}`
        ],
        forums: []
    };
}

function updateChart(item){if(!window.radarChart)return;radarChart.data.datasets[0].label=item.name;radarChart.data.datasets[0].data=item.traits;radarChart.update();}

function updateTimeline(name){
    const timeline=document.getElementById('journeyTimeline');
    if(!timeline||!journeyData[name]){timeline.innerHTML='';return;}
    timeline.innerHTML='';
    journeyData[name].stages.forEach((s,i)=>{
        const el=document.createElement('div');
        el.className='milestone';
        el.innerHTML=`<h4>${s.stage}</h4><p>${s.focus}</p>`;
        timeline.appendChild(el);
        if(window.motion){
            motion.animate(el,{opacity:[0,1],transform:['translateY(20px)','translateY(0)']},{delay:i*0.1,duration:0.4});
        }
    });
}
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = item.name.replace(/\W/g,'');
    const icon = document.createElement('span');
    icon.className = 'card-icon';
    icon.textContent = icons[item.name] || '👪';
    const title = document.createElement('h3');
    title.textContent = item.name;
    const summary = document.createElement('p');
    summary.innerHTML = renderMarkdown(item.summary);
    const goodWrap = document.createElement('div');
    goodWrap.className = 'meter-container';
    const goodLabel = document.createElement('span');
    goodLabel.className = 'meter-label';
    goodLabel.textContent = 'Strengths';
    const goodMeter = document.createElement('div');
    goodMeter.className = 'meter';
    const goodBar = document.createElement('div');
    goodBar.style.width = item.good + '%';
    goodMeter.appendChild(goodBar);
    goodWrap.appendChild(goodLabel);
    goodWrap.appendChild(goodMeter);

    const goodDetails = document.createElement('details');
    const goodSummary = document.createElement('summary');
    goodSummary.textContent = 'More on Strengths';
    const goodExample = document.createElement('p');
    goodExample.innerHTML = renderMarkdown(getExample(item.name));
    goodDetails.appendChild(goodSummary);
    goodDetails.appendChild(goodExample);

    const badWrap = document.createElement('div');
    badWrap.className = 'meter-container';
    const badLabel = document.createElement('span');
    badLabel.className = 'meter-label';
    badLabel.textContent = 'Blind Spots';
    const badMeter = document.createElement('div');
    badMeter.className = 'meter';
    const badBar = document.createElement('div');
    badBar.style.width = item.bad + '%';
    badBar.style.background = '#ff9e9e';
    badMeter.appendChild(badBar);
    badWrap.appendChild(badLabel);
    badWrap.appendChild(badMeter);

    const badDetails = document.createElement('details');
    const badSummary = document.createElement('summary');
    badSummary.textContent = 'More on Blind Spots';
    const badExample = document.createElement('p');
    badExample.innerHTML = renderMarkdown('Consider balance and awareness.');
    badDetails.appendChild(badSummary);
    badDetails.appendChild(badExample);

    const details = document.createElement('div');
    details.className = 'details';
    const growTitle = document.createElement('h4');
    growTitle.textContent = 'Fosters';
    const growList = document.createElement('ul');
    item.grows.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        growList.appendChild(li);
    });
    const neglectTitle = document.createElement('h4');
    neglectTitle.textContent = 'May Neglect';
    const neglectList = document.createElement('ul');
    item.neglects.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        neglectList.appendChild(li);
    });
    details.appendChild(growTitle);
    details.appendChild(growList);
    details.appendChild(neglectTitle);
    details.appendChild(neglectList);

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(goodWrap);
    card.appendChild(goodDetails);
    card.appendChild(badWrap);
    card.appendChild(badDetails);
    card.appendChild(details);

    card.addEventListener('click', () => {
        document.querySelectorAll('.card.active').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        updateChart(item);
        updateTimeline(item.name);
    });

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const styleContainer = document.querySelector('#styles .cards');
    const methodContainer = document.querySelector('#methods .cards');
    styles.forEach(item => styleContainer.appendChild(createCard(item)));
    methods.forEach(item => methodContainer.appendChild(createCard(item)));

    fetch('journeys.json').then(r=>r.json()).then(d=>{journeyData=d;});

    let chartInitialized = false;
    const chartObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !chartInitialized) {
            chartInitialized = true;
            const ctx = document.getElementById('radarChart').getContext('2d');
            window.radarChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['Empathy','Discipline','Independence','Creativity','Confidence','Accountability','Structure'],
                    datasets: [{
                        label: '',
                        data: [0,0,0,0,0,0,0],
                        backgroundColor: 'rgba(118,163,255,0.2)',
                        borderColor: '#76a3ff'
                    }]
                },
                options: { responsive: true, animation: { duration: 800 } }
            });
        }
    });
    const radarContainer = document.getElementById('radarContainer');
    chartObserver.observe(radarContainer);

    const chartToggle = document.getElementById('chartToggle');
    chartToggle.addEventListener('click', () => {
        radarContainer.classList.toggle('hidden');
        chartToggle.textContent = radarContainer.classList.contains('hidden') ? 'Show Chart' : 'Hide Chart';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    const searchInput = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    const allItems = [...styles, ...methods];
    searchInput.addEventListener('input', e => {
        const term = e.target.value.toLowerCase();
        suggestions.innerHTML = '';
        if (term) {
            allItems.filter(i => i.name.toLowerCase().includes(term)).slice(0,3).forEach(match => {
                const li = document.createElement('li');
                li.textContent = match.name;
                li.addEventListener('click', () => {
                    document.getElementById(match.name.replace(/\W/g,''))?.scrollIntoView({behavior:'smooth'});
                    searchInput.value = match.name;
                    suggestions.innerHTML = '';
                });
                suggestions.appendChild(li);
            });
        }
        document.querySelectorAll('.card').forEach(c => {
            const text = c.querySelector('h3').textContent.toLowerCase() + ' ' + c.querySelector('p').textContent.toLowerCase();
            c.style.display = text.includes(term) ? '' : 'none';
        });
    });

    document.addEventListener('click', e => {
        if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.innerHTML = '';
        }
    });
    searchInput.addEventListener('keydown', e => {
        if (e.key === 'Escape') suggestions.innerHTML = '';
    });

    const themeToggle = document.getElementById('themeToggle');
    if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    const sidebar = document.getElementById('sidebar');
    document.getElementById('menuToggle').addEventListener('click', () => sidebar.classList.toggle('open'));
    sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            sidebar.classList.remove('open');
            document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        });
    });

    const bottomNav = document.getElementById('bottomNav');
    bottomNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
        });
    });
    document.getElementById('helpButton').addEventListener('click', () => alert('How can we assist you today?'));

    const form = document.getElementById('childForm');
    const addBtn = document.getElementById('addChild');
    const output = document.getElementById('aiResponse');
    const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

    function buildPrompt(children){
        let text = 'Provide parenting recommendations tailored to the following children.\n';
        children.forEach(c => {
            text += `Child: ${c.name}, Age: ${c.age}, Gender: ${c.gender}, Challenges: ${c.challenge}\n`;
        });
        text += 'Suggest compatible parenting styles, education methods, milestones, and approaches to address the challenges.';
        return text;
    }

    addBtn?.addEventListener('click', e => {
        e.preventDefault();
        const div = document.createElement('div');
        div.className = 'child-input';
        div.innerHTML = `<input type="text" name="name" placeholder="Child Name">\n<input type="number" name="age" placeholder="Age" min="0">\n<select name="gender"><option value="" selected>Gender</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>\n<input type="text" name="challenge" placeholder="Current Challenge">`;
        addBtn.before(div);
    });

    form?.addEventListener('submit', async e => {
        e.preventDefault();
        const children = [];
        form.querySelectorAll('.child-input').forEach(div => {
            children.push({
                name: div.querySelector('input[name="name"]').value,
                age: div.querySelector('input[name="age"]').value,
                gender: div.querySelector('select[name="gender"]').value,
                challenge: div.querySelector('input[name="challenge"]').value
            });
        });
        output.textContent = 'Loading...';
        try {
            const res = await fetch(endpoint + '?key=' + (window.GEMINI_API_KEY || ''), {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    contents: [{parts:[{text: buildPrompt(children)}]}]
                })
            });
            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
            output.textContent = text;
        } catch(err){
            output.textContent = 'Error: ' + err.message;
        }
    });
});
