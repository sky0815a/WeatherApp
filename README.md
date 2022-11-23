Weather App

## Project Description

A weather app that remind you not only the weather but also relevant outfits or things for today.

## Project Links

- https://github.com/sky0815a/WeatherApp
- https://weather-app-sky0815a.vercel.app/
- https://www.youtube.com/watch?v=3XLRvZCgCKE&ab_channel=sky0815a

## Wireframes & React Component Hierarchy

Upload images of wireframes and component hierarchy to cloudinary (or similar) and add the link here with a description of the specific wireframe.

- [wireframes]
    https://i.imgur.com/QUsAxBN.png
    
    https://i.imgur.com/kNX57VH.png
  
- [react architecture]
    https://i.imgur.com/WFm5I6M.png

API
- https://openweathermap.org/current

### MVP/PostMVP

User type their City & can see followings:
    Current weather image
    Current weater temperatures & humidity & wind speed
    How it looks like outside
    Recommanadation for outfit for today, depends on the weather condition
    Things to prepare before going outside (ex: umbrella if rainning outisde)

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page


## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Images | Return weater image base on the data called| 
| RightBottomRainCheck | Return outfit recommandation & things to pack before going outside base on the Feel-Like Temperature | 
| RightBottomTempWarning| Return actual Feel-Like Temperature | 
| TopRight| Weather outside decription & caution alert | 

## Time Frames


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Axios, React


## Code Snippet

	Converting Temp Unit, F = (K - 273.15) * 1.8 + 32
	Math.round((data.main.temp - 273.15) * 1.8 + 32)}F°


## Issues and Resolutions
	Poor artistic app decorations


## Future plahns
	Making the serach bar functional with Zip code
