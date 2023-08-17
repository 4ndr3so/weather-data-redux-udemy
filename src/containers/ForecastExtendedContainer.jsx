import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ForecastExtended from '../components/ForecastExtended'
import { getForecastDataFromCities,getCity } from '../reducer/'

 class ForecastExtendedContainer extends Component {
  static propTypes = {}

  render() {
    const {city, forecastData}=this.props;
    //console.log(forecastData,city)
    return (
      
      <div><ForecastExtended city={city} forecastData={forecastData}></ForecastExtended></div>
    )
  }
}

const mapStateToProps=state=>({city:getCity(state),forecastData: getForecastDataFromCities(state)})
export default connect(mapStateToProps,null)(ForecastExtendedContainer)