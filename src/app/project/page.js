'use client'

import Link from 'next/link'
import { useState } from 'react'

import Button from '../Button'

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
              <img src='/project1_thumbnail.png' />
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
              <img src='/project2_thumbnail.png' />
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
              <img src='/project3_thumbnail.png' />
            </div>
        </div>
        
      </div>
    </>
  )
}

export default project