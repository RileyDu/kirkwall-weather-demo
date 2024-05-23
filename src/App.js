import logo from './logo.svg';
import './App.css';
import { getWeatherData } from './backend/Graphql_helper';
import { useState, useEffect, } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getWeatherData();
      setWeatherData(response.data.weather_data);
      setIsLoading(false);
    } catch (err) {
      console.error('Failed to fetch list data:', err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hi there world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {isLoading ? <p>Loading...</p> : weatherData.map((item) => <p>The high temp for {item.date} was {item.max_temperature} </p>)}
    </div>
  );
}

export default App;
