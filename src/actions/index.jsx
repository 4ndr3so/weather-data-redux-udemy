import transformForecast from "../services/transformForecast";
import transformWeather from "../services/transformWeather";

export const SET_CITY="SET_CITY";
export const SET_FORESCAST_DATA="SET_FORESCAST_DATA"

//export const SET_WEATHER = "SET_WEATHER";


export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const setCity=(payload)=>({type:SET_CITY,payload})
const setForecasData=(payload)=>({type:SET_FORESCAST_DATA,payload})

export const getWeatherCity = (payload) => ({
    type: GET_WEATHER_CITY,
    payload,
  });
  export const setWeatherCity = (payload) => ({
    type: SET_WEATHER_CITY,
    payload,
  });

const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url = "http://api.openweathermap.org/data/2.5/forecast";
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity= payload=>{
     return dispatch=>{
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        

        //activar indicador busqueda de datos
       dispatch(setCity(payload))

       return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                //console.log(weather_data);
                const forecastData = transformForecast(weather_data);
               // console.log(forecastData);
               // this.setState({ forecastData });
                //se establece datos
                dispatch(setForecasData({city:payload,forecastData}))
            }
        );
     }
}


export const  setWeather=payload=>{

return dispatch=>{
    payload.forEach(city => {

        dispatch(getWeatherCity(city));

        const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const weather = transformWeather(weather_data);
            dispatch(setWeatherCity({ city, weather }))
        });
    })
}    
}