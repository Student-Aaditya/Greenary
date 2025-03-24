// Plant data
const plantData = {
    sunflower: {
      name: "Sunflower",
      description: "Sunflowers are known for their tall stems and bright yellow flowers that track the sun.",
      growthStages: [
        { weeks: 1, stage: "Germination", progress: 5 },
        { weeks: 3, stage: "Seedling", progress: 20 },
        { weeks: 6, stage: "Vegetative", progress: 40 },
        { weeks: 8, stage: "Budding", progress: 60 },
        { weeks: 10, stage: "Flowering", progress: 80 },
        { weeks: 12, stage: "Maturity", progress: 100 },
      ],
      harvestTime: "10-12 weeks",
      careInstructions: [
        {
          icon: "bi-droplet",
          title: "Watering",
          text: "Water deeply but infrequently. Allow soil to dry slightly between waterings.",
        },
        { icon: "bi-sun", title: "Sunlight", text: "Requires full sun, at least 6-8 hours of direct sunlight daily." },
        {
          icon: "bi-flower1",
          title: "Fertilizing",
          text: "Apply balanced fertilizer when planting and again when the flower bud begins to form.",
        },
        {
          icon: "bi-rulers",
          title: "Spacing",
          text: "Plant seeds 6 inches apart and thin to 12-24 inches apart when seedlings reach 6 inches tall.",
        },
      ],
      weatherTips: {
        sunny:
          "Ideal conditions for sunflower growth. Ensure adequate watering as sunflowers in full sun can dry out quickly.",
        cloudy: "Reduced sunlight may slow growth. No special care needed, but expect slightly slower development.",
        rainy: "Watch for signs of root rot if soil becomes waterlogged. Consider adding mulch for better drainage.",
        hot: "Increase watering frequency during hot weather. Morning watering is best to prevent evaporation.",
        cold: "Protect young plants from frost. Growth will slow significantly below 50°F (10°C).",
      },
    },
    tomato: {
      name: "Cherry Tomato",
      description: "Cherry tomatoes are small, round fruits perfect for salads and snacking, with a sweet flavor.",
      growthStages: [
        { weeks: 1, stage: "Germination", progress: 5 },
        { weeks: 3, stage: "Seedling", progress: 15 },
        { weeks: 5, stage: "Vegetative", progress: 30 },
        { weeks: 7, stage: "Flowering", progress: 50 },
        { weeks: 9, stage: "Fruit Set", progress: 70 },
        { weeks: 11, stage: "Ripening", progress: 90 },
        { weeks: 12, stage: "Harvest", progress: 100 },
      ],
      harvestTime: "8-10 weeks after transplanting",
      careInstructions: [
        {
          icon: "bi-droplet",
          title: "Watering",
          text: "Keep soil consistently moist but not waterlogged. Water at the base to avoid leaf diseases.",
        },
        { icon: "bi-sun", title: "Sunlight", text: "Requires full sun, at least 6 hours of direct sunlight daily." },
        {
          icon: "bi-flower1",
          title: "Fertilizing",
          text: "Apply tomato-specific fertilizer every 2 weeks once flowering begins.",
        },
        {
          icon: "bi-tree",
          title: "Support",
          text: "Provide stakes or cages for support as plants grow and become heavy with fruit.",
        },
      ],
      weatherTips: {
        sunny: "Ideal for ripening fruit. Ensure consistent watering to prevent blossom end rot.",
        cloudy: "May slow ripening process. No special care needed.",
        rainy: "Increases risk of fungal diseases. Ensure good air circulation and consider fungicide if persistent.",
        hot: "Temperatures above 90°F (32°C) can cause blossom drop. Provide afternoon shade if possible.",
        cold: "Protect from temperatures below 50°F (10°C). Use row covers if needed.",
      },
    },
    basil: {
      name: "Basil",
      description: "Basil is an aromatic herb with tender green leaves, commonly used in Italian and Thai cuisine.",
      growthStages: [
        { weeks: 1, stage: "Germination", progress: 10 },
        { weeks: 2, stage: "Seedling", progress: 30 },
        { weeks: 4, stage: "Vegetative", progress: 60 },
        { weeks: 6, stage: "Mature", progress: 90 },
        { weeks: 8, stage: "Flowering", progress: 100 },
      ],
      harvestTime: "3-4 weeks for first harvest, then ongoing",
      careInstructions: [
        {
          icon: "bi-droplet",
          title: "Watering",
          text: "Keep soil consistently moist. Water when the top inch of soil feels dry.",
        },
        {
          icon: "bi-sun",
          title: "Sunlight",
          text: "Thrives in full sun but appreciates afternoon shade in hot climates.",
        },
        {
          icon: "bi-scissors",
          title: "Harvesting",
          text: "Pinch off leaves regularly to encourage bushier growth. Remove flower buds to extend leaf production.",
        },
        { icon: "bi-flower1", title: "Fertilizing", text: "Apply diluted liquid fertilizer every 4-6 weeks." },
      ],
      weatherTips: {
        sunny: "Ideal growing conditions. Ensure adequate watering as basil can wilt quickly in full sun.",
        cloudy: "Reduced growth but no special care needed.",
        rainy: "Watch for signs of fungal diseases on leaves. Ensure good air circulation.",
        hot: "May need more frequent watering. Consider afternoon shade if temperatures exceed 90°F (32°C).",
        cold: "Protect from temperatures below 50°F (10°C). Basil is very sensitive to cold.",
      },
    },
    marigold: {
      name: "Marigold",
      description:
        "Marigolds are bright, cheerful flowers with yellow, orange, and red blooms that repel certain garden pests.",
      growthStages: [
        { weeks: 1, stage: "Germination", progress: 10 },
        { weeks: 3, stage: "Seedling", progress: 30 },
        { weeks: 5, stage: "Vegetative", progress: 60 },
        { weeks: 7, stage: "Budding", progress: 80 },
        { weeks: 8, stage: "Flowering", progress: 100 },
      ],
      harvestTime: "8-10 weeks for flowers",
      careInstructions: [
        {
          icon: "bi-droplet",
          title: "Watering",
          text: "Water at the base when soil is dry to the touch. Avoid overhead watering.",
        },
        { icon: "bi-sun", title: "Sunlight", text: "Thrives in full sun but tolerates partial shade." },
        {
          icon: "bi-scissors",
          title: "Deadheading",
          text: "Remove spent flowers to encourage continuous blooming throughout the season.",
        },
        { icon: "bi-flower1", title: "Fertilizing", text: "Light feeding with balanced fertilizer every 4-6 weeks." },
      ],
      weatherTips: {
        sunny: "Ideal conditions for flowering. No special care needed.",
        cloudy: "May reduce flowering slightly but no special care needed.",
        rainy: "Prolonged wet conditions can cause root rot. Ensure good drainage.",
        hot: "Tolerates heat well. Water more frequently during extreme heat.",
        cold: "Protect from frost. Growth will slow below 40°F (4°C).",
      },
    },
    mint: {
      name: "Mint",
      description:
        "Mint is a fast-growing, aromatic herb with square stems and toothed leaves, perfect for teas and cocktails.",
      growthStages: [
        { weeks: 1, stage: "Germination", progress: 10 },
        { weeks: 2, stage: "Seedling", progress: 30 },
        { weeks: 4, stage: "Vegetative", progress: 70 },
        { weeks: 6, stage: "Mature", progress: 90 },
        { weeks: 8, stage: "Spreading", progress: 100 },
      ],
      harvestTime: "Ready to harvest in 4-6 weeks, then ongoing",
      careInstructions: [
        {
          icon: "bi-droplet",
          title: "Watering",
          text: "Keep soil consistently moist. Mint loves water but not waterlogged conditions.",
        },
        {
          icon: "bi-sun",
          title: "Sunlight",
          text: "Grows well in partial shade to full sun. Afternoon shade in hot climates is beneficial.",
        },
        {
          icon: "bi-box",
          title: "Containment",
          text: "Consider growing in containers as mint spreads aggressively and can become invasive.",
        },
        {
          icon: "bi-scissors",
          title: "Harvesting",
          text: "Harvest regularly to encourage bushier growth. Cut stems just above a leaf node.",
        },
      ],
      weatherTips: {
        sunny: "Ensure adequate water as mint can dry out in full sun. Afternoon shade is beneficial in hot climates.",
        cloudy: "Ideal growing conditions. No special care needed.",
        rainy: "Mint enjoys moisture but watch for signs of root rot in waterlogged soil.",
        hot: "May need more frequent watering. Leaves may become more pungent in heat.",
        cold: "Mint is fairly cold-hardy but will die back after frost. Will return in spring.",
      },
    },
  }
  
  // Weather conditions mapping
  const weatherConditions = {
    clear: "sunny",
    clouds: "cloudy",
    rain: "rainy",
    drizzle: "rainy",
    thunderstorm: "rainy",
    snow: "cold",
    mist: "cloudy",
    fog: "cloudy",
    haze: "cloudy",
  }
  
  // DOM elements
  document.addEventListener("DOMContentLoaded", () => {
    const seedSelect = document.getElementById("seed-select")
    const plantAge = document.getElementById("plant-age")
    const ageValue = document.getElementById("age-value")
    const generateBtn = document.getElementById("generate-btn")
    const noSelection = document.getElementById("no-selection")
    const plantVisualization = document.getElementById("plant-visualization")
    const loadingImage = document.getElementById("loading-image")
    const plantImage = document.getElementById("plant-image")
    const plantName = document.getElementById("plant-name")
    const displayAge = document.getElementById("display-age")
    const growthStage = document.getElementById("growth-stage")
    const plantDescription = document.getElementById("plant-description")
    const growthProgress = document.getElementById("growth-progress")
    const expectedHarvest = document.getElementById("expected-harvest")
    const weatherTips = document.getElementById("weather-tips")
    const careInstructions = document.getElementById("care-instructions")
  
    // Update age value display
    plantAge.addEventListener("input", function () {
      ageValue.textContent = `${this.value} weeks`
    })
  
    // Fetch weather data on page load
    fetchWeatherData()
  
    // Generate button click handler
    generateBtn.addEventListener("click", () => {
      const selectedSeed = seedSelect.value
      const selectedAge = Number.parseInt(plantAge.value)
  
      if (!selectedSeed) {
        alert("Please select a seed first!")
        return
      }
  
      // Show plant visualization section
      noSelection.classList.add("d-none")
      plantVisualization.classList.remove("d-none")
  
      // Show loading state
      loadingImage.classList.remove("d-none")
      plantImage.classList.add("d-none")
  
      // Update plant info
      updatePlantInfo(selectedSeed, selectedAge)
  
      // Generate plant image using Gemini API (simulated)
      setTimeout(() => {
        generatePlantImage(selectedSeed, selectedAge)
      }, 1500)
    })
  
    // Function to fetch weather data
    function fetchWeatherData() {
      const weatherInfo = document.getElementById("weather-info")
  
      // Simulate API call (replace with actual OpenWeather API call)
      setTimeout(() => {
        // Simulated weather data
        const weatherData = {
          temp: 24,
          condition: "clear",
          humidity: 65,
          wind: 8,
          description: "Sunny",
        }
  
        // Update weather display
        weatherInfo.innerHTML = `
          <i class="bi bi-sun"></i>
          <h3>${weatherData.temp}°C</h3>
          <p>${weatherData.description}</p>
          <div class="weather-details">
            <div class="weather-detail">
              <span>Humidity</span>
              <span>${weatherData.humidity}%</span>
            </div>
            <div class="weather-detail">
              <span>Wind</span>
              <span>${weatherData.wind} km/h</span>
            </div>
          </div>
        `
  
        // Store weather condition for later use
        window.currentWeather = weatherConditions[weatherData.condition] || "sunny"
      }, 1000)
    }
  
    // Function to update plant information
    function updatePlantInfo(seed, age) {
      const plant = plantData[seed]
  
      // Update basic info
      plantName.textContent = plant.name
      displayAge.textContent = age
      plantDescription.textContent = plant.description
      expectedHarvest.textContent = plant.harvestTime
  
      // Find current growth stage based on age
      let currentStage = plant.growthStages[0]
      let progress = 0
  
      for (let i = 0; i < plant.growthStages.length; i++) {
        if (age >= plant.growthStages[i].weeks) {
          currentStage = plant.growthStages[i]
          progress = currentStage.progress
        } else {
          break
        }
      }
  
      // Update growth stage and progress
      growthStage.textContent = currentStage.stage
      growthProgress.style.width = `${progress}%`
      growthProgress.textContent = `${progress}%`
  
      // Update weather-specific tips
      const weatherCondition = window.currentWeather || "sunny"
      weatherTips.innerHTML = `
        <div class="alert alert-teal">
          <i class="bi bi-info-circle me-2"></i>
          <strong>Current weather: ${weatherCondition}</strong><br>
          ${plant.weatherTips[weatherCondition]}
        </div>
      `
  
      // Update care instructions
      careInstructions.innerHTML = ""
      plant.careInstructions.forEach((instruction) => {
        const careItem = document.createElement("div")
        careItem.className = "care-item"
        careItem.innerHTML = `
          <i class="bi ${instruction.icon}"></i>
          <h5>${instruction.title}</h5>
          <p>${instruction.text}</p>
        `
        careInstructions.appendChild(careItem)
      })
    }
  
    // Function to generate plant image (simulated Gemini API call)
    function generatePlantImage(seed, age) {
      // In a real implementation, this would call the Gemini API
      // For now, we'll use placeholder images based on seed type and age
  
      // Determine image based on growth stage
      let stageIndex = 0
      const stages = plantData[seed].growthStages
  
      for (let i = 0; i < stages.length; i++) {
        if (age >= stages[i].weeks) {
          stageIndex = i
        } else {
          break
        }
      }
  
      // Calculate image number (1-3 for early, 4-6 for middle, 7-9 for mature)
      let imageRange
      if (stageIndex < 2) {
        imageRange = [1, 2, 3] // Early stage
      } else if (stageIndex < 4) {
        imageRange = [4, 5, 6] // Middle stage
      } else {
        imageRange = [7, 8, 9] // Mature stage
      }
  
      const randomIndex = Math.floor(Math.random() * imageRange.length)
      const imageNumber = imageRange[randomIndex]
  
      // Set the image source (using placeholder for demo)
      const imageUrl = `https://via.placeholder.com/600x400/008080/FFFFFF?text=${seed.charAt(0).toUpperCase() + seed.slice(1)}+${stages[stageIndex].stage}`
  
      // Hide loading, show image
      loadingImage.classList.add("d-none")
      plantImage.classList.remove("d-none")
      plantImage.src = imageUrl
      plantImage.alt = `${plantData[seed].name} at ${age} weeks (${stages[stageIndex].stage} stage)`
    }
  })  