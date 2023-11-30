import Back from '../../Back'
import Button from '../../Button'


export default function page(){
  const github = 'https://github.com/hyung-2/RNproject'
  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle font'>약속해줘</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <div className='viewImgBox2'>
            <img src='/project3_thumbnail.png'/>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.11.01 ~ 23.11.20 (4인) </h4>
          {/* <p>HTML, CSS, JAVAscript를 기반으로 만든 웹사이트입니다.</p> */}
          <p className='font'>리액트 네이티브를 기반으로 만든 안드로이드 앱입니다.</p>
          <p className='font'>사용자와 친구추가 후에 캘린더를 통해 일정을 공유하고 채팅을 하고, 알람을 설정할수 있습니다.<br/>
          저는 캘린더 부분을 담당했습니다.
          </p>
        </div>
      </div>
          <Button github={github}/>
    </div>
    </>
  )
}