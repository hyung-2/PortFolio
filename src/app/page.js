'use client'

import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const click = () => {
    console.log('클릭')
  }
  return (
    <div className="home" onClick={click}>
      <Link className="link" href={`/about`}>
        <div className="imgBox">
          {/* <img src='/text.png' alt="main"></img> */}
          <h2 className="homeTitle">Namhyung's Portfolio</h2>
        </div>
      </Link>
    </div>
  )
}
