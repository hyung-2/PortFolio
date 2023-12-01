import Back from '../../Back'
import ImgBox from '../../ImgBox'

import img0 from '/public/project2_thumbnail.png'
import img1 from '/public/project2_1.png'
import img2 from '/public/project2_2.png'
import img3 from '/public/project2_3.png'
import img4 from '/public/project2_4.png'

export default function page(){
  const imgs = [img0, img1, img2, img3, img4]

  return(
    <>
    <div className='projectDetailsBox'>
    <div className='flex'>
        <Back/>
        <h3 className='projectTitle'>MOOD</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <ImgBox imgs={imgs} light='ok'/>
          <div className='badges'>
            <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
            <img src="https://img.shields.io/badge/node.js-339933?style=flat&logo=nodedotjs&logoColor=white"/>
            <img src="https://img.shields.io/badge/mongodb-47A248?style=flat&logo=mongodb&logoColor=white"/>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.09.14 ~ 23.10.17 (2인) </h4>
          <div className='description'>
            <div className='aboutProject'>
              <h3 className='des-title font'>프로젝트소개</h3>
              <div className='font'>- 리액트를 활용한 두번째 프로젝트</div>
              <div className='font'>- 이상형 월드컵으로 뽑은 영화 장르를 기반으로 영화 추천 사이트 제작</div>
              <div className='font'>- 영화 추천 메인사이트, 즐겨찾기 부분 담당</div>
            </div>
            <div>
              <h3 className='font'>주요 기능</h3>
              <div className='font'>- 이상형 월드컵</div>
              <div className='font'>- 회원가입 & 로그인</div>
              <div className='font'>- 영화 정보 & 트레일러 보기</div>
              <div className='font'>- 즐겨찾기 등록 & 해제</div>
              <div className='font'>- 회원정보 수정</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}