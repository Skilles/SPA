import React, { useState } from "react";

import { ReactComponent as MinusIcon } from "../../../images/x-icon.svg";

function ArrayInputField({ name, label, type, placeholder }) {
    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(0);

    const addField = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeField = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    // always have one field
    if (counter === 0) {
        addField();
    }
    
    return (
        <div className="form-div">
            <label htmlFor={name}>{label}</label>
            {indexes.map(index => (
                <div key={index}>
                    <input
                        type={type}
                        name={`${name}[${index}]`}
                        placeholder={placeholder}
                    />
                    {index !== 0 && (<button type="button" onClick={removeField(index)} className="button-remove">
                        <MinusIcon />
                    </button>)}
                    
                </div>
            ))}
            <button type="button" onClick={addField} className="button-add">
                Add {label.endsWith("s") ? label.toLowerCase().slice(0, -1) : label.toLowerCase()}
            </button>
        </div>
    )
}

export default ArrayInputField;