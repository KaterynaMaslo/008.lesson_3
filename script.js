const smileys = ["😄", "😃", "😀", "😁", "😆"];

const container = document.getElementById('container');

smileys.forEach(element => {
    const smiley = document.createElement('div');
    smiley.className = 'smiley';
    smiley.dataset.votes = 0;

    const smileySpan = document.createElement('span');
    smileySpan.textContent = element;

    const votesSpan = document.createElement('span');
    votesSpan.className = 'votesSpan';
    votesSpan.textContent = '0';

    smiley.appendChild(smileySpan);
    smiley.appendChild(votesSpan);

    container.appendChild(smiley);
});

container.addEventListener('click', function(event) {
    const smiley = event.target.closest('.smiley');
    if (smiley) {
        const votes = parseInt(smiley.dataset.votes, 10);
        smiley.dataset.votes = votes + 1;
        smiley.querySelector('span:last-child').textContent = votes + 1;
    }
});