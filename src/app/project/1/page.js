import Back from '../../Back'


export default function page(){
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
          <div className='linkBox'>
            <button>보러가기</button>
            <button>깃허브</button>
            <button>시연영상</button>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4>23.08.14 ~ 23.08.30 (1인) </h4>
          {/* <p>HTML, CSS, JAVAscript를 기반으로 만든 웹사이트입니다.</p> */}
          <p>순 우리말의 이름을 가진 SNS를 만들어보면 어떨까 하여 제작을 하게 되었습니다. <br/>
          재잘거린다는 뜻처럼 가볍게 일기장을 쓰듯이, 친구와 대화하듯이 사용할 수 있는 SNS입니다.</p>
        </div>
      </div>
    </div>
    </>
  )
}