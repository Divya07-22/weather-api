import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import RecentSearches from './components/RecentSearches'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'
import MarineCard from './components/MarineCard'
import { fetchCurrentWeather } from './services/weatherService'
import { getBackgroundClass } from './utils/weatherUtils'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bgClass, setBgClass] = useState('from-blue-500 to-blue-900');
  const [recentSearches, setRecentSearches] = useState([]);

  // Load history on mount
  useEffect(() => {
    const saved = localStorage.getItem('recent_searches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
    handleSearch('New York'); // Initial load
  }, []);

  const addToHistory = (query) => {
    // Basic formatting
    const formatted = query.charAt(0).toUpperCase() + query.slice(1);

    setRecentSearches(prev => {
      // Remove duplicates (case insensitive check) and add new to top
      const filtered = prev.filter(c => c.toLowerCase() !== formatted.toLowerCase());
      const newHistory = [formatted, ...filtered].slice(0, 5); // Keep max 5
      localStorage.setItem('recent_searches', JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearHistory = () => {
    localStorage.removeItem('recent_searches');
    setRecentSearches([]);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCurrentWeather(query);
      setWeatherData(data);

      // Update Background
      if (data && data.current) {
        const newBg = getBackgroundClass(data.current.weather_code, data.current.is_day);
        setBgClass(newBg);
      }

      // Add to history only if request was successful and has query in response
      if (data && !data.error && data.request && data.request.query) {
        // Use the input query for history so it's what the user typed (cleaned up)
        addToHistory(query);
      } else if (data && !data.error && data.location) {
        // Fallback to location name
        addToHistory(data.location.name);
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-1000 bg-gradient-to-br ${bgClass}`}>
      {/* Dynamic Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="z-10 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 drop-shadow-lg text-white">
          Atmosphere <span className="font-light">Pro</span>
        </h1>

        <SearchBar onSearch={handleSearch} />

        <RecentSearches
          searches={recentSearches}
          onSearch={handleSearch}
          onClear={clearHistory}
        />

        {loading && (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        )}

        {error && (
          <div className="glass-card bg-red-500/20 border-red-500/50 p-4 rounded-xl mb-8 text-center text-red-100">
            {error}
          </div>
        )}

        {weatherData && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
            <div className="md:col-span-2">
              <WeatherCard data={weatherData} />
            </div>

            <ForecastCard title="Historical Trends" data={null} />
            <MarineCard data={null} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
