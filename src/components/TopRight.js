import React, { useState } from 'react';
import axios from 'axios'




function TopRight() {

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

    // return "Get something"
    if (data.weather[0].main === 'clear sky') {
        return "Get sunglasses"
    }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }

    // else if (data.weather[0].main === 'rain') {
    //     return "Get an unbrella or a raincoat"
    // }
}


export default TopRight;