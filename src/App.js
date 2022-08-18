import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country';
import { v4 as uuidv4 } from 'uuid';

function App() {

const url ='https://restcountries.com/v3.1/all';
const [countries,setCountries] = useState([]);
const [isLoading,setIsLoading] = useState(true);
const [error,setError] = useState(null);

const fetchData =async (url)=>{
setIsLoading(true);
try{

  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
 setCountries(data);
 setIsLoading(false);
 setError(null);
//  console.log(countries);

}catch(error){
  setIsLoading(false);
 setError(error);
//  console.log(error);

}

}

  useEffect(()=>{
    fetchData(url);
  },[])

  return (
    <div className="App">
     <h2 className='heading'>Search Your country</h2>
      <div className="">
        { isLoading && <h5>Loading...</h5>}
        { error && <h5>{error.message}</h5>}
      </div>

    <div className="country-container">
      {

        countries && countries.map((country)=>{

          const countriesNew = {country, id:uuidv4()}

          return <Country {...countriesNew} key={countriesNew.id}></Country>
        })
      }
    </div>
    </div>
  );
}

export default App;
