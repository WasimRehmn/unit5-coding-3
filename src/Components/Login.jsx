import { useContext, useState } from "react";
// import { LoginProvider } from "../Context/LoginProvider";

export const Login = () => {
    const [profile, setProfile] = useState({});
    // const { pass } = useContext(LoginProvider);
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    console.log(profile.name === undefined);

    const handleLogin = (e) => {
        const { name } = e.target;
        setLoginData({
            ...loginData,
            [name]: e.target.value,
        });
        // console.log(loginData);
    };

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(
                `https://masai-api-mocker.herokuapp.com/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                }
            );
            let data = await res.json();
            getDetails(loginData.username, data.token);
        } catch (err) {
            console.log(err);
        }
    };

    const getDetails = async (username, token) => {
        try {
            let res = await fetch(
                `https://masai-api-mocker.herokuapp.com/user/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            let data = await res.json();
            setProfile(data);
            // pass(profile);
        } catch (err) {
            console.log(err);
        }
    };
    console.log(profile);
    return (
        <div>
            <form onSubmit={loginUser}>
                <input
                    onChange={handleLogin}
                    name="username"
                    type="text"
                    placeholder="Username"
                />
                <input
                    onChange={handleLogin}
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <input type="submit" />
            </form>
        </div>
    );
};
