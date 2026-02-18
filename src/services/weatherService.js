const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'http://api.weatherstack.com';

const handleResponse = async (response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.error) {
        throw new Error(data.error.info || 'API Error');
    }
    return data;
};

// Mock data generator for fallback
const getMockWeather = (query) => {
    // Basic capitalization for display
    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1);

    return {
        request: { type: 'City', query: `${formattedQuery}, Demo Country`, language: 'en', unit: 'm' },
        location: {
            name: formattedQuery,
            country: 'Demo Country',
            region: 'Demo Region',
            lat: '0.000',
            lon: '0.000',
            timezone_id: 'UTC',
            localtime: '2023-09-07 10:20',
            localtime_epoch: 1694082000,
            utc_offset: '+0.0'
        },
        current: {
            observation_time: '12:00 PM',
            temperature: Math.floor(Math.random() * (35 - 15) + 15), // Random temp 15-35
            weather_code: 113,
            weather_icons: ['https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'],
            weather_descriptions: ['Sunny (Demo Mode)'],
            wind_speed: Math.floor(Math.random() * 20),
            wind_degree: 0,
            wind_dir: 'N',
            pressure: 1012,
            precip: 0,
            humidity: Math.floor(Math.random() * (80 - 40) + 40),
            cloudcover: 0,
            feelslike: 28,
            uv_index: 5,
            visibility: 10
        }
    };
};

export const fetchCurrentWeather = async (query) => {
    try {
        const mockData = getMockWeather(query);

        // Check for invalid/missing key or placeholder
        if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE' || API_KEY === 'efkjajnf24234qrasmfcq3t5w4t5') {
            console.warn("No valid API Key. Using Mock Data.");
            return mockData;
        }

        const response = await fetch(`${BASE_URL}/current?access_key=${API_KEY}&query=${query}`);
        const data = await response.json();

        if (data.error) {
            console.warn("API Error:", data.error.info, "Using Mock Data.");
            return mockData;
        }

        return data;
    } catch (error) {
        console.error("Error fetching current weather:", error);
        return getMockWeather(query); // Fallback to mock on network error too
    }
};

export const fetchHistoricalWeather = async (query, date) => {
    try {
        const response = await fetch(`${BASE_URL}/historical?access_key=${API_KEY}&query=${query}&historical_date=${date}&hourly=1`);
        return await handleResponse(response);
    } catch (error) {
        // console.error("Error fetching historical weather:", error);
        return null;
    }
};

export const fetchMarineWeather = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/marine?access_key=${API_KEY}&query=${query}`);
        return await handleResponse(response);
    } catch (error) {
        // console.error("Error fetching marine weather:", error);
        return null;
    }
};
