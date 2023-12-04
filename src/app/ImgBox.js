'use client'
import Image from 'next/image'
import { useState } from 'react';

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

export default function ImgBox({imgs, light, row}){

  const [count, setCount] = useState(0)
  // console.log(imgs)

  const goLeft = () => {
    // console.log('goleft')
    if(count > 0){
      setCount(count-1)
      console.log(count)
    }else{
      setCount(4)
      console.log(count)
    }

  }

  const goRigth = () => {
    // console.log('goright')
    if(count > 3){
      setCount(0)
    }else{
      setCount(count+1)
    }
  }

  return(
    <div className={row == 'vertical' ? 'viewImgBox2' : 'viewImgBox'}>
      <AiFillLeftCircle className={`arrowBtn leftBtn ${light=='ok' ? 'lightarrow' : ''}` } size='30' onClick={goLeft}/>
        <Image src={imgs[count]} alt='미리보기'/>
      <AiFillRightCircle className={`arrowBtn rightBtn ${light=='ok' ? 'lightarrow' : ''}`} size='30' onClick={goRigth}/>
    </div>
  )
}