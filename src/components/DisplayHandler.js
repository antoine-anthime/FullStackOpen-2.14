import React from 'react'
import CountryData from './CountryData'
import DisplayList from './DisplayList'

const DisplayHandler = ({countries, filter, handleButtonClick}) => {
    const toDisplay = toShow(countries, filter);
    
    if(toDisplay.length === 1){
      return (<CountryData country={toDisplay[0]}/>)
    }
    else if (toDisplay.length < 10){
      return (<DisplayList countries={toDisplay} handleButtonClick={handleButtonClick}/>)  
    }
    else{
      return (<p>Too much countries!</p>)
    }
  }
  
  
  function toShow(countries, filter) {
    const countriesToShow = countries.filter(country => country.name.toUpperCase().includes(filter.toUpperCase()))
    return countriesToShow
  }
  
export default DisplayHandler