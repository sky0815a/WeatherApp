import React, { useState } from 'react';
import axios from 'axios'
import TopRight from './components/TopRight'

import './App.css';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99ea53a733d2dfeb06d4511846b3dda8`
  // API Main Domain https://openweathermap.org/

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      // Clear the Enter Box
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className='LeftSide'>
        {/* Left Top Block Start */}
        <div className='LeftTop'>
          LeftTop
          {/* <img src={fewclouds} alt="Left Top"/> */}
        </div>

        {/* Left Bottom Block Start */}
        <div className='LeftBottom'>
          <div className='search'>
            <input
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder='Enter Location'
              type='text' />
          </div>

          <div className="location">
            <p>{data.name}</p>
          </div>

          {/* F = (K - 273.15) * 1.8 + 32 */}
          <div className="temp">
            {data.main ? <h1>{Math.round((data.main.temp - 273.15) * 1.8 + 32)}F</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            <p>Feels Like</p>
          </div>

          <div className="feels">
            {data.main ? <p>{Math.round((data.main.feels_like - 273.15) * 1.8 + 32)}F</p> : null}
          </div>

          <div className='humidity'>
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>humidity</p>
          </div>

          <div className='wind'>
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>

      {/* Right Side Start */}
      <div className='RightSide'>
        <div className='RightTop'>
          Top right
          <div className="thingsToGet">
            <TopRight />
          </div>
        </div>
        <div className='RighBottom'>
          Right Bottom
        </div>
      </div>
    </div>

  );
}

export default App;


// Reference 33min
// https://www.youtube.com/watch?v=UjeXpct3p7M&ab_channel=CodeCommerce