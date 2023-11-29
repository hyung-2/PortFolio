'use client'

import { useState } from "react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="home">
      <Link href={`/about`}>
        <div className="imgBox">
          <img src='/mainImg.jpg' alt="main"></img>
        </div>
        <h1>후엥</h1>
      </Link>
    </div>
  )
}
