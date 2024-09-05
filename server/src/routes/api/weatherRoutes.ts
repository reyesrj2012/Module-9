import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
// import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
// router.post('/', (req, res) => {
//   // TODO: GET weather data from city name
//   // TODO: save city to search history
// });
import express, { Request, Response } from 'express';
const router = express.Router();

// Assuming WeatherService and Coordinates are already defined and imported
const weatherService = new WeatherService();

// In-memory search history (you could replace this with a database)
const searchHistory: string[] = [];

// POST request to retrieve weather data by city name
router.post('/', async (req: Request, res: Response) => {
  const city = req.body.city;

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    // Fetch weather data for the city
    const { currentWeather, forecast } = await weatherService.getWeatherForCity(city);

    // Save city to search history
    searchHistory.push(city);

    // Return the weather data in the response
    return res.json({
      city,
      currentWeather,
      forecast,
      searchHistory
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return res.status(500).json({ error: 'Failed to retrieve weather data' });
  }
});


// // TODO: GET search history
router.get('/history', async (_req, res) => {
    HistoryService.getCities()
    .then(cities => {
        res.json(cities)
    })
});

// // * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req, res) => {});

export default router;
