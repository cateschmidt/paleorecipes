// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const url = 'https://api.openweathermap.org/data/2.5/weather?q=Austin&units=imperial&appid=2e52b28e193c5dbda364e2b9891de906';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();
  
  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    temp = weatherData.main.temp;

    wind = weatherData.wind.speed;
    document.querySelector('#wind').textContent = wind;
    
    
    console.log(temp);
    console.log(wind);

    
    if (temp <= 50 && wind > 3) {
      let chill = ((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
      windchill.textContent = chill.toFixed(2);
      wind.innerHTML = '&#8457;';
  }else {
    windchill.innerHTML = "N/A";

  };

}





