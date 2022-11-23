import React, { useState } from 'react';
import axios from 'axios'
import TopRight from './components/TopRight'
import RightBottomTempWarning from './components/RightBottomTempWarning'
import RightBottomRainCheck from './components/RightBottomRainCheck'
import Images from './components/Images'
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
      <h1 className='Header'>Weather APP
        <div className='search'>
          <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type='text' />
        </div>
      </h1>

      <div className='main'>
        {/* Left Top Components Start */}
        <div className='LeftTop'>
          <Images data={data} />
        </div>

        {/* Right Top Components Start */}
        <div className='RightTop'>
          <div>Today, we have:</div>
          <div>{data.weather ? <p>{data.weather[0].description} outside</p> : null}</div>
          <div className="thingsToGet">
            <TopRight data={data} />
          </div>
        </div>

        {/* Left Bottom Block Start */}
        <div className='LeftBottom'>
          <div className="location">
            <p>{data.name}</p>
          </div>

          {/* Converting Temp Unit, F = (K - 273.15) * 1.8 + 32 */}
          <div className="temp">
            {data.main ? <h1>{Math.round((data.main.temp - 273.15) * 1.8 + 32)}F°</h1> : null}
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
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

        <div className='RightBottom'>
          <div>Today, it feels like</div>
          <div className="feels">
            {data.main ? <h1>{Math.round((data.main.feels_like - 273.15) * 1.8 + 32)}F°</h1> : null}
          </div>
          <div className="thingsToGet">
            <RightBottomTempWarning data={data} />
            <RightBottomRainCheck data={data} />
          </div>
        </div>
      </div>
      {/* <div className='footer'>Footer Not Deployed at this time</div> */}
    </div>
  );
}

export default App;