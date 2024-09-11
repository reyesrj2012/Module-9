import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  latitude: number;
  longitude: number; 
}

// TODO: Define a class for the Weather object
export class Weather {
    city: string;
    temperature: number;
    windSpeed: string;
    humidity: string;
    description: string;

    constructor(city: string, temperature: number, windSpeed: string, humidity: string, description: string) {
        this.city = city;
        this.temperature = temperature;
        this.windSpeed = windSpeed;
        this.humidity = humidity;
        this.description =description;
    }

    displayWeatherInfo() {
        console.log(`Weather in ${this.city}: Temperature - ${this.temperature}°C, Description - ${this.description}`);
    }
}

// TODO: Complete the WeatherService class
/* class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
    private apiKey: string = "205cda63c5c00fd2a76bff53053b4fee";
    private baseURL: string  = "https://api.openweathermap.org/data/2.5/forecast";
    private cityName: string = "London";

  // TODO: Create fetchLocationData method
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

  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    const { latitude, longitude } = locationData;
    return { latitude, longitude };
  }

  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`;
  }

  // TODO: Create buildWeatherQuery method
    private buildWeatherQuery(coordinates: Coordinates): string {
    const { latitude, longitude } = coordinates;
    return `${this.baseURL}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
  }

  // TODO: Create fetchAndDestructureLocationData method
  private fetchAndDestructureLocationData(): Promise<Coordinates> {
    const url = this.buildGeocodeQuery();
      return fetch(url)
      .then(res => res.json())
      .then(data => {
        return this.destructureLocationData({
          latitude: data[0].lan,
          longitude: data[0].lon
        })
      })
  }

  // TODO: Create fetchWeatherData method
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


  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any): Weather {
    const temperature = response.main.temp;
    const humidity = response.main.humidity;
    const windSpeed = response.wind.speed;
    const description =response.description;

    return new Weather(this.cityName, temperature, windSpeed, humidity, description)
  }

  // TODO: Complete buildForecastArray method
  //IS THIS A COMPLETE FUNCTION???
   private buildForecastArray(currentWeather: Weather, weatherData: any[]) {
     // Initialize an empty array to store the forecast data
  const forecastArray: any[] = [];

  // Push current weather to the forecast array
  forecastArray.push({
    date: new Date(),
    temperature: currentWeather.temperature,
    humidity: currentWeather.humidity, 
    windSpeed: currentWeather.windSpeed, 
  });
   }
//Is this function complete? 

  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
      this.cityName = city;

      this.fetchAndDestructureLocationData()
      .then(coordinates => {
       this.fetchWeatherData(coordinates)
        .then(data => {
          const weatherData = this.parseCurrentWeather(data)

          // 
        })
      })



  }
}

export default new WeatherService();
 */