/* import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
latitude: number;
longitude: number; 
}

// TODO: Define a class for the Weather object
  class Weather {
    city: string;
    temperature: number;
    description: string;

    constructor(city: string, temperature: number, description: string) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
    }

    displayWeatherInfo() {
        console.log(`Weather in ${this.city}: Temperature - ${this.temperature}°C, Description - ${this.description}`);
    }
}



// TODO: Complete the WeatherService class
//YOU DIDN'T DO THE TO DO. 
class WeatherService {
  city: string;
    temperature: number;
    description: string;

    constructor(city: string, temperature: number, description: string) {
        this.city = city;
        this.temperature = temperature;
        this.description = description;
    }

    displayWeatherInfo() {
        console.log(`Weather in ${this.city}: Temperature - ${this.temperature}°C, Description - ${this.description}`);
    }



  // TODO: Define the baseURL, API key, and city name properties
const baseURL = "https://api.openweathermap.org/data/2.5/forecast";
const apiKey = "205cda63c5c00fd2a76bff53053b4fee";
const city = "London"; "Austin";// Example city name

// Example function to fetch weather data by city name
async function getWeather(city) {
    const url = `${baseURL}?q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}

getWeather(city);
}


  // TODO: Create fetchLocationData method
  //private async fetchLocationData(query: string) 
  class WeatherService {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = "205cda63c5c00fd2a76bff53053b4fee";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
  }
     private async fetchLocationData(query: string): Promise<any> {
    const url = `${this.baseURL}?q=${query}&appid=${this.apiKey}`;

    try {
      const response = await fetch(url);
      
      // Handle non-200 responses
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in fetchLocationData:", error);
      throw error;  // Re-throw the error for handling upstream
    }
  }
}
  
  // TODO: Create destructureLocationData method
  interface Coordinates {
  lat: number;
  lon: number;
}
class WeatherService {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = "205cda63c5c00fd2a76bff53053b4fee";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
  }

  // Method to destructure location data
  private destructureLocationData(locationData: Coordinates): Coordinates {
    const { lat, lon } = locationData;
    return { lat, lon };
  }

  // Example method to fetch location data and destructure it
  private async fetchLocationData(query: string): Promise<void> {
    const url = `${this.baseURL}?q=${query}&appid=${this.apiKey}`;

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const data = await response.json();
      const locationData: Coordinates = {
        lat: data.coord.lat,
        lon: data.coord.lon
      };
      
      // Destructure location data
      const { lat, lon } = this.destructureLocationData(locationData);
      console.log(`Latitude: ${lat}, Longitude: ${lon}`);

    } catch (error) {
      console.error("Error in fetchLocationData:", error);
      throw error;  // Re-throw the error for handling upstream
    }
  }
}
  //private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  class WeatherService {
  private apiKey: string;
  private baseURL: string;
  private latitude: number;
  private longitude: number;

  constructor(latitude: number, longitude: number) {
    this.apiKey = "205cda63c5c00fd2a76bff53053b4fee";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    this.latitude = latitude;
    this.longitude = longitude;
  }

  // Method to build a geocode query based on latitude and longitude
  private buildGeocodeQuery(): string {
    return `${this.baseURL}?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`;
  }

  // Example method to fetch data using the built query
  private async fetchLocationData(): Promise<void> {
    const url = this.buildGeocodeQuery();

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error("Error in fetchLocationData:", error);
      throw error;  // Re-throw the error for handling upstream
    }
  }
}
   //private buildGeocodeQuery(): string {
    //return `${this.baseURL}?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`;
  

  // Example method to fetch data using the built query
//  private async fetchLocationData(): Promise<void> {
  //private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  interface Coordinates {
  lat: number;
  lon: number;
}

class WeatherService {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = "205cda63c5c00fd2a76bff53053b4fee";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
  }

  // Method to build a weather query based on coordinates
  private buildWeatherQuery(coordinates: Coordinates): string {
    const { lat, lon } = coordinates;
    return `${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
  }

  // Example method to fetch weather data using the built query
  private async fetchWeatherData(coordinates: Coordinates): Promise<void> {
    const url = this.buildWeatherQuery(coordinates);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error("Error in fetchWeatherData:", error);
      throw error;  // Re-throw the error for handling upstream
    }
  }
}
  //private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  interface Coordinates {
  lat: number;
  lon: number;
}

class WeatherService {
  private apiKey: string;
  private baseURL: string;
  private cityName: string;

  constructor(cityName: string) {
    this.apiKey = "205cda63c5c00fd2a76bff53053b4fee";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
    this.cityName = cityName;
  }

  // Method to build a geocode query based on the city name
  private buildGeocodeQuery(): string {
    return `${this.baseURL}?q=${encodeURIComponent(this.cityName)}&appid=${this.apiKey}`;
  }

  // Method to destructure location data from the API response
  private destructureLocationData(locationData: any): Coordinates {
    const { lat, lon } = locationData.coord;  // Adjust based on actual API response structure
    return { lat, lon };
  }
  // Method to fetch and destructure location data
  private async fetchAndDestructureLocationData(): Promise<Coordinates> {
    const url = this.buildGeocodeQuery();

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const data = await response.json();
    } catch (err) {
      console.log(err)
    }
  }

  //private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
   private buildWeatherQuery(coordinates: Coordinates): string {
    const { lat, lon } = coordinates;
    return `${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
  }

  // Method to fetch weather data based on coordinates
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const url = this.buildWeatherQuery(coordinates);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Error in fetchWeatherData:", error);
      throw error;  // Re-throw the error for handling upstream
    }
  }
}
  //private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  interface Weather {
  temperature: number;
  description: string;
  humidity: number;
}

class WeatherService {
  private apiKey: string;
  private baseURL: string;

  constructor() {
    this.apiKey = "205cda63c5c00fd2a76bff53053b4fee";
    this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
  }

  // Method to build a weather query based on coordinates
  private buildWeatherQuery(coordinates: Coordinates): string {
    const { lat, lon } = coordinates;
    return `${this.baseURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
  }

  // Method to fetch weather data based on coordinates
  private async fetchWeatherData(coordinates: Coordinates): Promise<any> {
    const url = this.buildWeatherQuery(coordinates);

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Error in fetchWeatherData:", error);
      throw error;  // Re-throw the error for handling upstream
    }
  }

  // Method to parse current weather from API response
  private parseCurrentWeather(response: any): Weather {
    const temperature = response.main.temp;
    const description = response.weather[0].description;
    const humidity = response.main.humidity;

    return {
      temperature,
      description,
      humidity
    };
  }
}
  //private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  async function getAndBuildForecast() {
  const weatherService = new WeatherService();
  const coordinates: Coordinates = { lat: 51.5074, lon: -0.1278 }; // Example coordinates for London

  try {
    const forecastData = await weatherService.fetchForecastData(coordinates);
    const forecasts = weatherService.buildForecastArray(weatherService.parseCurrentWeather(forecastData), forecastData.list);
    console.log(forecasts);
  } catch (error) {
    console.error('Error getting or building forecast:', error);
  }
}

  //private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async function displayWeatherForCity() {
  const weatherService = new WeatherService();

  try {
    const { currentWeather, forecast } = await weatherService.getWeatherForCity('London');
    console.log('Current Weather:', currentWeather);
    console.log('Forecast:', forecast);
  } catch (error) {
    console.error('Error getting weather data:', error);
  }
}

displayWeatherForCity();
  //async getWeatherForCity(city: string) {}
}

export default new WeatherService();
 */