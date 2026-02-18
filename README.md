# Atmosphere Pro 🌦️

Atmosphere Pro is a modern, glassmorphic weather application built with React, Vite, and Tailwind CSS. It provides real-time weather data with an immersive, dynamic user interface that changes based on weather conditions.

Live url:https://weather-api-c9fq.vercel.app/
## ✨ Features

- **Glassmorphism Design**: sleek, translucent UI with backdrop blurs and gradients.
- **Real-Time Data**: Powered by the [Weatherstack API](https://weatherstack.com/).
- **Dynamic Backgrounds**: The app's theme adapts to the weather (Sunny, Rainy, Night, Cloudy).
- **Recent Searches**: Automatically saves your last 5 searched cities for quick access.
- **Unit Conversion**: Toggle between Celsius (°C) and Fahrenheit (°F) instantly.
- **Visual Data**: Progress bars for Wind, Humidity, and Pressure.
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Glass Utility Classes
- **API**: Weatherstack
- **State Persistence**: LocalStorage

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v16 or higher recommended).
- A free API Key from [Weatherstack](https://weatherstack.com/signup/free).

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd weather
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure API Key**:
    - Create a `.env` file in the root directory.
    - Add your Weatherstack API key:
      ```env
      VITE_API_KEY=your_actual_api_key_here
      ```

4.  **Run the Development Server**:
    ```bash
    npm run dev
    ```

5.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

- `src/components/`: Reusable UI components (WeatherCard, SearchBar, etc.)
- `src/services/`: API interaction logic (`weatherService.js`).
- `src/utils/`: Helper functions (background mapping, conversions).
- `src/App.jsx`: Main application logic and state management.
- `src/index.css`: Global styles and Tailwind directives.

## 🎨 Design

The "Glass" effect is achieved using CSS `backdrop-filter: blur()`, semi-transparent backgrounds, and white borders. The dynamic backgrounds use Tailwind's `bg-gradient-to-br` utilities mapped to weather codes.

## 📄 License

This project is open-source and available under the MIT License.
