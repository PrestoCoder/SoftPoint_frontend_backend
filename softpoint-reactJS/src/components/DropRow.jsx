import React, { useContext } from 'react'
import countries from '../JSON/countries.json';
import CountryContext from '../context/CountryContext';


function DropRow({countryCode}) {
    const {setCountry, setIsDropVis} = useContext(CountryContext);

    const countryList = countries;
    const getFlagEmoji = countryCode=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt(0)))

    return (
        <>
            <a className="block py-2 px-4 text-base" href="#" onClick={(e) => {
                const selectedCountryCode = e.currentTarget.children[0].innerText;
                setCountry(selectedCountryCode);
                setIsDropVis(false);
            }}>
                {getFlagEmoji(countryCode.toLowerCase())} &nbsp;&nbsp;&nbsp;
                <span className='invisible hidden'>{countryCode}</span> 
                <span>{countryList[countryCode]["name"]}</span>&nbsp;&nbsp;&nbsp;
                {countryList[countryCode]["calling_code"]}
            </a>
        </>
    )
}

export default DropRow