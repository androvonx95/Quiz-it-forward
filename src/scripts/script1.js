let score = 0;

const scoreContainer = document.getElementById('score-container');

fetch("/data/questions.json")
.then(res => res.json())
.then(data => {
const container = document.getElementById('quiz-container');

data.questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.className = 'question';

    // Question text
    const question = document.createElement('p');
    question.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(question);

    // Contributor info
    const contributor = document.createElement('p');
    contributor.innerHTML = `asked by: <a href="https://github.com/${q.contributor}" target="_blank" rel="noopener noreferrer">github.com/${q.contributor}</a>`;
    contributor.style.fontSize = '0.85em';
    contributor.style.color = '#666';
    contributor.style.marginTop = '4px';
    contributor.style.marginBottom = '10px';
    div.appendChild(contributor);

    // Options
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    q.options.forEach(option => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${index}`;
    input.value = option;
    label.appendChild(input);
    label.append(` ${option}`);
    optionsDiv.appendChild(label);
    optionsDiv.appendChild(document.createElement('br'));
    });

    div.appendChild(optionsDiv);

    // Submit button
    const btn = document.createElement('button');
    btn.textContent = 'Check Answer';
    div.appendChild(btn);

    // Feedback
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    div.appendChild(feedback);

    btn.addEventListener('click', () => {
    const selected = div.querySelector(`input[name="question-${index}"]:checked`);
    if (!selected) {
        feedback.textContent = 'Please select an answer.';
        feedback.style.color = 'orange';
        return;
    }

    if (selected.value === q.answer) {
        feedback.textContent = `✅ Correct! ${q.message}`;
        feedback.style.color = 'green';
        score += 1;
        scoreContainer.textContent = `SCORE: ${score}`;
    } else {
        feedback.textContent = `❌ Incorrect. Correct answer: "${q.answer}" — ${q.message}`;
        feedback.style.color = 'red';
    }

    // Disable inputs and button after answering
    const inputs = div.querySelectorAll('input');
    inputs.forEach(i => i.disabled = true);
    btn.disabled = true;
    });

    container.appendChild(div);
});
})
.catch(err => {
console.error('Failed to load JSON:', err);
});
