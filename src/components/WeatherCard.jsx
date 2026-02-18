import React, { useState } from 'react';

const WeatherCard = ({ data }) => {
    const [unit, setUnit] = useState('C'); // 'C' or 'F'

    if (!data) return null;

    const { current, location } = data;

    // Helper conversion
    const getTemp = (tempC) => {
        if (unit === 'F') {
            return Math.round((tempC * 9 / 5) + 32);
        }
        return tempC;
    };

    return (
        <div className="glass-card rounded-3xl p-8 text-center w-full max-w-md mx-auto mb-6 transform hover:scale-[1.02] transition-transform duration-300 relative">
            {/* Unit Toggle */}
            <button
                onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
                className="absolute top-4 right-4 glass-input w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm hover:bg-white/30 transition-colors"
                title="Toggle Unit"
            >
                °{unit}
            </button>

            <h2 className="text-3xl font-bold mb-2">{location.name}</h2>
            <p className="text-white/80 mb-6">{location.country}</p>

            <div className="flex flex-col items-center mb-6">
                <img src={current.weather_icons[0]} alt={current.weather_descriptions[0]} className="w-24 h-24 mb-4 rounded-xl shadow-lg" />
                <h1 className="text-6xl font-bold mb-2 transition-all duration-300">
                    {getTemp(current.temperature)}°{unit}
                </h1>
                <p className="text-xl capitalize">{current.weather_descriptions[0]}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                <div className="flex flex-col items-center group">
                    <span className="text-white/60 text-sm mb-1">Wind</span>
                    <span className="font-semibold">{current.wind_speed} km/h</span>
                    {/* Visual Bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-300 rounded-full" style={{ width: `${Math.min(current.wind_speed, 100)}%` }}></div>
                    </div>
                </div>
                <div className="flex flex-col items-center group">
                    <span className="text-white/60 text-sm mb-1">Humidity</span>
                    <span className="font-semibold">{current.humidity}%</span>
                    {/* Visual Bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-300 rounded-full" style={{ width: `${current.humidity}%` }}></div>
                    </div>
                </div>
                <div className="flex flex-col items-center group">
                    <span className="text-white/60 text-sm mb-1">Pressure</span>
                    <span className="font-semibold">{current.pressure} mb</span>
                    {/* Visual Bar (normalized somewhat arbitrarily around 1013) */}
                    <div className="w-full h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-blue-300 rounded-full" style={{ width: `${Math.min((current.pressure / 1050) * 100, 100)}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
