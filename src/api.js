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
   * @param {number} id
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
    return Object.assign(new Recipe(), json);
  }
}

class User {
  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @param {number} id
   */
  constructor(name, email, password, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id;
  }

  static from(json) {
    return Object.assign(new User(), json);
  }
}

const ATLAS_URI = process.env.REACT_APP_ATLAS_URI;
const API_KEY = process.env.REACT_APP_API_KEY;

class UserApi {
  /**
   * @function getUsers
   * @returns {Promise<User[]>} users
   */
  static async getUsers() {
    const res = await fetch(ATLAS_URI + '/users', {
      method: 'GET',
      headers: {
        'api-key': API_KEY,
      },
    });
    return res.json().then((users) => users.map(User.from));
  }

  /**
   * @function getUser
   * @param {number} id
   * @returns {Promise<User>} user
   */
  static async getUser(id) {
    const res = await fetch(ATLAS_URI + `/user?id=${id}`, {
      method: 'GET',
      headers: {
        'api-key': API_KEY,
      },
    });
    return res.json().then(User.from);
  }

  /**
   * @function createUser
   * @param {User} user
   * @returns {Promise<User>} new user
   */
  static async createUser(user) {
    const res = await fetch(ATLAS_URI + '/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(user),
    });
    return res.json().then(User.from);
  }

  /**
   * @function updateUser
   * @param {number} id
   * @param {User} user
   * @returns {Promise<User>} updated user
   */
  static async updateUser(id, user) {
    const res = await fetch(ATLAS_URI + `/user?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(user),
    });
    return res.json().then(User.from);
  }

  /**
   * @function deleteUser
   * @param {number} id
   * @returns {Promise<Json>} response
   */
  static async deleteUser(id) {
    const res = await fetch(ATLAS_URI + `/user?id=${id}`, {
      method: 'DELETE',
      headers: {
        'api-key': API_KEY,
      },
    });
    return res.json();
  }
}

class RecipeApi {
  /**
   * @function getRecipes
   * @returns {Promise<Recipe[]>} recipes
   */
  static async getRecipes() {
    const res = await fetch(`${ATLAS_URI}/recipes`, {
      method: 'GET',
      headers: {
        'api-key': API_KEY,
      },
    });
    return res.json().then((recipes) => recipes.map(Recipe.from));
  }

  /**
   * @function getRecipe
   * @param {number} id
   * @returns {Promise<Recipe>} recipe
   */
  static async getRecipe(id) {
    const res = await fetch(ATLAS_URI + `/recipe?id=${id}`, {
      method: 'GET',
      headers: {
        'api-key': API_KEY,
      },
    });
    return res.json().then(Recipe.from);
  }

  /**
   * @function createRecipe
   * @param {Recipe} recipe
   * @returns {Promise<Recipe>} new recipe
   */
  static async createRecipe(recipe) {
    const res = await fetch(ATLAS_URI + '/recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(recipe),
    });
    return res.json().then(Recipe.from);
  }

  /**
   * @function updateRecipe
   * @param {number} id
   * @param {Recipe} recipe
   * @returns {Promise<Recipe>} updated recipe
   */
  static async updateRecipe(id, recipe) {
    const res = await fetch(ATLAS_URI + `/recipe?id=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'api-key': API_KEY,
      },
      body: JSON.stringify(recipe),
    });
    return res.json().then(Recipe.from);
  }

  /**
   * @function deleteRecipe
   * @param {number} id
   * @returns {Promise<Json>} response
   */
  static async deleteRecipe(id) {
    const res = await fetch(ATLAS_URI + `/recipe?id=${id}`, {
      method: 'DELETE',
      'api-key': API_KEY,
    });
    return res.json();
  }
}

export { RecipeApi, UserApi, User, Recipe };
