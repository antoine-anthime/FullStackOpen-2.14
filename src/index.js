//Imports//
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import FilterInput from './components/FilterInput'
import DisplayHandler from './components/DisplayHandler'

const App = () => {
  const [ newFilter, setNewFilter ] = useState('')
  const [ countries, setNewCountries ] = useState([])
  
  const loadCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
          setNewCountries(response.data)
      })
  }
  useEffect(loadCountries, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handleButtonClick = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Search for country</h2>
      <FilterInput newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <DisplayHandler countries={countries} filter={newFilter} handleButtonClick={handleButtonClick}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);