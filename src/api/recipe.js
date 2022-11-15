class Recipe {
    /**
     * @param {string} name
     * @param {string} description
     * @param {string[]} ingredients
     * @param {string[]} instructions
     * @param {string} image
     * @param {number} time
     * @param {number} calories
     * @param {number} servings
     * @param {string} id
     */
    constructor(
      name,
      description,
      ingredients,
      instructions,
      image,
      time,
      calories,
      servings,
      id
    ) {
      this.name = name;
      this.description = description;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.time = time;
      this.image = image;
      this.calories = calories;
      this.servings = servings;
      this.id = id;
    }
  
    static from(json) {
      json.id = json._id;
      return Object.assign(new Recipe(), json);
    }

    validate() {
        const errors = [];
        if (!this.name) {
            errors.push("Name is required");
        }
        if (!this.description) {
            errors.push("Description is required");
        }
        if (!this.ingredients || this.ingredients.length === 0) {
            errors.push("Ingredients are required");
        }
        if (!this.instructions || this.instructions.length === 0) {
            errors.push("Instructions are required");
        }
        if (!this.time) {
            errors.push("Time is required");
        }
        if (!this.image) {
            errors.push("Image is required");
        }
        if (!this.calories) {
            errors.push("Calories are required");
        }
        if (!this.servings) {
            errors.push("Servings are required");
        }
        return errors;
    }
}

class RecipeApi {
    /**
   * @function getRecipes
   * @returns {Promise<Recipe[]>} recipes
   */
  static async getRecipes() {
    const res = await fetch(`/api/recipes`);
    if (res.status === 200) {
      return res.json().then((json) => json.recipes.map(Recipe.from));
    } else {
      throw new Error(`Failed to get recipes`);
    }
  }

  /**
   * @function getRecipe
   * @param {number} id
   * @returns {Promise<Recipe>} recipe
   */
  static async getRecipe(id) {
    const res = await fetch(`/api/recipe/${id}`);
    if (res.status === 200) {
      return res.json().then((json) => Recipe.from(json.recipe));
    } else {
      throw new Error(`Failed to get recipe`);
    }
  }

  /**
   * @function createRecipe
   * @param {Recipe} recipe
   * @returns {Promise<Recipe>} new recipe
   */
  static async createRecipe(recipe) {
    const res = await fetch(`/api/recipe`, {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 200) {
      return res.json().then((json) => Recipe.from(json.recipe));
    } else {
      throw new Error(`Failed to create recipe`);
    }
  }

  /**
   * @function updateRecipe
   * @param {number} id
   * @param {Recipe} recipe
   * @returns {Promise<Recipe>} updated recipe
   */
  static async updateRecipe(recipe) {
    const res = await fetch(`/api/recipe/${recipe.id}`, {
      method: 'PUT',
      body: JSON.stringify(recipe),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 200) {
      return res.json().then((json) => Recipe.from(json.recipe));
    } else {
      console.log(await res.json())
      throw new Error("Failed to update recipe");
    }
  }

  /**
   * @function deleteRecipe
   * @param {number} id
   * @returns {Promise<bool>} response
   */
  static async deleteRecipe(id) {
    const res = await fetch(`/api/recipe/${id}`, {
      method: 'DELETE',
    });
    if (res.status === 200) {
      return true;
    } else {
      throw new Error(`Failed to delete recipe`);
    }
  }
  
    static async getMockData() {
      return [
        {
          name: 'Meatballs',
          description: 'Delicious meatballs',
          ingredients: [],
          instructions: [],
          image: '/public/meatballs.png',
          time: 30,
          calories: 500,
          servings: 4,
          id: 0,
        },
      ];
    }
}

export { Recipe, RecipeApi };