const spotlightURL = 'https://cateschmidt.github.io/wdd230/lesson10/chamber/data.json';
//end of grid and list button

async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showDirectories(data);
}

getDirectoryData(spotlightURL);

function showDirectories(data){
    let businesses = data.business;

    let randomIndex = Math.floor(Math.random()*businesses.length);
    let randomDirectory1 = businesses[randomIndex];
    businesses.splice(randomIndex, 1);
    
    randomIndex = Math.floor(Math.random()*businesses.length);
    let randomDirectory2 = businesses[randomIndex];
    businesses.splice(randomIndex, 1);
    
    randomIndex = Math.floor(Math.random()*businesses.length);
    let randomDirectory3 = businesses[randomIndex];
   
    const div1 = document.querySelector("#spotlight1");
    displayDirectory(randomDirectory1,div1);
    const div2 = document.querySelector("#spotlight2");
    displayDirectory(randomDirectory2,div2)
    const div3 = document.querySelector("#spotlight3");
    displayDirectory(randomDirectory3,div3)
}





const displayDirectory = (business, div) => {
        // Create elements to add to the div.cards element
        let logo = document.createElement('img');
        let card = document.createElement('section');
        let h2 = document.createElement('h4');
        let h3 = document.createElement('h4')
        let p = document.createElement('p');
        let a = document.createElement('a');


        h2.textContent = `${business.name}`;
        h3.textContent = `${business.phone}`;
        p.textContent = `${business.address1}`;
        a.textContent = `${business.website}`;
        a.setAttribute('href', `${business.website}`)
            // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', business.logo);
        portrait.setAttribute('alt', `${business.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);
        card.appendChild(a);

        div.appendChild(card);
}