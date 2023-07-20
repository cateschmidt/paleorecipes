const requestURL = 'https://cateschmidt.github.io/paleorecipes/data.json';
const list = document.querySelector('#list');
const table = document.querySelector('.table');
const grid = document.querySelector('#grid');
const cards = document.querySelector('.cards');
const displayItems = document.querySelector('.displayItems');


async function getData(requestURL) {
    const response = await fetch(requestURL);
    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const recipes = data['recipes'];

        recipes.forEach(recipe => {
            displayCards(recipe);
        });
        
        list.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            recipes.forEach(recipe => {
                displayTable(recipe);
            });
        });

        grid.addEventListener('click', () => {
            table.innerHTML = '';
            cards.innerHTML = '';
            recipes.forEach(recipe => {
                displayCards(recipe);
            });
        });
    }
}

getData(requestURL);

function displayCards(recipe) {
    let card = document.createElement('section');

    // recipe Image
    let image = document.createElement('img');
    image.setAttribute('src', recipe.logo);
    image.setAttribute('alt', `${recipe.name} Logo`);
    card.appendChild(image);
    
    // Recipe Name
    let h2 = document.createElement('h2');
    h2.textContent = recipe.name;
    card.appendChild(h2);


    // Ingredients
    let ingredients = document.createElement('p');
    address.textContent = recipe.ingredients.one + ' ' + ' ' + recipe.ingredients.two + ', ' + recipe.ingredients.three + ' ' + recipe.ingredients.four;
    card.appendChild(ingredients);


    // Recipe Website
    let website = document.createElement('a');
    website.setAttribute('href', recipe.website);
    website.textContent = 'Website';
    card.appendChild(website);

    // Append card to the DOM (the prophet list).
    document.querySelector('div.cards').appendChild(card);
}

function displayTable(recipe) {
    let tableRow = document.createElement('tr');

    // Recipe Name
    let name = document.createElement('td');
    name.textContent = recipe.name;
    tableRow.appendChild(name);


    // Ingredients
    let ingredients = document.createElement('td');
    address.textContent = recipe.ingredients.one + ' ' + ' ' + recipe.ingredients.two + ', ' + recipe.ingredients.three + ' ' + recipe.ingredients.four;
    tableRow.appendChild(ingredients);

    // Recipe Website
    let website = document.createElement('td');
    website.innerHTML = `<a href="${recipe.website}">Website</a>`;
    tableRow.appendChild(website);

    document.querySelector('table').appendChild(tableRow);
}