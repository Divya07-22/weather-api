export const getBackgroundClass = (weatherCode, isDay = 'yes') => {
    // Default to a nice blue gradient if unknown
    const defaultBg = 'from-blue-500 to-blue-900';

    // Weatherstack codes: https://weatherstack.com/site_resources/weather_codes.json
    // Simplified mapping
    const code = Number(weatherCode);

    // Night time override (if provided usually by is_day property 'no')
    if (isDay === 'no') {
        return 'from-gray-900 via-indigo-900 to-black'; // Starry night feel
    }

    // Sunny / Clear
    if (code === 113) {
        return 'from-blue-400 via-blue-300 to-yellow-200'; // Sunny Day
    }

    // Cloudy / Overcast
    if ([116, 119, 122].includes(code)) {
        return 'from-gray-400 to-gray-600'; // Cloudy
    }

    // Mist / Fog
    if ([143, 248, 260].includes(code)) {
        return 'from-slate-300 to-slate-500'; // Foggy
    }

    // Rain / Drizzle (Lots of codes for rain, covering common ones)
    if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 311, 314, 353, 356, 359].includes(code)) {
        return 'from-slate-700 to-blue-800'; // Rainy
    }

    // Snow
    if ([227, 230, 323, 326, 329, 332, 335, 338, 368, 371].includes(code)) {
        return 'from-blue-100 to-white text-gray-800'; // Snowy (might need text color adjustment)
    }

    // Thunder
    if ([386, 389, 392, 395].includes(code)) {
        return 'from-gray-900 to-purple-900'; // Stormy
    }

    return defaultBg;
};
