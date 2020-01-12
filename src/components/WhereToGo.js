import React, {useState} from 'react';
import './WhereToGo.css';
import { countries } from "../jsonData/countries";

function WhereToGo(props) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const pickCountry = () => {
    setSelectedCountry(countries[Math.floor(Math.random() * countries.length)].name);
  }  
  return (
    <div className="travel">
    <h2>{props.msg}</h2>
    <button onClick={pickCountry}>Get me somewhere</button>
    {selectedCountry && 
    <span>You should go to <strong>{selectedCountry}</strong> </span>
    }
  </div>
  );
}

export default WhereToGo;
