import Back from '../../Back'
import ImgBox from '../../ImgBox'
import Badges from '../../Badges'

import img0 from '/public/project2_thumbnail.png'
import img1 from '/public/project2_1.png'
import img2 from '/public/project2_2.png'
import img3 from '/public/project2_3.png'
import img4 from '/public/project2_4.png'

export default function page(){
  const imgs = [img0, img1, img2, img3, img4]
  const badgesInfo = [
    {name: 'React', color: '61DAFB', logo: 'react'},
    {name: 'Node.js', color: '339933', logo: 'nodedotjs'},
    {name: 'MongoDB', color: '47A248', logo: 'mongodb'}
  ]
  const badgesInfo2 = [
    {name: 'Github', color: '181717', logo: 'github', href: 'https://github.com/Galaxy-104/project2_movie'},
  ]

  return(
    <>
    <div className='projectDetailsBox'>
    <div className='flex'>
        <Back/>
        <h3 className='projectTitle font'>MOOD</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <ImgBox imgs={imgs} light='ok'/>
          <Badges badgesInfo={badgesInfo}/>
          <Badges badgesInfo={badgesInfo2}/>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.09.14 ~ 23.10.17 (2인) </h4>
          <div className='description'>
            <div className='aniShowDown'>
              <h3 className='des-title font'>프로젝트 소개</h3>
              <div className='font'>- 리액트를 활용한 프로젝트</div>
              <div className='font'>- 이상형 월드컵으로 뽑은 영화 장르를 기반으로 영화 추천 사이트 제작</div>
              <div className='font'>- 주요 기능</div>
              <div className='font space'>• 이상형 월드컵</div>
              <div className='font space'>• 회원가입&로그인&회원정보 수정</div>
              <div className='font space'>• 영화 정보&트레일러 보기</div>
              <div className='font space des-title'>• 즐겨찾기 등록 & 해제</div>
              <div className='font'>- 영화 추천 메인사이트, 즐겨찾기 부분 담당</div>
              <div className='font space'>• 내가 뽑은 영화의 장르 기준으로 메인화면에 랜덤 영화 재생</div>
              <div className='font space'>• 메인페이지에 내가 뽑은 영화 장르별로 10개씩 영화 추천</div>
              <div className='font space'>• more 버튼 누르면 해당 장르가 들어있는 영화 전부 추천</div>
              <div className='font space'>• 영화 포스터 누르면 해당 영화의 정보 열람, 즐겨찾기 등록 가능</div>
              <div className='font space'>• 즐겨찾기 페이지에서 더 많은 트레일러 시청 가능, 즐겨찾기 해제</div>
            </div>
            <div className='aniShowDown2'>
              <h3 className='des-title font'>느낀점</h3>
              <div className='font'>- 처음 진행하는 팀 프로젝트다 보니 소통의 중요함을 느꼈다.</div>
              <div className='font'>- 혼자 진행할때엔 생각하지 못한 것들을 팀원에게서 많이 배웠다.</div>
              <div className='font'>- 사용자 마다 성향에 맞는 영화를 추천하고 싶었으나 알고리즘을 구현하지 못해 아쉬움이 들었다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}