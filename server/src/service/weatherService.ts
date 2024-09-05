import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
latitude: number;
longitude: number; 
}

// TODO: Define a class for the Weather object
class Weather {
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
  private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {}
}

export default new WeatherService();
