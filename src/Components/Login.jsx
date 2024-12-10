import React, { useState } from 'react';
import image from '../assets/Group 231.png';
import { Link } from 'react-router-dom';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-50 px-4 sm:px-10">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <img src={image} alt="Login Illustration" className="w-full max-w-md md:max-w-full rounded-lg" />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <div className="w-full max-w-md px-6 sm:px-12 flex flex-col justify-center">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
            Welcome back!
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-6">
            <div className="div p-2 bg-teal-200 rounded-full shadow-md">
            <button className="bg-teal-400 text-white py-2 px-6 rounded-full hover:bg-teal-500 transition">
              Login
            </button>
            <Link to="/signup">
            <button className=" text-white py-2 px-6 rounded-full hover:bg-teal-400 transition">
              Register
            </button>
          </Link>
          
            </div>
          </div>

          <p className="text-center text-gray-500 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg sm:text-xl mb-1">User name</label>
              <input
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your User name"
                type="text"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-lg sm:text-xl mb-1">Password</label>
              <input
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your Password"
                type={passwordVisible ? 'text' : 'password'}
              />
              <i
                className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} absolute right-4 top-3 text-gray-500 cursor-pointer`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-gray-700 text-sm">
                <input className="mr-2" type="checkbox" />
                Remember me
              </label>
              <a className="text-gray-500 text-sm hover:text-teal-400 hover:underline" href="#">
                Forgot Password?
              </a>
            </div>
            <button className="w-full bg-teal-400 text-white py-2 rounded-full mb-4 hover:bg-teal-500 transition">
              Login
            </button>
            <button className="w-full bg-gray-800 text-white py-2 rounded-full flex items-center justify-center hover:bg-gray-900 transition">
              <i className="fab fa-google mr-2"></i>
              Or sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
