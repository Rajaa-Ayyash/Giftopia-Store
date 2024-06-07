import React, { useState } from 'react'
import "./Dropdown.css"
import { FaChevronDown ,FaChevronUp} from 'react-icons/fa';

export default function Dropdown({selected , setSelected}){
    const [isActive, setIsActive] = useState(false)
     const options = ['User ID',  'User Name', 'User Email' , 'Location' ]
    return (
      <div className="dropdown">
        <div className="dropdown-button" onClick={(e) => setIsActive(!isActive)}> {selected}
            <div className="arrow-icon">
                {isActive ? <FaChevronUp /> : <FaChevronDown />}
            </div>
        </div>

        {isActive && ( <div className="dropdown-content"> {options.map ((option , index) => ( <div key={index} onClick={(e) => { setSelected(option); setIsActive(false);}} className="dropdown-item">{option}</div>))}</div>
        )}
      </div>
    );
}