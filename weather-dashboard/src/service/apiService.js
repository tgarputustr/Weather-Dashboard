import axios from 'axios';

const API_KEY = '7c224b929bdbaba33357449e6473d7fb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = (city) => {
    return axios.get(`${BASE_URL}/weather`, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric'
        }
    });
};

export const getWeatherForecast = (city) => {
    return axios.get(`${BASE_URL}/forecast/daily`, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'metric',
            cnt: 7
        }
    });
};