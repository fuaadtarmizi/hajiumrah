"use client"
import React from 'react'
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



function Navbar() {
  return (
    <nav className="h-full backdrop-blur bg-slate-800 p-2">
        <div className=" container flex h-full items-center w-full">
        <button
                    className="w-ful"
                  >
                    <Image
                      className=""
                      src="/logohaji4.svg"
                      alt="logohaji4"
                      height="150"
                      width="150"
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </button>
            <div className="mr-4 hidden md:flex w-full">
            
                <div className="w-full ml-10 flex justify-end items-center space-x-2">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="">Info Haji & Umrah</NavigationMenuTrigger>
                            
                            <NavigationMenuContent>
                                <div className="bg-yellow-600 grid gap-3 md:w-[400px] lg:w-[400px] text-white">
                            <NavigationMenuLink >
                                
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <a className="text-md  ml-2 font-bold" href="./perlaksanaan">Ibadah Haji</a>
                                </div>
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <a className="text-md font-bold ml-2" href="./perlaksanaan">Ibadah Umrah</a>
                                </div>

                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-bold ml-2" href="/">Doa & Zikir</a>
                                    </div>
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                <ul className="text-md font-sans font-bold pl-2">Dam</ul>
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10"
                                    href="/dam"
                                    ><li className="text-md font-light ml-2">Info Dam</li>
                                </div>
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10"
                                    href="/dam"
                                    ><li className="text-md font-light ml-2">Kalkulator Dam</li>
                                </div>
                                </div>
                                


                                                             
                            </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="">DIY Umrah</NavigationMenuTrigger>
                            
                            <NavigationMenuContent>
                                <div className="bg-yellow-600 grid gap-3 md:w-[400px] lg:w-[500px] text-white">
                            <NavigationMenuLink >
                                <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-bold ml-2" href="/perlaksanaan">About DIY Umrah</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-bold ml-2" href="./restorant">Restorant</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-bold ml-2" href="/agensipelancongan">Penginapan</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-bold ml-2" href="/transportation">Apply Visa</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-bold ml-2">Tickets Keretapi</a>
                                        <div className="w-full grid p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-4" href="/transportation">Flight</a>
                                        <a className="text-md font-light ml-4" href="/transportation">Teksi</a>
                                        <a className="text-md font-light ml-4" href="/transportation">Bass</a>
                                    </div>
                                    </div>
                                </div>
                            </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>


                        
                        
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                            Agensi Pelancongan</button>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                            <button className="lg:flex hidden text-white group h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                About Us</button>
                        </NavigationMenuItem>

                        <div className="lg:hidden">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="">More</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className=" bg-slate-800 grid gap-3 md:mr-50 md:w-[415px] text-white">
                            <NavigationMenuLink >
                                <div className=" w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="/">Artikel</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="/">ghjk</a>
                                    </div>
                                    <div className="w-full p-2 hover:bg-slate-500 hover:bg-opacity-10">
                                        <a className="text-md font-light ml-2" href="/">About Us</a>
                                    </div>          
                                </div>
                            </NavigationMenuLink>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        </div>
                        
                        
                        </NavigationMenuList>
                </NavigationMenu>
                </div>
                
                <NavigationMenu>
                <NavigationMenuList>
                            <button className=" bg-green-300 hover:bg-green-400 duration-300 text-white group inline-flex h-7 w-max items-center justify-center rounded bg-background px-4 py-2 text-sm font-medium   disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                Hubungi Kami</button>
                    </NavigationMenuList>
                </NavigationMenu>       
                 
                </div>
            </div>
    </nav>
  )
}

export default Navbar


