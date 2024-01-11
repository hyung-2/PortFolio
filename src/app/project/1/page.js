
import Back from '../../Back'
import ImgBox from '../../ImgBox'
import Badges from '../../Badges'

import img0 from '/public/project1_thumbnail.png'
import img1 from '/public/project1_1.png'
import img2 from '/public/project1_2.png'
import img3 from '/public/project1_3.png'
import img4 from '/public/project1_4.png'

export default function page(){
  const imgs = [img0, img1, img2, img3, img4]
  const badgesInfo = [
    {name: 'HTML5', color: 'E34F26', logo: 'html5'},
    {name: 'CSS3', color: '1572B6', logo: 'css3'},
    {name: 'JavaScript', color: 'F7DF1E', logo: 'javascript'},
    {name: 'MongoDB', color: '47A248', logo: 'mongodb'}
  ]
  const badgesInfo2 = [
    {name: 'Youtube', color: 'FF0000', logo: 'youtube', href: 'https://youtu.be/4GBBUhRyA1o?si=lkKnZ0r6pqYxvlsp'},
    {name: 'Github', color: '181717', logo: 'github', href: 'https://github.com/hyung-2/project-sns'},
  ]

  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle font'>재잘재잘</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <ImgBox imgs={imgs}/>
          <Badges badgesInfo={badgesInfo}/>
          <Badges badgesInfo={badgesInfo2}/>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.08.14 ~ 23.08.30 (1인) </h4>
          <div className='description'>
            <div className='aniShowDown'>
              <h3 className='des-title font'>프로젝트 소개</h3>
              <div className='font'>- 첫번째 프로젝트</div>
              <div className='font'>- SNS 구현</div>
              <div className=' font'>- 주요 기능</div>
              <div className='font space'>• 회원가입&로그인</div>
              <div className='font space'>• 게시글과 댓글 작성&수정&삭제</div>
              <div className='font space'>• 특정 게시글에 대한 좋아요&좋아요 취소</div>
              <div className='font space'>• 친구검색, 팔로우&언팔로우</div>
              <div className='font space'>• 프로필 수정&삭제, 프로필 사진 변경</div>
            </div>
            <div className='aniShowDown2'>
              <h3 className='des-title font'>느낀점</h3>
              <div className='font'>- 처음 진행한 프로젝트다 보니 보안 관련해서 구멍이 꽤 있었던 것 같다.</div>
              <div className='font'>- 데이터가 많아질수록 속도가 느려진다거나 제대로 동작하지 않는 현상이 있어서 아쉬웠다.</div>
              <div className='font'>- 서버 관련 공부를 더 해야겠다는 계기가 되었다.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}