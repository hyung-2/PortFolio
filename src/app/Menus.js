'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Menus(){

  const pathName = usePathname()
  // console.log('path', pathName)

  // 클릭한 탭메뉴에 효과주기
  useEffect(() => {
    const menus = document.querySelectorAll('.menu-item')
    menus.forEach(menu => {
      if(`/${menu.innerText}` == pathName){
        menu.classList.add('pick')
      }else{
        menu.classList.remove('pick')
      }
    })
  },[pathName])
  return(
    <>
      <div className='line'></div>
      <div className='menu'>
        <div className='menu-item font'><Link href='/'>홈</Link></div>
        <div className='menu-item font'><Link href={`/about`}>about</Link></div>
        <div className='menu-item font'><Link href={`/skills`}>skills</Link></div>
        <div className='menu-item font'><Link href={`/project`}>project</Link></div>
      </div>
    </>
  )
}