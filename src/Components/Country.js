import React from 'react'

const Country = (props) => {

    // console.log(props);

    // const {country}=props; //  props er vitor e county and id 2 ta obj silo,country k alada kora hoyasa
    const {name,flags,capital,population,area}=props.country;

    const removeCountry =(name)=>{
        // console.log(props.onRemoveCountry);
        props.onRemoveCountry(name);
    }
  return (
    <div className='card'>
        <img src={flags.png} alt={name.common} />
        <h4>{name.common}</h4>
        <p>Population:  {population}</p>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
       <div className="">
       <button onClick={()=>{
            removeCountry(name.common)
        }}>Remove Country</button>
       </div>
        
    </div>
  )
}

export default Country