import React, {useState} from 'react';
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99ea53a733d2dfeb06d4511846b3dda8`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>
      </div>
       
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          {/* F = (K - 273.15) * 1.8 + 32 */}
          <div className="temp">
            {data.main ? <h1>{Math.round((data.main.temp-273.15)*1.8+32)}F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{Math.round((data.weather[0].main-273.15)*1.8+32)}</p> : null}
            <p>Feels Like</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}F</p> : null}
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
    </div>
    
  );
}

export default App;


// Reference 33min
// https://www.youtube.com/watch?v=UjeXpct3p7M&ab_channel=CodeCommerce