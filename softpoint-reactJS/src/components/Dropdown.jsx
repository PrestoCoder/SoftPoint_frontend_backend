import React from 'react'
import DropRow from './DropRow';

function Dropdown({countryList, isDropVis}) {
    const getFlagEmoji = countryCode=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt(0)))

    const filterFunction = () => {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    return (
        <div className={` roun bg-orange-300 h-60 w-60 -mx-28 absolute top-72 left-1/2 dropdown ${isDropVis ? "visible" : "invisible"}`}>
            <form className = "h-full" action="#">
                <div className='dropdown'>
                    <div className = "w-full max-h-60 overflow-y-auto" id="myDropdown">
                    <div className="sticky top-0 bg-white">
                        <input className="w-full px-4 py-2 border-b border-gray-300" type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
                    </div>                        
                        {
                            Object.keys(countryList).map((countryCode) => (
                                <DropRow key={countryCode} countryCode={countryCode} />
                            ))
                        }

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Dropdown