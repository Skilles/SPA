class User {
  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @param {string} id
   */
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  static from(json) {
    json.id = () => json._id;
    return Object.assign(new User(), json);
  }

  validate(password) {
    const errors = [];
    if (!this.name) {
      errors.push('Name is required');
    }
    if (!this.email) {
      errors.push('Email is required');
    }
    if (!password) {
      errors.push('Password is required');
    }
    return errors;
  }
}

class UserApi {
  /**
   * @function getUsers
   * @returns {Promise<User[]>} users
   */
  static async getUsers() {
    const res = await fetch(`/api/users`, {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    });
    if (res.status === 200) {
      return res.json().then((json) => json.users.map(User.from));
    } else {
      throw new Error(`Failed to get users`);
    }
  }

  /**
   * @function getUser
   * @param {number} id
   * @returns {Promise<User>} user
   */
  static async getUser(id) {
    const res = await fetch(`/api/user/${id}`);
    if (res.status === 200) {
      return res.json().then((json) => User.from(json.user));
    } else {
      throw new Error(`Failed to get user`);
    }
  }

  /**
   * @function createUser
   * @param {User} user
   * @returns {Promise<User>} new user
   */
  static async createUser(user) {
    const res = await fetch(`/api/user`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 200 || res.status === 400) {
      return res.json().then((json) => {
        if (json.success) {
          return User.from(json.user);
        }
        throw new Error(json.error);
      });
    } else {
      throw new Error(`Failed to create user`);
    }
  }

  /**
   * @function updateUser
   * @param {number} id
   * @param {User} user
   * @returns {Promise<User>} updated user
   */
  static async updateUser(id, user) {
    const res = await fetch(`/api/user/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
      },
    });
    if (res.status === 200) {
      return res.json().then((json) => User.from(json.user));
    } else {
      throw new Error(`Failed to update user`);
    }
  }

  /**
   * @function deleteUser
   * @param {number} id
   * @returns {Promise<bool>} response
   */
  static async deleteUser(id) {
    const res = await fetch(`/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    });
    if (res.status === 200) {
      return true;
    } else {
      throw new Error(`Failed to delete user`);
    }
  }

  /**
   * @function verifyUser
   * @param {string} jwt_token
   * @returns {Promise<User>} verified user
   */
  static async verifyUser(jwt_token) {
    const res = await fetch(`/api/users/verify`, {
      method: 'GET',
      headers: {
        'x-access-token': jwt_token,
      },
    });
    if (res.status === 200 || res.status === 400) {
      return res.json().then((json) => {
        if (json.success) {
          return User.from(json.user);
        }
        throw new Error(json.error);
      });
    } else {
      throw new Error(`Failed to verify user`);
    }
  }

  /**
   * @function loginUser
   * @param {string} email
   * @param {string} password
   * @returns {Promise<string>} the user's jwt token
   */
  static async loginUser(email, password) {
    const res = await fetch(`/api/users/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.status === 200 || res.status === 400) {
      return res.json().then((json) => {
        if (json.success) {
          return json.token;
        }
        throw new Error(json.error);
      });
    } else {
      throw new Error(`Failed to verify user`);
    }
  }
}

export { UserApi, User };
