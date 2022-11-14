import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Recipe, RecipeApi } from "../../../api/recipe";
import { useAuthContext } from "../../../auth/AuthProvider";
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


function RecipeCreate() {
    const { authenticated } = useAuthContext();

    const navigate = useNavigate();

    const [error, setError] = useState("");

    if (!authenticated) {
        return <h1>Not Authenticated</h1>
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        // assemble the data into a Recipe object
        let recipe = new Recipe();
        let instructions = [];
        let ingredients = [];
        for (const [key, value] of formData.entries()) {
            const newValue = value.trim();
            if (newValue.length === 0) {
                continue;
            }
            if (key.includes("instructions")) {
                instructions.push(newValue);
            } else if (key.includes("ingredients")) {
                ingredients.push(newValue);
            } else {
                recipe[key] = newValue;
            }
        }
        recipe.instructions = instructions;
        recipe.ingredients = ingredients;
        const errors = recipe.validate();

        if (errors.length > 0) {
            setError(errors[0]);
            console.log(errors);
            return;
        }
        
        RecipeApi.createRecipe(recipe).then((recipe) => {
            navigate("/recipe/" + recipe.id);
        });
    }

    return (
        <div className="grey-border recipe-create">
            <h1>Create Recipe</h1>
            <form onSubmit={handleSubmit}>
                {error && (<p className='form-error'>{error}</p>)}
                {fields.map(field => {
                    if (field.isArray) {
                        return (
                            <ArrayInputField
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
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
                                />
                            </div>
                        )
                    }})}
                
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
}

export default RecipeCreate;