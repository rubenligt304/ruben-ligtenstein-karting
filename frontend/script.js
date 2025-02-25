// Script to handle dynamic loading of race results (example)
document.addEventListener('DOMContentLoaded', function () {
    fetch('/api/results')
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('race-results');
            data.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<p>${result.date} - ${result.event} - Position: ${result.position}</p>`;
                resultsContainer.appendChild(resultItem);
            });
        });
});
