import React, { useState } from "react";

import ArrayInputField from "./ArrayInputField";

const fields = [
    {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter a name",
    },
    {
        name: "description",
        label: "Description",
        type: "text",
        placeholder: "Enter a description",
    },
    {
        name: "ingredients",
        label: "Ingredients",
        type: "text",
        placeholder: "Enter an ingredient",
        isArray: true,
    },
    {
        name: "instructions",
        label: "Instructions",
        type: "text",
        placeholder: "Enter an instruction",
        isArray: true,
    },
    {
        name: "image",
        label: "Image Link",
        type: "text",
        placeholder: "Enter an image link",
    },
    {
        name: "time",
        label: "Time",
        type: "number",
        placeholder: "Enter a time",
    },
    {
        name: "calories",
        label: "Calories",
        type: "number",
        placeholder: "Enter a calorie amount",
    },
    {
        name: "servings",
        label: "Servings",
        type: "number",
        placeholder: "Enter a serving amount",
    },
];

function CreateRecipeForm({ onSubmit, initialValues }) {
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        const err = await onSubmit(event);
        if (err) {
            setError(err);
        }
    }

    if (initialValues && initialValues.length === 0) {
        throw new Error("initialValues not set");
    }

    return (
    <form onSubmit={handleSubmit}>
        {error && (<p className='form-error'>{error}</p>)}
        {fields.map((field) => {
            if (field.isArray) {
                return (
                    <ArrayInputField
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        initialValues={initialValues ? initialValues[field.name] : undefined}
                    />
                )
            } else {
                return (
                    <div className="form-div" key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            defaultValue={initialValues ? initialValues[field.name] : undefined}
                        />
                    </div>
                )
            }})}
        
        <button type="submit">Create Recipe</button>
    </form>)
}

export default CreateRecipeForm;