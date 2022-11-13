import React, { useState } from "react";

import { useAuthContext } from "../../../auth/AuthProvider";


function RecipeCreate() {
    const { authenticated } = useAuthContext();

    const [error, setError] = useState({});

    if (!authenticated) {
        return <h1>Not Authenticated</h1>
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const recipe = Object.fromEntries(formData.entries());
        console.log(recipe);
    }

    return (
        <div className="recipe-create">
            <h1>Create Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div className="form-div">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" />
                </div>
                <div className="form-div">
                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" />
                </div>
                <div className="form-div">
                    <label htmlFor="instructions">Instructions</label>
                    <input type="text" id="instructions" name="instructions" />
                </div>
                <div className="form-div">
                    <label htmlFor="image">Image Link</label>
                    <input type="text" id="image" name="image" />
                </div>
                <div className="form-div">
                    <label htmlFor="time">Time</label>
                    <input type="number" id="time" name="time" />
                </div>
                <div className="form-div">
                    <label htmlFor="calories">Calories</label>
                    <input type="number" id="calories" name="calories" />
                </div>
                <div className="form-div">
                    <label htmlFor="servings">Servings</label>
                    <input type="number" id="servings" name="servings" />
                </div>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
}

export default RecipeCreate;