'use client'

import Link from 'next/link'
import { useState } from 'react'

import Button from '../Button'

function project(props){

  const [hover, setHover] = useState(false) //hover상태 감지

  const onMouseOver = (e) => {
    console.log('over', hover, e.target)
    // e.target.parentElement.classList.add('projectHover')
    setHover(true)
  }
  const onMouseLeave = (e) => {
    console.log('leave', hover, e.target)
    setHover(false)
  }
  return(
    <>
      <h2 className='pageTitle'>project page</h2>
      <div className="project-container">
        <div className='project-box' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          {/* <Link href={`/project/1`}> */}
            <div className="projectImgBox">
              <div className='projectHover'>
                <Button github='https://github.com/hyung-2/project-sns'/>
              </div>
              <img src='/project1_thumbnail.png' />
            </div>
          {/* </Link> */}
        </div>
        <div className='project-box2' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <Link href={`/project/3`}>
            <div className="projectImgBox">
              <div className='projectHover'>
                {/* <Button github='https://github.com/hyung-2/RNproject'/> */}
              </div>
              <img src='/project3_thumbnail.png' />
            </div>
          </Link>
        </div>
        <div className='project-box' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <Link href={`/project/2`}>
            <div className="projectImgBox">
              <div className='projectHover'>
                {/* <Button github='https://github.com/Galaxy-104/project2_movie'/> */}
              </div>
              <img src='/project2_thumbnail.png' />
            </div>
          </Link>
        </div>
        
      </div>
    </>
  )
}

export default project