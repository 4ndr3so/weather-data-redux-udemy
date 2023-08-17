import { createSelector } from "@reduxjs/toolkit";
import { SET_FORESCAST_DATA,GET_WEATHER_CITY,SET_WEATHER_CITY } from "../actions";
import { city } from "./city";

import toPairs from "lodash.topairs";


export const cities=(state={}, action)=>{
    switch(action.type){
        case SET_FORESCAST_DATA:{
            //  console.log(action.payload)
              const {city, forecastData} = action.payload;
              return{...state, [city]:{...state[city], forecastData}}
      }
      case GET_WEATHER_CITY:{
          const city =action.payload;
          return{...state,[city]:{...state[city],weather:null}}
      }
      case SET_WEATHER_CITY:{
          const {city, weather} =action.payload;
          return{...state,[city]:{...state[city],weather}}
      }
        default:
            return state;
    }
}

export const getForecastDataFromCities =createSelector((state,city)=> state[city] && state[city].forecastData,forecastData=>forecastData);

const fromCitiesToArray =cities=>(toPairs(cities).map(([key,value]) => ({key, name:key, data:value.weather})))


export const getWeatherCities=createSelector(state =>fromCitiesToArray(state),cities=>cities)

