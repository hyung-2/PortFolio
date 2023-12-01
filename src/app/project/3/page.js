import Back from '../../Back'
import ImgBox from '../../ImgBox'

import img0 from '/public/project3_thumbnail.png'
import img1 from '/public/project3_1.png'
import img2 from '/public/project3_2.png'
import img3 from '/public/project3_3.png'
import img4 from '/public/project3_4.png'


export default function page(){
  const imgs = [img0, img1, img2, img3, img4]

  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle font'>약속해줘</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <ImgBox imgs={imgs} row='vertical'/>
          <div className='badges'>
          <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat&logo=react&logoColor=white"/>
            <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"/>
            <img src="https://img.shields.io/badge/node.js-339933?style=flat&logo=nodedotjs&logoColor=white"/>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.11.01 ~ 23.11.20 (4인) </h4>
          <div className='description'>
            <div className='aboutProject'>
              <h3 className='des-title font'>프로젝트소개</h3>
              <div className='font'>- 리액트 네이티브를 활용한 세번째 프로젝트</div>
              <div className='font'>- 친구와 일정 공유, 채팅, 알람설정</div>
              <div className='font'>- 캘린더 부분 담당</div>
            </div>
            <div>
              <h3 className='font'>주요 기능</h3>
              <div className='font'>- 회원가입 & 로그인</div>
              <div className='font'>- 일정 추가, 수정, 삭제</div>
              <div className='font'>- 해당 일정 멤버들과 채팅</div>
              <div className='font'>- 알람</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}