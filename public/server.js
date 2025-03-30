
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = Weather_key; 
    const weatherInfo = document.getElementById("weather-info");

    function fetchWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherHTML = `
                    <h3>${data.name}</h3>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;

                const weatherContainer = document.createElement("div");
                weatherContainer.innerHTML = weatherHTML;

                weatherInfo.innerHTML = "";
                weatherInfo.appendChild(weatherContainer);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherInfo.innerHTML = "<p>Failed to load weather data.</p>";
            });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => fetchWeather(position.coords.latitude, position.coords.longitude),
                error => {
                    console.error("Geolocation error:", error);
                    weatherInfo.innerHTML = "<p>Location access denied. Unable to fetch weather data.</p>";
                }
            );
        } else {
            weatherInfo.innerHTML = "<p>Geolocation is not supported by this browser.</p>";
        }
    }

    getLocation();
});


document.addEventListener("DOMContentLoaded", function () {
const plantImages = {
sunflower: "https://images.unsplash.com/photo-1548291616-bfccc8db731d?w=600&h=500&auto=format&fit=crop&q=60",
tomato: "https://images.unsplash.com/photo-1599663371158-b5d9ae173108?w=600&h=500&auto=format&fit=crop&q=60",
basil: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?w=600&h=500&auto=format&fit=crop&q=60",
marigold: "https://images.unsplash.com/photo-1613899697749-0a46140e1166?w=600&h=500&auto=format&fit=crop&q=60",
mint: "https://images.unsplash.com/photo-1656501020056-1c631268e3d0?w=600&h=450&auto=format&fit=crop&q=60" // Decreased height
};

const generateBtn = document.getElementById("generate-btn");
const seedSelect = document.getElementById("seed-select");
const plantAgeInput = document.getElementById("plant-age");

if (!generateBtn || !seedSelect || !plantAgeInput) {
    console.error("One or more required elements are missing.");
    return;
}

generateBtn.addEventListener("click", function () {
    const selectedSeed = seedSelect.value;
    const plantAge = plantAgeInput.value;

    if (!selectedSeed) {
        alert("Please select a seed first!");
        return;
    }

    console.log("Seed selected:", selectedSeed);
    console.log("Plant Age:", plantAge);

    const noSelection = document.getElementById("no-selection");
    const plantVisualization = document.getElementById("plant-visualization");
    const plantName = document.getElementById("plant-name");
    const plantImage = document.getElementById("plant-image");
    const growthStage = document.getElementById("growth-stage");
    const displayAge = document.getElementById("display-age");
    const growthProgress = document.getElementById("growth-progress");
    const expectedHarvest = document.getElementById("expected-harvest");

    if (!plantName || !plantImage || !growthStage || !displayAge || !growthProgress || !expectedHarvest) {
        console.error("One or more required visualization elements are missing.");
        return;
    }

    noSelection.classList.add("d-none");
    plantVisualization.classList.remove("d-none");


    plantName.textContent = selectedSeed.charAt(0).toUpperCase() + selectedSeed.slice(1);
    plantImage.src = plantImages[selectedSeed];
    plantImage.alt = `${selectedSeed} plant`;

    let stageText = "Seedling";
    if (plantAge >= 4 && plantAge < 8) {
        stageText = "Vegetative";
    } else if (plantAge >= 8) {
        stageText = "Mature & Blooming";
    }
    growthStage.textContent = stageText;

    displayAge.textContent = plantAge;

    const progressPercentage = Math.round((plantAge / 12) * 100);
    growthProgress.style.width = `${progressPercentage}%`;
    growthProgress.textContent = `${progressPercentage}%`;

    expectedHarvest.textContent = plantAge >= 8 ? "Ready for harvest soon!" : "Keep nurturing your plant!";
});
});



