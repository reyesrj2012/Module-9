import { Weather } from './service/weatherService.js';
import dotenv from 'dotenv';
import express from 'express';
import historyService from './service/historyService.js';
dotenv.config();
historyService.addCity("string")
// Import the routes
import routes from './routes/index.js';
//import weatherService from './service/weatherService.js';

const app = express();

const PORT = process.env.PORT || 3001;

// TODO: Serve static files of entire client dist folder
app.use(express.static("../client/dist"))

// TODO: Implement middleware for parsing JSON and urlencoded form data
app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded form data
// TODO: Implement middleware to connect the routes
app.use(routes);

// Start the server on the port
app.listen(PORT, () => {
    var myWeather = new Weather('London', 5,"65",'65', 'cloudy') 
    myWeather.displayWeatherInfo()
    console.log(`Listening on PORT: ${PORT}`)
});
