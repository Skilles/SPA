import React, { useState } from "react";

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

    const clearFields = () => {
        setIndexes([]);
        setCounter(0);
    };

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
                    <button type="button" onClick={removeField(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={addField}>
                Add
            </button>
            <button type="button" onClick={clearFields}>
                Clear
            </button>
        </div>
    )
}

export default ArrayInputField;