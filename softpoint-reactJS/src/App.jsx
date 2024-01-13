import { useState, useContext } from 'react';
import countries from './JSON/countries.json';
import Dropdown from './components/Dropdown';
import CountryContext from './context/CountryContext';
import { modifyCountryMaskData } from './utils/modifyCountryMaskData';
import { getMasks } from './utils/getMasks';
import { formatNumber } from './utils/formatNumber';
import { getFlagEmoji } from './utils/getFlagEmoji';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (event) => {
    const input = event.target.value;
    const phoneMask = getMasks(countriesMasks, country);
    setPhoneNumber(formatNumber(phoneMask, input));
  };

  const { country, isDropVis, setIsDropVis } = useContext(CountryContext);

  // Required for accurate update of the masks.
  const countriesMasks = modifyCountryMaskData();
  const countryList = countries;

  return (
    <div className="w-1/2 h-full bg-stone-300 mx-auto">
      <div className='my-60 h-full w-3/4 bg-sky-200 mx-auto flex flex-col items-center p-5'>

        <Dropdown countryList={countryList} isDropVis={isDropVis} />

        <div className='flex justify-around w-2/4'>
          <button onClick={() => setIsDropVis(!isDropVis)}>
            {getFlagEmoji(country.toLowerCase())} &nbsp; {countryList[country]["calling_code"]}
          </button>
          <input
            value={phoneNumber}
            onChange={handleChange}
            className="mx-3"
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder={getMasks(countriesMasks, country)}
            required
          />
        </div>

        <div>
          <button type="submit" className='m-2 items-center bg-slate-400 px-4 py-2 rounded-md'>Submit</button>
        </div>

      </div>
    </div>
  );
}

export default App;
