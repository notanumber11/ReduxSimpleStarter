import axios from "axios"
const API_KEY = "eeba7a28ec3990117a83f6eb157a37fd"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city){
    
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url)
    console.log("Fetching city: " + city)
    return{
        type: FETCH_WEATHER,
        payload: request
        
    };
}