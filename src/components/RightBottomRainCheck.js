function RightBottomRainCheck({ data }) {
    if (Object.keys(data).length > 0) {
        if (data.weather[0].main === 'Drizzle' || data.weather[0].main === 'Rain') {
            return <div>Take an umbrella or waterproff outwear</div>
        }
    }
}

export default RightBottomRainCheck;