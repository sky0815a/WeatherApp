function TopRight({ data }) {

    if (Object.keys(data).length > 0) {

        if (data.weather[0].main === 'Thunderstorm') {
            return "Try to avoid spiky metal materials when going outside, and stay indoor if possible"
        }

        else if (data.weather[0].main === 'Drizzle') {
            return "Get an umbrella or a raincoat before you go outside"
        }

        else if (data.weather[0].main === 'Rain') {
            if (data.weather[0].description === 'light rain' ||
                data.weather[0].description === 'moderate rain') {
                return "Get an umbrella or a raincoat before you go outside"
            }
            else {
                return "Take take extra caution if driving"
            }
        }

        else if (data.weather[0].main === 'Snow') {
            if (data.weather[0].description === 'Heavy snow' ||
                data.weather[0].description === 'Heavy shower snow' ||
                data.weather[0].description === 'Shower snow') {
                return "It's snowing hard outside. Take extra caution or stay inside"
            }
            else {
                return "Happy snowday! How about hot-chocolate today?"
            }
        }

        else if (data.weather[0].main === 'Clouds') {
            return "Let's cheer up with some music!"
        }

        else if (data.weather[0].main === 'Clear') {
            return "Get sunglasses!"
        }

        else {
            return ""
        }
    }
    else {
        return <div></div>
    }
}

export default TopRight;