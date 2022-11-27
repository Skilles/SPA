import { UserApi } from '../api/user';

async function handleSignin(data) {
  const email = data.get('email');
  const password = data.get('password');

  const jwt = await UserApi.loginUser(email, password);

  localStorage.setItem('token', jwt);

  const user = await UserApi.verifyUser(jwt);

  return user;
}

async function handleSignup(data) {
  const name = data.get('name');
  const email = data.get('email');
  const password = data.get('password');

  const user = await UserApi.createUser({ name, email, password });

  try {
    const jwt = await UserApi.loginUser(email, password);
    localStorage.setItem('token', jwt);
  } catch (err) {
    throw new Error(`Unknown error: ${err}`);
  }

  return user;
}

export { handleSignin, handleSignup };
