import Back from '../../Back'
import Button from '../../Button'


export default function page(){
  const github = 'https://github.com/hyung-2/project-sns'
  const youtube = ''
  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle'>재잘재잘</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <div className='viewImgBox'>
            <img src='/project1_thumbnail.png'/>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.08.14 ~ 23.08.30 (1인) </h4>
          <div className='description'>
            <div className='aboutProject'>
              <h3 className='des-title font'>프로젝트소개</h3>
              <div className='font'>- 첫번째 진행한 프로젝트</div>
              <div className='font'>- SNS 구현</div>
            </div>
            <div>
              <h3 className='font'>후기</h3>
            </div>
          </div>
          <div className='badges'>
            <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/> 
            <img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white"/>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
            <img src="https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=white"/>
          </div>
          {/* <p>순 우리말의 이름을 가진 SNS를 만들어보면 어떨까 하여 제작을 하게 되었습니다. <br/>
          재잘거린다는 뜻처럼 가볍게 일기장을 쓰듯이, 친구와 대화하듯이 사용할 수 있는 SNS입니다.</p> */}
        </div>
      </div>
      <Button github={github}/>
    </div>
    </>
  )
}