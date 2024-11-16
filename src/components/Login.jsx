import React, { useContext, useState } from 'react';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
const auth = getAuth(app);
import Swal from 'sweetalert2'

const Login = () => {

    const { loginUser, setUser } = useContext(AuthContext)
    // Show Password 
    const [showPassword, setShowPassword] = useState(false)



    const location = useLocation()
    const navigate = useNavigate()

    const handleLoginUser = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        loginUser(email, password)
            .then((result) => {
                const user = result.user
                navigate(location?.state ? location.state : '/')
                setUser(user)
                
                // Sweet Alert 
                Swal.fire({
                    title: "Congratulations!",
                    text: "You Successfully Logged in!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error.message)
            })

    };


    // Google Popup Login Provider 
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user); // Set the user in AuthContext
                navigate(location?.state?.from?.pathname || "/", { replace: true });
                console.log(result)

                // Sweet Alert 
                Swal.fire({
                    title: "Congratulations!",
                    text: "You Successfully Logged in!",
                    icon: "success"
                });
                // alert("Google Login Successful!");
            })
            .catch((error) => {
                console.error("Login Error:", error.message);
                setUser(null)
                alert("Error during Google Login: " + error.message);

            });
    };


    return (
        <div className='banner'>
            <div className="overlay">
                <div className=" container mx-auto flex items-center justify-center min-h-screen ">
                    <div className="bg-white p-8 rounded-md shadow-md w-4/12 border">
                        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                        <form onSubmit={handleLoginUser}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Username or Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                <button onClick={() => setShowPassword(!showPassword)} className='text-2xl absolute top-10 right-4'>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </button>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                    />
                                    <span className="text-sm text-gray-700">Remember Me</span>
                                </label>
                                <a href="#" className="text-sm text-orange-500 hover:underline">
                                    Forgot Password
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                            >
                                Login
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-700 mt-4">
                            Don't have an account?{" "}
                            <Link to="/auth/register" href="#" className="text-orange-500 hover:underline">
                                Create an account
                            </Link>
                        </p>

                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        <div className="flex flex-col space-y-4">
                            <button
                                className="flex items-center justify-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                            >
                                <FaFacebook className="mr-2" /> Continue with Facebook
                            </button>
                            <button onClick={handleGoogleLogin}
                                className="flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                            >
                                <FaGoogle className="mr-2" /> Continue with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;