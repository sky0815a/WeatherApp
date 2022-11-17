import React, { useState } from 'react';
import axios from 'axios'




function TopRight({ data }) {
    console.log(data)

    // return "Get something"
    if (Object.keys(data).length > 0) {


        if (data.weather[0].main === 'Thunderstorm') {
            return "Try to avoid spiky metal materials when going outside, and stay indoor if possible"
        }

        else if (data.weather[0].main === 'Drizzle') {
            return "Get an umbrella or a raincoat"
        }

        else if (data.weather[0].main === 'Rain') {
            if (data.weather[0].description === 'light rain' ||
                data.weather[0].description === 'moderate rain') {
                return "Get an umbrella or a raincoat"
            }
            else {
                return "Get an umbrella or a raincoat and take take extra caution if driving"
            }
        }

        else if (data.weather[0].main === 'Snow') {
            return "Get an umbrella or a raincoat"
        }

        else if (data.weather[0].main === 'Clouds') {
            return "Let's cheer up with some music!"
        }

        else if (data.weather[0].main === 'Clear') {
            return "Get sunglasses!"
        }

        else {
            return "gettign something"
        }
    }
    else {
        return <div></div>
    }
}


export default TopRight;