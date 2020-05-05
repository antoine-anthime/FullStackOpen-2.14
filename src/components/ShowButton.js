import React from 'react'

const ShowButton = (props) => {
    return (
        <button type='button' value={props.country.name} onClick={props.handleButtonClick}>Show more</button>
    )
}

export default ShowButton