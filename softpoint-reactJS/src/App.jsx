import { useState, useEffect } from 'react';
import countries from './JSON/countries.json';

function App() {
  const countryList = countries;
  console.log(countryList);
  const getFlagEmoji = countryCode=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt(0)))

  return (
    <div className = "w-full">
      <form action="#">
        <div className='w-1/5 mx-auto flex-wrap my-80 '>
          <select name="countryList" id="countryList">
            {Object.keys(countryList).map(countryCode => ( 
              <option key={countryCode}>
                  &nbsp;
                  &nbsp;
                
                  {getFlagEmoji(countryCode.toLowerCase())}
                  &nbsp;
                  {countryList[countryCode]["calling_code"]}
                
              </option>
            ))}
          </select>
          
          <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="(000)000-0000" required />

          <button type="submit" className=' mx-20 my-8 items-center bg-slate-400 px-4 py-2 rounded-md'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
