import React, { useState } from 'react';
import girl from '../assets/girl.png';
import assisted from '../assets/assisted.png';
import congratulations from '../assets/congratulations.png';
import Ellipse from '../assets/Ellipse.png';
import bar from '../assets/bar.png';
import { CgPlayButtonO } from 'react-icons/cg';
import { RxHamburgerMenu } from "react-icons/rx";

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* hero */}
            <div className="min-h-screen flex flex-col items-center text-white bg-teal-500">
                {/* Navbar */}
                <nav className="w-full flex justify-end items-center px-6 py-6 md:p-4">
                    {/* Links for larger screens */}
                    <div className="hidden md:block flex space-x-8 text-xl">
                        <a href="#" className="text-white hover:underline ">Home</a>
                        <a href="#" className="text-white hover:underline">Courses</a>
                        <a href="#" className="text-white hover:underline">Careers</a>
                        <a href="#" className="text-white hover:underline">Blog</a>
                        <a href="#" className="text-white hover:underline">About Us</a>
                    </div>
                    {/* Hamburger menu for smaller screens */}
                    <div className="block md:hidden relative">
                        <RxHamburgerMenu className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                        {menuOpen && (
                            <div className="absolute bg-teal-600  top-8 left-0 rounded shadow-lg p-4">
                                <a href="#" className="text-white block py-2">Home</a>
                                <a href="#" className="text-white block py-2">Courses</a>
                                <a href="#" className="text-white block py-2">Careers</a>
                                <a href="#" className="text-white block py-2">Blog</a>
                                <a href="#" className="text-white block py-2">About Us</a>
                            </div>
                        )}
                    </div>
                    {/* Login and Signup buttons */}
                    <div className="flex space-x-4 ml-12">
                        <button className="bg-white text-teal-500 px-4 py-2 rounded-full">Login</button>
                        <button className="bg-teal-300 text-white px-4 py-2 rounded-full">Sign Up</button>
                    </div>
                </nav>











                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-24">
                    {/* Left Text Section */}
                    <div className="text-left md:w-5/12">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            <span className="text-orange-400">Studying</span> Online is now much easier
                        </h1>
                        <p className="mt-4 text-lg">TOTC is an interesting platform that will teach you in more an interactive way</p>
                        <div className="mt-6 flex items-center space-x-4">
                            <button className="bg-teal-300 text-white px-6 py-3 rounded-full">Join for free</button>
                            <div className="flex items-center space-x-2">
                                <div className="bg-white text-teal-500 p-3 rounded-full">
                                    <CgPlayButtonO size={24} />
                                </div>
                                <span className="text-black">Watch how it works</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative mt-10 md:mt-0 md:w-7/12 flex justify-center">
                        <img
                            src={girl}
                            alt="A student holding books and looking thoughtful"
                            className="w-[36rem] h-auto" // Increased size further
                        />
                        {/* 250k Assisted Students Badge */}
                        <img
                            src={assisted}
                            alt="250k Assisted Students"
                            className="absolute top-16 right-16 w-48 h-auto" // Adjusted positioning and size
                        />
                        {/* User Experience Class Section */}
                        <div className="absolute bottom-12 left-12 bg-white text-gray-700 p-4 rounded-lg shadow-lg flex flex-col md:flex-row md:items-center md:space-x-4">
                            <div className="flex items-center space-x-2">
                                <img src={Ellipse} alt="User profile" className="w-12 h-12 rounded-full" />
                                <div>
                                    <p className="text-lg font-bold">User Experience Class</p>
                                    <p className="text-sm">Today at 12.00 PM</p>
                                </div>
                            </div>
                            <button className="bg-pink-500 text-white px-5 py-2 rounded-full">Join Now</button>
                        </div>
                        {/* Congratulations Badge */}
                        <img
                            src={congratulations}
                            alt="Congratulations - Admission Completed"
                            className="absolute bottom-64 right-24 w-48 h-auto" // Adjusted positioning and size
                        />
                    </div>


                </div>

            </div>





            {/* OUR SUCCESS text------------------------------------------------------- */}
            <div className="flex justify-center items-center my-20 flex-col px-12 md:px-24">
                <h1 className='text-4xl font-bold'>OUR SUCCESS</h1>
                <p className='text-center'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida.<br/> Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
            </div>








            {/* our sucess */}

            <div className=" flex flex-wrap justify-center align-center">
                <div className="w-full flex flex-col items-center justify-center p-6 md:w-1/5 sm:w-1/2">
                    <h1 className="text-6xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-transparent">15K+</h1>
                    <p className="text-2xl">Students</p>
                </div>

                <div className="w-full flex flex-col items-center justify-center p-6 md:w-1/5 sm:w-1/2">
                    <h1 className="text-6xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-transparent">15K+</h1>
                    <p className="text-2xl">Students</p>
                </div>

                <div className="w-full flex flex-col items-center justify-center p-6 md:w-1/5 sm:w-1/2">
                    <h1 className="text-6xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-transparent">15K+</h1>
                    <p className="text-2xl">Students</p>
                </div>

                <div className="w-full flex flex-col items-center justify-center p-6 md:w-1/5 sm:w-1/2">
                    <h1 className="text-6xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-transparent">15K+</h1>
                    <p className="text-2xl">Students</p>
                </div>

                <div className="w-full flex flex-col items-center justify-center p-6 md:w-1/5 sm:w-1/2">
                    <h1 className="text-6xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-transparent">15K+</h1>
                    <p className="text-2xl">Students</p>
                </div>

            </div>

















            {/* all in one------------------------------------------------------------- */}
            <div className="flex justify-center items-center my-20 flex-col px-12 md:px-24">
                <h1 className='text-4xl font-bold text-indigo-900 my-8'>All-In-One <span className='text-teal-500'>Cloud Software.</span></h1>
                <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.</p>
            </div>





            {/* all in one flex ------------------------------------------------ */}
            <div className="div flex flex-wrap justify-center px-6 align-center gap-10 md:px-0">
                <div className="w-full flex flex-col items-center justify-center p-6 md:w-60 rounded-lg shadow-md border-lg ">
                    <h1 className='text-2xl font-semibold text-center text-indigo-900 mb-4'>Online Billing, invoicing and Contracts</h1>
                    <p className='text-center text-gray-500'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center p-6 md:w-60 rounded-lg shadow-md border-lg ">
                    <h1 className='text-2xl font-semibold text-center text-indigo-900 mb-4'>Online Billing, invoicing and Contracts</h1>
                    <p className='text-center text-gray-500'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <div className="w-full flex flex-col items-center justify-center p-6 md:w-60 rounded-lg shadow-md border-lg ">
                    <h1 className='text-2xl font-semibold text-center text-indigo-900 mb-4'>Online Billing, invoicing and Contracts</h1>
                    <p className='text-center text-gray-500'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
            </div>







            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />








        </>


    );
};

export default LandingPage;
