function searchRecipes() {

    const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

    fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fe6fb2ebbmshcddd096128512b3p1d1072jsnc2c4cbec714e',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayResults(data.results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
console.log("You are here");
function displayResults(results) {
    const resultList = document.getElementById('results');
    resultList.innerHTML = '';

    results.forEach(recipe => {
        const li = document.createElement('li');
        li.textContent = recipe.title;
        resultList.appendChild(li);
    });
}