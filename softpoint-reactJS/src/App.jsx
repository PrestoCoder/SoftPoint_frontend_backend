import { useState, useEffect, useContext } from 'react';
import countries from './JSON/countries.json';
import Dropdown from './components/Dropdown';
import CountryContext from './context/CountryContext';


function App() {
  const {country, setCountry} = useContext(CountryContext);
  const {isDropVis, setIsDropVis} = useContext(CountryContext);
  
  const countryList = countries;
  const getFlagEmoji = countryCode=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt(0)))

  return (
      <div className = "w-1/2 h-full bg-stone-300 mx-auto">
        <div className='my-60 h-full w-3/4 bg-sky-600 mx-auto flex flex-col  items-center p-5'>

          <Dropdown countryList={countryList} isDropVis={isDropVis}/>

          <div className='flex justify-around w-2/4'>
            <button onClick={()=>setIsDropVis(!isDropVis)}> 
              {getFlagEmoji(country.toLowerCase())} &nbsp; {countryList[country]["calling_code"]}
            </button>
            <input className="px-2" type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="(000)000-0000" required />
          </div>
          
          <div>
            <button type="submit" className=' m-2 items-center bg-slate-400 px-4 py-2 rounded-md'>Submit</button>
          </div>

        </div>
      </div>    
  );
}

export default App;
