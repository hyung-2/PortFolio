import Back from '../../Back'
import ImgBox from '../../ImgBox'
import Badges from '../../Badges'

import img0 from '/public/project3_thumbnail.png'
import img1 from '/public/project3_1.png'
import img2 from '/public/project3_2.png'
import img3 from '/public/project3_3.png'
import img4 from '/public/project3_4.png'


export default function page(){
  const imgs = [img0, img1, img2, img3, img4]
  const badgesInfo = [
    {name: 'ReactNative', color: '61DAFB', logo: 'react'},
    {name: 'Firebase', color: 'FFCA28', logo: 'Firebase'},
    {name: 'Node.js', color: '339933', logo: 'nodedotjs'},
    // {name: 'androidstudio', color: '3DDC84', logo: 'androidstudio'}
  ]
  const badgesInfo2 = [
    {name: 'Youtube', color: 'FF0000', logo: 'youtube', href: 'https://youtu.be/1xJojzia0y8?si=35Y6IdpGdhlxsQbm'},
    {name: 'Github', color: '181717', logo: 'github', href: 'https://github.com/hyung-2/RNproject'},
  ]

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
          <Badges badgesInfo={badgesInfo}/>
          <Badges badgesInfo={badgesInfo2}/>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.11.01 ~ 23.11.20 (4인) </h4>
          <div className='description'>
            <div className='aboutProject aniShowDown'>
              <h3 className='des-title font'>프로젝트 소개</h3>
              <div className='font'>- 리액트 네이티브를 활용한 프로젝트</div>
              <div className='font'>- 친구와 일정 공유, 채팅, 알람설정 기능 탑재</div>
              <div className='font'>- 주요 기능</div>
              <div className='font space'>• 회원가입&로그인</div>
              <div className='font space'>• 일정 추가&수정&삭제</div>
              <div className='font space'>• 해당 일정 멤버들과 채팅</div>
              <div className='font space des-title'>• 알람</div>
              <div className='font'>- 캘린더 부분 담당</div>
              <div className='font space'>• 스케쥴 추가&삭제&수정</div>
              <div className='font space'>• 멤버 추가&삭제&수정</div>
              <div className='font space'>• 해당 스케쥴 멤버들로 구성된 채팅방 생성&삭제</div>
              <div className='font space'>• 스케쥴 제목이나 멤버 변경시 채팅방에도 반영</div>
            </div>
            <div className='aniShowDown2'>
              <h3 className='des-title font'>느낀점</h3>
              <div className='font'>- 현재 사용중인 핸드폰에 어플을 깔아서 사용해봤는데 너무 신기했다.</div>
              <div className='font'>- 캘린더 라이브러리를 사용해봤는데 커스터마이징에 한계를 느껴 아쉬웠다.</div>
              <div className='font'>- 서버를 사용할 때 속도가 느려서 개선이 필요하다고 생각했다.</div>
              <div className='font'>- 평소 잘 사용하지 않던 함수를 사용하게 되어 다시 공부하는 계기가 되었다. </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}