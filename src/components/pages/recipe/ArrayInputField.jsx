import React, { useCallback, useEffect, useState } from "react";

import { ReactComponent as MinusIcon } from "../../../images/x-icon.svg";

function ArrayInputField({ name, label, type, placeholder, initialValues }) {
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

    
    if (initialValues) {
        if (initialValues.length > indexes.length) {
            setIndexes(initialValues.map((_, index) => index));
            setCounter(initialValues.length);
        }
    } else if (counter === 0) {
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
                        defaultValue={initialValues ? initialValues[index] : undefined}
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