'use client'

import Link from "next/link";
import Image from "next/image";

export default function Badges({badgesInfo}){
  return(
    <div className='badges'>
    {badgesInfo.map(badge => {
      console.log(badge.name)
      return(
        badge.name == 'Youtube'|| badge.name == 'Github' ?
        <Link  href={badge.href} target='_blank' className="badges">
          <img src={`https://img.shields.io/badge/${badge.name}-${badge.color}?style=flat&logo=${badge.logo}&logoColor=white`} alt={badge.name}/> 
        </Link>
        :
        <img src={`https://img.shields.io/badge/${badge.name}-${badge.color}?style=flat&logo=${badge.logo}&logoColor=white`} alt={badge.name}/> 

        )
      })
    }
    </div>
  )
}