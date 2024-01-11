'use client'

import Link from 'next/link'
import Image from 'next/image'

import Button from '../Button'
import project1 from '../../../public/project1_thumbnail.png'
import project2 from '../../../public/project2_thumbnail.png'
import project3 from '../../../public/project3_thumbnail.png'

import { useState } from 'react'


function project(props){

  return(
    <>
      <h2 className='pageTitle font'>project page</h2>
      <div className="project-container">
        <div className='project-box'>
            <div className="projectImgBox">
              <div className='projectHover'>
                <Button 
                  github='https://github.com/hyung-2/project-sns' 
                  more='/project/1'
                  youtube='https://youtu.be/4GBBUhRyA1o?si=lkKnZ0r6pqYxvlsp'
                />
              </div>
              <Image src={project1} alt='project1' />
            </div>
        </div>
        <div className='project-box'>
            <div className="projectImgBox">
              <div className='projectHover'>
                <Button 
                  github='https://github.com/Galaxy-104/project2_movie' 
                  more='/project/2'
                  youtube= ''
                />
              </div>
              <Image src={project2} alt='project2' />
            </div>
        </div>
        <div className='project-box2'>
            <div className="projectImgBox">
              <div className='projectHover'>
                <Button 
                  github='https://github.com/hyung-2/RNproject' 
                  more='/project/3'  
                  youtube='https://youtu.be/1xJojzia0y8?si=35Y6IdpGdhlxsQbm'
                  align='vertical'
                />
              </div>
              <Image src={project3} alt='project3' />
            </div>
        </div>
        
      </div>
    </>
  )
}

export default project