import Link from 'next/link'

function project(props){
  console.log(props)
  return(
    <>
      <h2 className='pageTitle'>project page</h2>
      <div className="project-container">
        <div className='project-box'>
          <Link href={`/project/1`}>
            <div className="projectImgBox">
              <img src='/project1_thumbnail.png' />
            </div>
          </Link>
        </div>
        <div className='project-box2'>
          <Link href={`/project/3`}>
            <div className="projectImgBox">
              <img src='/project3_thumbnail.png' />
            </div>
          </Link>
        </div>
        <div className='project-box'>
          <Link href={`/project/2`}>
            <div className="projectImgBox">
              <img src='/project2_thumbnail.png' />
            </div>
          </Link>
        </div>
        
      </div>
    </>
  )
}

export default project