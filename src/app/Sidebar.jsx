"use client"

// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  
  

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleNavbar1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };
  const toggleNavbar2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleNavbar3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleNavbar4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleNavbar5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleNavbar6 = () => {
    setIsOpen6(!isOpen6);
  };


  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <p className="">menu</p>
         
        </button>
      </div>
    

      {/* Responsive Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
          <button 
          onClick={toggleNavbar1}
          className="block text-white py-2 px-4 hover:bg-gray-700" href="#home">
            Program Kerjaya
          </button>


          {isOpen1 && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
            <button 
            onClick={toggleNavbar2}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Sijil Profesional Haji & Umrah
            </button>
            {isOpen2 && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
            <li 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Sijil Profesional Pengurusan Haji & Umrah
            </li>
        </div>
          )}
            <button 
            onClick={toggleNavbar3}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Aviation
            </button>
            {isOpen3 && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Cabin Crew
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Customers Service
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Ticketing
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Ground Handling
            </a>
        </div>
          )}
          <button 
            onClick={toggleNavbar4}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Oil & Gas
            </button>
            {isOpen4 && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Pipe Gas Insulation
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Rigger Fitter
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Culinary
            </a>
        </div>
          )}
          <button 
            onClick={toggleNavbar5}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Maritime
            </button>
            {isOpen5 && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Deck Rating
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Engine Rating
            </a>
            <a 
            className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Catering Rating
            </a>
        </div>
          )}
        </div>
          )}
          <button 
            onClick={toggleNavbar6}
            className="block text-white py-2 px-4 hover:bg-gray-700" href="#about">
              Kursus Diploma
            </button>
            {isOpen6 && (
        <div className="lg:hidden mt-4">
          {/* Add your navigation links here */}
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Diploma Pengurusan Haji & Umrah</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Diploma Pengurusan Perhotelan</a>
            <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Diploma Penguatkuasa Undang-Undang</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Diploma Pengurusan Kargo Udara</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Diploma Pengurusan Operasi Penerbangan</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Diploma Penyelenggaraan Teknologi Penerbangan</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Sijil Kemahiran Malaysia Operasi Penyelenggaraan Pesawat</a>
        </div>
          )}
          <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Artikel</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Testimoni</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Enrol</a>
              <a className="block text-white py-2 px-4 hover:bg-gray-700" href="/">
              Hubungi Kami</a>
        </div>
      )}
      
      


      
      
      
      
    </nav>
    
  );
};

export default Navbar;

