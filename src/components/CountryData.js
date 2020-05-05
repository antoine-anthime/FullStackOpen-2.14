import React from 'react';
import WeatherDisplayer from './WeatherDisplayer'

const CountryData = ({country}) => {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital : {country.capital}</p>
        <p>Population : {country.population}</p>
        <h4>languages</h4>
        <ul>
        {country.languages.map(language =>
          <li key={language.iso639_1}>{language.name}</li>
        )}
        </ul>
        <img src={country.flag} alt='flag' width='100px'/>
        <WeatherDisplayer country={country} />
      
      </div>
    )
  }

export default CountryData;