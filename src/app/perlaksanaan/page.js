import React from 'react'
import Image from "next/image"


function page() {
  return (
    <main>
        <div className="px-28 ">
            <div className="grid justify-center pt-4">
            <h className="text-4xl font-bold">Ibadat Haji</h>
            <div className="flex items-center px-5">
        <Image
          id="image1"
            className=""
            src="/perlaksanaanhaji.jpg"
            alt="section9"
            width="800"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
            </div>
            <div className="py-8 lg:py-10 md:[height:80px]"></div>
    <div className="py-8 lg:py-10 md:[height:80px]"></div>

            <div className="grid justify-center pt-10">
            <h className="text-4xl font-bold">Ibadat Umrah</h>
            <div className="flex items-center px-5">
        <Image
          id="image1"
            className=""
            src="/perlaksanaanumrah.jpeg"
            alt="section9"
            width="800"
            height="150"
            style={{
              objectFit:"contain",
            }}
          />
        </div>
            </div>
        </div>
    </main>
  )
}

export default page