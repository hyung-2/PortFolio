
import Back from '../../Back'
import ImgBox from '../../ImgBox'


import img0 from '/public/project1_thumbnail.png'
import img1 from '/public/project1_1.png'
import img2 from '/public/project1_2.png'
import img3 from '/public/project1_3.png'
import img4 from '/public/project1_4.png'

export default function page(){
  const imgs = [img0, img1, img2, img3, img4]

  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle'>재잘재잘</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <ImgBox imgs={imgs}/>
          <div className='badges'>
            <img src="https://img.shields.io/badge/html5-E34F26?style=flat&logo=html5&logoColor=white"/> 
            <img src="https://img.shields.io/badge/css3-1572B6?style=flat&logo=css3&logoColor=white"/>
            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
            <img src="https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=white"/>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.08.14 ~ 23.08.30 (1인) </h4>
          <div className='description'>
            <div className='aboutProject'>
              <h3 className='des-title font'>프로젝트소개</h3>
              <div className='font'>- 첫번째 프로젝트</div>
              <div className='font'>- SNS 구현</div>
            </div>
            <div>
              <h3 className='font'>주요 기능</h3>
              <div className='font'>- 회원가입 & 로그인</div>
              <div className='font'>- 게시글 & 댓글 작성,수정,삭제</div>
              <div className='font'>- 좋아요 & 좋아요 취소</div>
              <div className='font'>- 친구검색, 팔로우 & 언팔로우</div>
              <div className='font'>- 프로필 수정 & 프로필 사진 변경</div>
            </div>
          </div>
          
          {/* <p>순 우리말의 이름을 가진 SNS를 만들어보면 어떨까 하여 제작을 하게 되었습니다. <br/>
          재잘거린다는 뜻처럼 가볍게 일기장을 쓰듯이, 친구와 대화하듯이 사용할 수 있는 SNS입니다.</p> */}
        </div>
      </div>
    </div>
    </>
  )
}