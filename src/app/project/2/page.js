import Back from '../../Back'
import Button from '../../Button'


export default function page(){
  const github = 'https://github.com/Galaxy-104/project2_movie'
  return(
    <>
    <div className='projectDetailsBox'>
      <div className='flex'>
        <Back/>
        <h3 className='projectTitle font'>무드</h3>
      </div>
      <div className='projectContent'>
        <div className='viewBox'>
          <div className='viewImgBox'>
            <img src='/project2_thumbnail.png'/>
          </div>
        </div>
        <div className='descriptionBox'>
          <h4 className='project-subtitle font'>23.09.14 ~ 23.10.17 (2인) </h4>
          <p className='font'>리액트를 활용한 웹사이트입니다.</p>
          <p className='font'>리액트 특성인 컴포넌트 재활용에 초점을 두고 생각한것이 영화를 주제로한 이상형월드컵이었습니다.<br/>
          이상형 월드컵으로 흥미를 이끌고, 1등으로 뽑힌 영화의 장르를 토대로 영화를 추천해주는 사이트 입니다.<br/>
          저는 장르를 추천하는 메인페이지와 즐겨찾기 기능을 구현하였습니다.</p>
        </div>
      </div>
          <Button github={github}/>
    </div>
    </>
  )
}