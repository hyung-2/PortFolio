import Back from '../../Back'


export default function page(){
  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle'>약속해줘</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <div className='viewImgBox2'>
            <img src='/project3_thumbnail.png'/>
          </div>
          <div className='linkBox'>
            <button>보러가기</button>
            <button>깃허브</button>
            <button>시연영상</button>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4>23.11.01 ~ 23.11.20 (4인) </h4>
          {/* <p>HTML, CSS, JAVAscript를 기반으로 만든 웹사이트입니다.</p> */}
          <p>리액트 네이티브를 기반으로 만든 안드로이드 앱입니다.<br/>
          사용자와 친구추가 후에 캘린더를 통해 일정을 공유하고 채팅을 하고, 알람을 설정할수 있습니다.<br/>
          저는 캘린더 부분을 담당했습니다.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}