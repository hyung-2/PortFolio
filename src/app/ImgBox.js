'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

export default function ImgBox({imgs, light, row}){

  const [count, setCount] = useState(0)

  // console.log(imgs)


  const goLeft = () => {
    // console.log('goleft')

    if(count > 0){
      setCount(count-1)
    }else{
      setCount(4)
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
        <div className='img-container'>
          <div className='img-box' style={{left: `${row == 'vertical' ? -176 :-400}`*count}}>
            {/* <Image src={imgs[count]} alt={count}/> */}
            {imgs.map((img, id) => {
              return(
                <Image src={img.src} alt='projectImg' key={id} width={400} height={240}/>
              )
            })}
          </div>
        </div>
      <AiFillRightCircle className={`arrowBtn rightBtn ${light=='ok' ? 'lightarrow' : ''}`} size='30' onClick={goRigth}/>
    </div>
  )
}