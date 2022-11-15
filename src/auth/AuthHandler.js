import { UserApi } from "../api/user";


async function handleSignin(data) {
    const email = data.get('email');
    const password = data.get('password');

    const user = await UserApi.verifyUser(email, password);

    return user;
}

async function handleSignup(data) {
    const name = data.get('name');
    const email = data.get('email');
    const password = data.get('password');

    try {
        await UserApi.verifyUser(email, password);
    } catch (err) {
        const user = await UserApi.createUser({ name, email, password });

        return user;
    }
    // If the user already exists, throw an error
    throw new Error('User already exists');
}

export { handleSignin, handleSignup };