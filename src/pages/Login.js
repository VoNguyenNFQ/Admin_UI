import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { SnackbarContext } from '../contextAPI/Snackbar.context';
const Login = () => {

    const navigate = useNavigate();
    const { openSnackbar, openSnackbarDispatch } = useContext(SnackbarContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const token = localStorage.getItem("token");

    const [message, setMessage] = useState({
        username: "",
        password: "",
    });

    const requireMessage = "Vui lòng nhập trường này!";

    const handleChangeField = (e, setFunc) => {
        const { value, name } = e.target;
        value == ""
            ? setMessage({ ...message, [name]: requireMessage })
            : setMessage({ ...message, [name]: "" });
        setFunc(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            setMessage({ ...message, username: requireMessage })
            return;
        }
        if (!password) {
            setMessage({ ...message, password: requireMessage })
            return;
        }
        localStorage.setItem("token", username)
        navigate('/')
        openSnackbarDispatch({
            type: 'SET_OPEN',
            payload: {
                msg: "Login successfully!",
                type: "success"
            }
        })

    }

    return (
        <Layout>
            <div className="w-full flex justify-center min-h-screen bg-gray-50">
                <div className="min-w-[400px] self-center px-8 py-6 text-left bg-white shadow-lg rounded-md">
                    <h3 className="text-2xl font-bold text-center">Login</h3>
                    <form>
                        <div className="mt-4">
                            <div className="mt-4">
                                <label className="block">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:ring-primary"
                                    value={username}
                                    onChange={e => handleChangeField(e, setUsername)}
                                />
                                <p className='text-sm text-red-600'>{message.username}</p>
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-full  focus:outline-none focus:ring-1 focus:ring-primary"
                                    value={password}
                                    onChange={e => handleChangeField(e, setPassword)}
                                />
                                <p className='text-sm text-red-600'>{message.password}</p>
                            </div>
                            <div className="flex items-baseline justify-center">
                                <button
                                    className="disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary px-6 py-2 mt-4 text-white bg-primary rounded-full hover:bg-primary"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};
export default Login;