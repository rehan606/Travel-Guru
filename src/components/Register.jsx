import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Register = () => {

    const { createNewUser, setUser } = useContext(AuthContext);
    // Show password 
    const [showPassword, setShowPassword] = useState(false)

    const handleRegisterUser = (e) => {
        e.preventDefault()

        // Get form data 
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        // console.log(name, email, password)

       

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setUser(user);
                alart("successfully register account")
            })
            .catch((error) => {
                console.log('ERROR', error.message)
            })

    };

    return (
        <div className='banner'>
            <div className='overlay'>
                <div className=" flex items-center justify-center min-h-screen ">
                    <div className="bg-white p-8 rounded-md shadow-md w-4/12 border">
                        <h2 className="text-2xl font-bold text-center mb-6">Create an account</h2>

                        <form onSubmit={handleRegisterUser}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="firstName">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="firstName"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Username or Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
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
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                <button onClick={() => setShowPassword(!showPassword)} className="absolute top-10 right-4 text-2xl" >
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </button>
                            </div>
                            <div className="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="agreeToTerms"
                                    name="agreeToTerms"
                                    // checked={formData.agreeToTerms}
                                    // onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="agreeToTerms" className="text-gray-700">
                                    I agree to the{" "}
                                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                            >
                                Create an account
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-700 mt-4">
                            Already have an account?{" "}
                            <Link to='/auth/login' href="#" className="text-orange-500 hover:underline">
                                Login
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
                            <button
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

export default Register;