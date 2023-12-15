import React from 'react'
import Image from "next/image"


function page() {
  return (
    <div className="space-y-10">
        <div className="w-full flex justify-center px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/doa.png"
            alt="doa"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="w-full flex justify-center px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/doa2.png"
            alt="doa"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
          <div className="w-full flex justify-center px-5 transition-transform group-hover:-translate-y-3">
          <Image
          id="image1"
            className=""
            src="/doa3.jpg"
            alt="doa"
            width="400"
            height="10"
            style={{
              objectFit:"contain",
            }}
          />
          </div>
    </div>
  )
}

export default page