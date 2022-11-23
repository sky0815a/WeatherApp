Weather App

## Project Description

A weather app that remind you not only the weather but also relevant outfits or things for today.

## Project Links

- https://github.com/sky0815a/WeatherApp
- https://weather-app-sky0815a.vercel.app/
- [demo recording]()

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
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, Bootstrap, Tailwind CSS, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
