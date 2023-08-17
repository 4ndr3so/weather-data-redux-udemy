import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCity, setSelectedCity,setWeather } from '../actions';
import LocationList from '../components/LocationList';
import { getCity, getWeatherCities } from '../reducer';

 class LocationListContainer extends Component {

    componentDidMount(){
      const {setWeather ,setSelectedCity ,cities  ,city} =this.props
        this.props.setWeather(this.props.cities);
        this.props.setCity(this.props.city)
    }

  static propTypes = {
    
  }

  handleSelectedLocation = city => {
   // console.log(`handleSelectedLocation ${city}`);
    this.props.setSelectedCity(city);
  }

  render() {
    return (
      <div> <LocationList cities={this.props.citiesWeather} 
      onSelectedLocation={this.handleSelectedLocation} ></LocationList></div>
    )
  }
}

const mapDispatchPropsActions=dispatch=>({
    setCity:value=>dispatch(setSelectedCity(value)),
    setWeather: cities=> dispatch(setWeather(cities))
  });
 
  const mapStateToProps=state => ({
    citiesWeather:getWeatherCities(state),
    city:getCity(state)
  })
  
  export default connect(mapStateToProps, mapDispatchPropsActions)(LocationListContainer);