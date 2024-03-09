"use strict";

// API keys for accessing news and weather APIs
const newsApiKey = "9a9107813b9123e235089af3ca4a16b3"; // News API key
const weatherApiKey = "a47d1db11e5f4905b0850215241702"; // Weather API key


// Function to fetch local news articles based on the city
async function fetchLocalNews(city) {
  try {
    // Fetch news data from the API based on the city and language (English)
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${city}&lang=en&apikey=${newsApiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const newsData = await response.json(); // Parse the JSON response
    return newsData.articles; // Return the array of news articles
  } catch (error) {
    console.error("Error fetching local news:", error); // Log any errors that occur during fetching
    return []; // Return an empty array if there are errors
  }
}

// Function to display news articles on the DOM
function displayNewsToDOM(articles) {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = ""; // Clear previous news articles from the container
  articles.forEach((article) => {
    const articleElement = document.createElement("div"); // Create a new div element for each article
    articleElement.classList.add("article"); // Add a CSS class to the article element
    articleElement.innerHTML = `
           <div class="cardNews"> 
           <h2>${article.title}</h2>
            <p>${article.description}</p>
         <div class="cardNews__imgwrapper">   <img src="${article.image}" alt="News image"> </div>

            <p>${article.content}</p>
            <a href="${article.url}" target="_blank">Read more</a> </div>
        `; // Populate the article element with HTML content based on the article data
    newsContainer.appendChild(articleElement); // Append the article element to the news container
  });
}

// Weather API

// Class representing weather data for a specific day
class Weather {
  constructor(city, day) {
    this.city = city; // Name of the city
    this.day = day.date; // Date of the weather forecast
    this.temperature = Math.floor(day.day.avgtemp_f); // Temperature in Fahrenheit (rounded to the nearest whole number)
    this.forecast = day.day.condition.text; // Weather forecast description
    this.icon = day.day.condition.icon; // URL of the weather icon
    this.forecast1 = day.day.daily_chance_of_rain;
  }

  // Method to display weather data on the DOM
  displayWeatherToDOM() {
    const weatherContainer = document.getElementById("dailyWeather"); // Get the weather container element
    const date = new Date(this.day); // Convert the date string to a Date object
    this.day = date.toDateString(); // Format the date as a string
    this.day = this.day.split(" ").slice(0, 4).join(" "); // Extract the day, month, and year from the date string
    weatherContainer.innerHTML += `
            <div class="weather-card cardWeather">
             <div><h2>${this.city}</h2>
                <p>${this.day}</p> </div>
              <div>  <p>${this.forecast}</p>
                <p>${this.temperature}°F</p> </div>
                <img src="${this.icon}" alt="Weather icon">
                <p>${this.forecast1}% chance of rain</p>
            </div>
        `; // Populate the weather container with HTML content based on the weather data
  }
}

// Function to fetch the city name based on the zip code using the Zippopotam API
async function getCityNameByZip(zipCode) {
  try {
    // Fetch data from the Zippopotam API based on the zip code
    const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Parse the JSON response
    return data.places[0]["place name"]; // Return the name of the city
  } catch (error) {
    console.error("Error fetching city name:", error); // Log any errors that occur during fetching
    return null; // Return null if there are errors
  }
}

// Function to fetch weather data based on the zip code
async function getWeatherByZip(zipCode) {
  try {
    const city = await getCityNameByZip(zipCode); // Get the city name based on the zip code
    if (!city) {
      throw new Error("City not found for provided zip code");
    }
    // Fetch weather data from the Weather API based on the city name
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&days=7`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const weatherData = await response.json(); // Parse the JSON response
    const cityName = weatherData.location.name; // Name of the city from the weather data
    const days = weatherData.forecast.forecastday.map(
      (day) => new Weather(cityName, day)
    ); // Create Weather objects for each forecast day
    const weatherContainer = document.getElementById("dailyWeather"); // Get the weather container element
    weatherContainer.innerHTML = ""; // Clear previous weather data from the container
    weatherContainer.classList.remove("hide")
    days.forEach((day) => day.displayWeatherToDOM()); // Display weather data on the DOM
  } catch (error) {
    console.error(error); // Log any errors that occur during fetching or processing
  }
}

// Event listener for the form submission
const form = document.getElementById("zipcode");
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  const zipCode = form.elements["zip"].value; // Get the zip code entered by the user

  // Fetch and display weather data
  getWeatherByZip(zipCode);

  // Fetch and display local news
  const city = await getCityNameByZip(zipCode); // Get the city name based on the zip code
  const newsArticles = await fetchLocalNews(city); // Fetch local news articles based on the city name
  displayNewsToDOM(newsArticles); // Display news articles on the DOM
});
