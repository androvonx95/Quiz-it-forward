fetch("data/questions.json")
    .then(res => res.json())
    .then(data => {
    const contributorsList = document.getElementById('contributors-list');
    const contributors = data.questions.map(q => q.contributor);
    const uniqueContributors = [...new Set(contributors)];

    uniqueContributors.forEach(username => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `https://github.com/${username}`;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = username;
        li.appendChild(a);
        contributorsList.appendChild(li);
    });
    })
    .catch(err => {
    console.error('Failed to load JSON:', err);
    });