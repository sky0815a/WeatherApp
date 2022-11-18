function RightBottomTempWarning({ data }) {

    if (Object.keys(data).length > 0) {
        let feelsLike = Math.round((data.main.feels_like - 273.15) * 1.8 + 32)

        if (120 < feelsLike) {
            return <div>Caution, Extreme Head Danger!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Let someone knows where you are going
                <br/>If you are driving, check if you have enough gasoline
                <br/>Take some water bottles just in case
                <br/>Have your phone fully charged</div>
                
        }

        else if (110 < feelsLike) {
            return <div>Becareful of Heatstroke!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Let someone knows where you are going
                <br/>Take some water bottles with you. Stay hydrated
                <br/>Find shade and stay off the direct sunlight
                <br/>Cover your body with light clothes</div>
        }

        else if (100 < feelsLike) {
            return <div>It's Very Hot Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Don't be exposed under the direct sunlight for too long
                <br/>Take some water bottles with you. Stay hydrated.
               </div>
        }

        else if (90 < feelsLike) {
            return <div>It's Quite Hot Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Make sure you wear light clothes for hot Summer</div>
        }

        else if (85 < feelsLike) {
            return <div>It's Pretty Hot Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>You should wear light clothes that is not dark color which absorb heats</div>
        }

        else if (80 < feelsLike) {
            return <div>It's hot Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>It is best to wear light and airy clothes, which will allow your skin to breathe</div>
        }

        else if (75 < feelsLike) {
            return <div>It's little bit hot Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>You should wear light clothes</div>
        }

        else if (70 < feelsLike) {
            return <div>It's warm Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Jeans & Shorts, thin long sleeve shirts or striped tops would be good idea</div>
        }
        
        else if (65 < feelsLike) {
            return <div>It's little bit chilly Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Go for the long-sleeved casual cotton t-shirts</div>
        }

        else if (60 < feelsLike) {
            return <div>It's little bit cold Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>You can wear hoodie or sweatshirts</div>
        }

        else if (50 < feelsLike) {
            return <div>It's quite breeze Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Wear light inner cloth & wear light outter, and maybe light coat as well</div>
        }

        else if (40 < feelsLike) {
            return <div>It's cold outside Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Take your gorgeous coat out. Time to wear early Spring & late Fall wear
                <br/>Maybe gloves would be good idea too</div>
        }

        else if (30 < feelsLike) {
            return <div>It's very cold outside Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Make sure you wear heavy, warm winter clothes
                <br/>Maybe gloves would be good idea too</div>
        }

        else if (10 < feelsLike) {
            return <div>It's very very cold outside Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Make sure you wear heavy, warm winter clothes
                <br/>You should wear gloves too</div>
        }

        else if (-10 < feelsLike) {
            return <div>It's extremely cold outside Today!
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Make sure you wear heavy, warm winter clothes
                <br/>You should wear gloves too</div>
        }

        else if (-70 < feelsLike) {
            return <div>Warning, It's extremely cold outside.
                <br/><br/>*** Things to wear & check before going outside ***
                <br/><br/>Make sure you wear heavy, warm winter clothes
                <br/>Let someone knows where you are going
                <br/>If you are driving, check if you have enough gasoline</div>
        }

        else {
            return <div>None of the Above</div>
        }
    }
}

export default RightBottomTempWarning;