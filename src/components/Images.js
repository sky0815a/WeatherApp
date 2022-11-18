function Images({ data }) {
    if (Object.keys(data).length > 0) {
        if (data.weather[0].main === 'Thunderstorm') {
            return <img
                src="https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
                width="400" height="250"
                alt="Thunderstorm"
                />
        }
    
        else if (data.weather[0].main === 'Snow') {
            return <img className="image"
                src="https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                width="400" height="250"
                alt="Snow"
                />
        }

        else if (data.weather[0].main === 'Drizzle') {
            return <img className="image"
                src="https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                width="400" height="250"
                alt="Drizzle"
                />
        }

        else if (data.weather[0].main === 'Clouds') {
            return <img className="image"
                src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80"
                width="400" height="250"
                alt="Clouds"
                />
        }

        else if (data.weather[0].main === 'Clear') {
            return <img className="image"
                src="https://images.unsplash.com/photo-1558418294-9da149757efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                width="400" height="250"
                alt="Clear"
                />
        }

        else {
            return <div></div>
        }
    }
    else {
        <div></div>
    }
}

export default Images;