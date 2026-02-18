const API_KEY = '3023833f04314a5ce0e0d796ad53d354';
const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=New York`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.success === false) {
            console.error("API Error:", data.error);
        } else {
            console.log("Success! Temp:", data.current.temperature);
        }
    })
    .catch(err => console.error(err));
