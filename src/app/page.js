'use client'
import React from 'react'
import Image from "next/image"
import { Carousel } from 'flowbite-react';
import Navbar from "./Navbar.jsx"
import Sidebar from "./Sidebar.jsx"
import ImageSlider from "./ImageSlider.jsx"
import Head from "next/head"


export default function home() {

  return (
    
    <div>
      <title>E-dhumy</title>

    
      <div className="hidden lg:block sticky top-0 ">
        <Navbar/>
    </div>
    <div className="lg:hidden">
        <Sidebar/>
    </div>
    <section1 className=" ">
    <div className="bg-cover bg-center grid h-full py-10 items-center justify-center drop-shadow-2xl" style={{ backgroundImage: 'url("/haji2.jpg")' }}>
      <h1 className="text-slate-800 text-5xl font-extrabold">E-DHUMY APPLICATION:</h1>
      
      <h className="text-slate-800 text-4xl font-extrabold">YOUR COMPANION FOR A FULFILLING PILGRIM JOURNEY</h>
      <div className="h-5/6  flex items-end ">
        <div className="py-28"></div>
      <h className="text-slate-800 text-xl font-semibold">BY: FACULTY OF INTERNATIONAL STUDIES' (FIS) INNOVATION CLUB</h>
      </div>

      
    </div>
    </section1>
    
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section2>
      <div className="grid grid-cols-2 gap-4 bg-slate-100 p-3">
        <div className=" w-full flex justify-center">
        <div className="">
        <Image
        className="rounded-lg"
            src="/dam1.svg"
            alt="malaysia"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div>
        <div className=" p-6">
          <div className="space-y-8">
            <h1 className="font-bold text-2xl">Apa Itu Dam?</h1>
            <h3>Dam dari segi bahasa bermaksud darah. Dari segi istilah syarak pula, ia membawa maksud denda yang diwajibkan kerana melakukan perkara larangan semasa melakukan haji atau meninggalkan perkara yang diwajibkan</h3>
          </div>
          
          <div className="flex items-end " >
          <button className="group ">
          <div className="flex items-center pt-6 ">
          <a className="font-sans  font-semibold hover:text-slate-800" href="./dam">Ketahui lebih lanjut tentang Dam</a>
        <div className=" group-hover:translate-x-full duration-500 hover:text-slate-300"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </button>
        </div>
        
          
        </div>
      </div>
      
    </section2>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section4>
      <div className="w-full h-full flex justify-center">
        <div className="group w-3/4 h-full grid justify-center ">
        <p className="text-center font-sans text-3xl font-bold text-yellow-800">HIMPUNAN DOA-DOA</p>
        <p className="text-5xl text-slate-700  font-semibold font-sans text-center p-10 leading-snug tracking-wide">
         
        <span className="text-slate-700 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
        DHUMY </span>MEMBERI BIMBINGAN DOA PADA SETIAP ORANG YANG
          <span className="text-slate-700 bg-gradient-to-r from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          MENUNAIKAN IBADAH HAJI DAN UMRAH</span>
        </p>
        <div className="w-full flex justify-center">
        <button className="group pt-6 ">
          <div className="flex items-center hover:bg-green-200 bg-green-300 py-2 rounded-md">
          <a className="font-sans  font-semibold hover:text-slate-800" href="./himpunandoa">Ketahui lebih lanjut tentang Himpunan Doa-Doa</a>
        <div className=" group-hover:translate-x-full duration-500 hover:text-slate-300"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </button>
        </div>
      </div>
       
      </div>
    </section4>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section5>
    <div className="px-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 "> 
      <card className="w-full h-full p-3 ">
      <div className="">
        <span className="font-sans font-semibold text-yellow-800 ">EKSPLOTASI TEMPAT YANG MENARIK:</span>
        </div>
        <div h-full className="">
        <h3 className=" text-6xl font-bold text-slate-800 text-center ">TEMPAT <span className=" grid text-4xl">MENARIK SEMASA</span> HAJI & UMRAH</h3>
        </div>
        <div className="w-full flex justify-center">
        <button className="group pt-6 ">
          <div className="flex items-center hover:bg-green-200 bg-green-300 py-2 rounded-md">
          <a className="font-sans  font-semibold hover:text-slate-800" href="./restorant">Ketahui lebih lanjut tentang Tempat Menarik di Mekkah & Madinah</a>
        <div className=" group-hover:translate-x-full duration-500 hover:text-slate-300"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </button>
        </div>
        </card>
        <card className=" w-full h-full flex justify-center items-center rounded-md hover:contrast-50 group" style={{ backgroundImage: 'url("/mutawif.svg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className=" w-11/12 h-5/6 group-hover:border-t-2 group-hover:border-l-2 group-hover:border-r-2 group-hover:border-b-2 ">
            <span className="hover:animate-out duration-1000 h-full flex justify-center items-center group-hover:text-4xl group-hover:font-bold group-hover:text-black text-transparent">BERLAKU NYE PERANG BADAR</span>
          </div>
          <div className="py-52"></div>
        </card>
        <card className=" w-full h-full flex justify-center items-center rounded-md hover:contrast-50 group" style={{ backgroundImage: 'url("/istanadajjal.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className=" w-11/12 h-5/6 group-hover:border-t-2 group-hover:border-l-2 group-hover:border-r-2 group-hover:border-b-2 ">
            <span className="hover:animate-out duration-1000 h-full flex justify-center items-center group-hover:text-4xl group-hover:font-bold group-hover:text-black text-transparent">ISTANA DAJJAL</span>
          </div>
          <div className="py-52"></div>
        </card>
        <card className=" w-full h-full flex justify-center items-center rounded-md hover:contrast-50 group" style={{ backgroundImage: 'url("/guahira.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className=" w-11/12 h-5/6 group-hover:border-t-2 group-hover:border-l-2 group-hover:border-r-2 group-hover:border-b-2 ">
            <span className="hover:animate-out duration-1000 h-full flex justify-center items-center group-hover:text-4xl group-hover:font-bold group-hover:text-black text-transparent">GUA HIRA</span>
          </div>
          <div className="py-52"></div>
        </card>
      </div>
    </div>
    </section5>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section3>
      <div className="w-full h-full flex justify-center">
        <div className="group w-3/4 h-full grid justify-center ">
        
          <span className="text-slate-700 text-4xl font-bold bg-gradient-to-r mt-3 from-yellow-500 to-yellow-500 bg-no-repeat [background-position:0_88%] [background-size:1%_100%] motion-safe:transition-all motion-safe:duration-700 group-hover:[background-size:100%_100%] focus:[background-size:100%_100%]">
          AGENSI PELANCONGAN</span>
        
      </div>
      </div>
      <div className="w-full h-full py-4 "></div>
    <div className="px-16 ">
      <div className="w-full h-full bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform  group-hover:-translate-y-3">
          <Image
            src="/awardicon.svg"
            alt="malaysia"
            width="40"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Package Terbaik</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">Menyediakan package ikut bersesuain penyerta haji & Umrah </span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/handshake.svg"
            alt="handshake"
            width="55"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span className=" text-md font-bold">Ekosistem </span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">Ekosistems yang lebih baik berbanding dengan agensi pelancongan yang lain.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/glob.svg"
            alt="glob"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Pengiktirafan Kerajaan</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">Agensi pelancongan yang diiktiraf oleh lembaga Malaysia.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/person.svg"
            alt="person"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Keselesaan</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">Lebih berteraskan keselesaan terhadap mutawwif dengan mengikut kemampuan nye.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        <card className="group w-full h-full bg-slate-800 py-10 rounded-md">
          <div className="w-full flex justify-start px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/support.svg"
            alt="support"
            width="45"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="px-5 py-8 text-lg text-white font-semibold">
          <span>Sokongan</span>
          </div>
          <div className="px-5 flex w-full text-normal justify-center">
          <span className="text-gray-400 ">Memberi sokongan penuh kepada peserta Haji dan Umrah.</span>
          </div>
          <div className="py-8 flex w-full text-normal justify-center">
          </div>
        </card>
        </div>
        <div className="w-full flex justify-center">
        <button className="group pt-6 ">
          <div className="flex items-center hover:bg-green-200 bg-green-300 py-2 rounded-md">
          <a className="font-sans  font-semibold hover:text-slate-800" href="./agensipelancongan">Ketahui lebih lanjut tentang Egensi Pelancongan</a>
        <div className=" group-hover:translate-x-full duration-500 hover:text-slate-300"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </button>
        </div>  
      </div>
    </section3>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    
    
    
    <section7>
    <div className="px-28 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 "> 
      
      
      <card className="w-full h-full p-3  text-end cols-span-1">
      <div className="flex justify-start ">
        <span className="font-sans text-yellow-800 font-semibold text">PILIHAN </span>
        </div>
        <div h-full className="">
        <h3 className="text-center text-4xl font-bold text-slate-800">TRANSPORTATION</h3>
        </div>
        <div className=" flex items-end"> 
        </div>
        </card>
        <card className="w-full h-full col-span-3 flex justify-center " >
          <div className=" w-4/5 h-full flex items-center px-20 rounded-md hover:shadow-xl duration-300 border-l ">
            <span className="text-slate-700 text-md leading-relaxed ">
            Kami menyediakan transportation/Pengakutan bagi memudahkan peserta melaksanakan haji dan umrah.</span>
          </div>
        </card>
      </div>
    </div>
    </section7>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section7>
    <div className="px-28 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 "> 
      <card className="w-full h-full col-span-3 flex justify-center " >
          <div className=" w-4/5 h-full flex items-center px-20 rounded-md hover:shadow-xl duration-300 border-l ">
            <span className="text-slate-700 text-md leading-relaxed ">
            Kami menyediakan kemudahan bagi membuat visa bagi peserta yang ingin melakukan haji dan umrah.</span>
          </div>
        </card>
      <card className="w-full h-full p-3  text-end cols-span-1">
      <div className="flex justify-start ">
        <span className="font-sans text-yellow-800 font-semibold text">MEMBUAT </span>
        </div>
        <div h-full className="">
        <h3 className="text-center text-4xl font-bold text-slate-800">VISA</h3>
        </div>
        <div className=" flex items-end"> 
        </div>
        </card>
        
      </div>
    </div>
    <div className="w-full flex justify-center">
        <button className="group pt-6 ">
          <div className="flex items-center hover:bg-green-200 bg-green-300 py-2 rounded-md">
          <a className="font-sans  font-semibold hover:text-slate-800" href="./transportation">Ketahui lebih lanjut tentang pengakutan & VISA</a>
        <div className=" group-hover:translate-x-full duration-500 hover:text-slate-300"> 
        <svg  width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        </button>
        </div> 
    </section7>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <section9 >
      <div className="px-28">
      <div className=" w-full h-full  grid grid-cols-2 lg:grid-cols-3 gap-4 space-y-10">
        <div className="flex col-span-3 justify-end ">
        <div className="flex items-center px-10">
          <h className="text-8xl font-bold font-sans text-slate-700">INOVASI</h>
        </div>
        <div className="px-10">
        <Image
          id="image1"
            className=""
            src="/section9(1).svg"
            alt="section9"
            width="150"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div>
        <div className="flex col-span-3">
        <div className="flex items-center px-10">
          <h className="text-8xl font-bold font-sans text-slate-700">DINAMIK</h>
        </div>
        <div className="flex items-center px-10">
        <Image
          id="image1"
            className=""
            src="/section9(2).svg"
            alt="section9"
            width="250"
            height="250"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        </div> 
        <div className="flex col-span-3 justify-center pt-3">
        <div className="flex items-center px-5">
        <Image
          id="image1"
            className=""
            src="/section9(3).svg"
            alt="section9"
            width="150"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
        <div className="grid items-center px-10 ">
          <h className="text-8xl grid font-bold font-sans text-slate-700">PROGRESIF</h>
          
          
        </div>       
        </div> 
      </div>
      </div>
    </section9>  
    
    <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>

    <section13>
      <div className="w-full h-full">
        <div className="grid grid-cols-3">
          <div className="bg-slate-800  pt-20">
          <div className="flex justify-center">
          <Image
            className=""
            src="/logoyeg.svg"
            alt="logoyeg"
            width="250"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="grid p-8 px-28 text-white text-xs">
            <h className="">Alamat: D-1-6, Block D, 1st Floor, 
              CBD Perdana 3, Jalan Perdana, Cyber 12
              63000, Cyberjaya, Selangor Darul Ehsan
              </h>
            <div className="grid py-6 ">
            <h>Working hours : 8.30am-5.30pm</h>
            <h>No tel : 03-61435073</h>
            <h>Email: infoedhumy@gmail.com</h>


            <div className="flex space-x-5">
            <button className="grid py-6 "> 
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="30"
              >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" />
              </svg>
          </button>
          <button className="grid py-6 "> 
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="30"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
              </svg>
          </button>
          <button className="grid py-6"> 
              <svg
                viewBox="0 0 448 512"
                fill="currentColor"
                height="25"
                width="25"
              >
                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z" />
              </svg>
          </button>
          <button className="grid py-6 "> 
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="30"
                width="30"  
              >
                <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
              </svg>
          </button>
          </div>
          <div className="grid space-y-6">
          <h>@ 2023 YEG Academy (M) Sdn Bhd 1334979-W | Hak Cipta Terpelihara</h>
         
          </div>
          <div className="pt-6">
          <h>Developed by Cempaka.ai</h>
          </div>
            
            </div>
          </div>
          </div>
          <div className="bg-slate-800 col-span-2 pt-20 px-20">
            <div className="flex place-content-between text-white text-xs">
            <div className="grid space-y-3">
              <span className="text-xl font-bold">INFO HAJI & UMRAH</span>
              <span className="font-medium">Ibadah Haji</span>
              <span className="font-medium">Ibadah Umrah</span>
              <span className="font-medium">Doa & Zikir</span>
              <span className="font-medium">Dam</span>
            </div>
            <div className="grid space-y-3">
              <span className="text-xl font-bold">DIY UMRAH</span>
              <span className="font-medium">About DIY Umrah</span>
              <span className="font-medium">Restorant</span>
              <span className="font-medium">Penginapan</span>
              <span className="font-medium">Apply Visa</span>
              <span className="font-medium">Tickets Keretapi</span>
            </div>
            <div className="grid space-y-3">
              <span className="font-medium">AGENSI PELANCONGAN</span>
              <span className="font-medium">ABOUT US</span>
              <span className="font-medium">HUBUNGI KAMI</span>
            </div>
            
            </div>
            
            <div className="py-10"></div>
            
          </div>
          
          
            
         
          
        </div>
        
      </div>
    </section13>
    </div>
  
  )
}

