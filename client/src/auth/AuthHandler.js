import { UserApi } from "../api/user";


async function handleSignin(data, setAuthenticated, setUser) {
    const email = data.get('email');
    const password = data.get('password');

    const user = await UserApi.verifyUser(email, password);
    setAuthenticated(true);
    setUser(user);
    sessionStorage.setItem('currentUser', JSON.stringify(user));
}

async function handleSignup(data, setAuthenticated, setUser) {
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');

    try {
        await UserApi.verifyUser(email, password);
    } catch (err) {
        const user = await UserApi.createUser({ name, email, password });
        setAuthenticated(true);
        setUser(user);
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return;
    }
    // If the user already exists, throw an error
    throw new Error('User already exists');
}

export { handleSignin, handleSignup };