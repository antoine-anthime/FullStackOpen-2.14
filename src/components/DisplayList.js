import React from 'react'
import ShowButton from './ShowButton'
const DisplayList = ({countries, handleButtonClick}) => {
    return (
        countries.map(country =>
          <div key={country.name}>
            <strong>{country.name}</strong><ShowButton country={country} handleButtonClick={handleButtonClick}/>
            <br/>
          </div>
        )
      )
}
export default DisplayList