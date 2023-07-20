function searchAPI() {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '885df697b4d74128965416cb5f9519f3';
    const searchQuery = document.getElementById('searchInput').value;

    // Replace 'API_ENDPOINT' with the actual API endpoint for your external API
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(searchQuery)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('result-item');

        const image = document.createElement('img');
        image.src = item.image;
        div.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = item.name;
        div.appendChild(name);

        const websiteLink = document.createElement('a');
        websiteLink.textContent = 'Visit Website';
        websiteLink.href = item.website;
        websiteLink.target = '_blank';
        div.appendChild(websiteLink);

        resultsDiv.appendChild(div);
    });
}
