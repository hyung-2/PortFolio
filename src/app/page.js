'use client'

import { useState } from "react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="home">
      <Link className="link" href={`/about`}>
        <div className="imgBox">
          <img src='/text.png' alt="main"></img>
        </div>
      </Link>
    </div>
  )
}
