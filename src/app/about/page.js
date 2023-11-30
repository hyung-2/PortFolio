import { AiFillTag } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


function about(props){
  // console.log(props)
  return(
    <>
      <h2 className="pageTitle font">About me</h2>
      <div className="about">
        <div className="photobox">
          <h2>사진</h2>
        </div>
        <div className="contentBox">
          <div className="introBox">
            <p className="intro font">안녕하세요. <br/>
            새로 배우는 것이 재미있고 그 배움을 토대로 도전하는 것이 즐거운 <span className="name">안남형</span> 입니다. <br/>
            현재 프론트엔드 개발자를 희망하고 있습니다. </p>
          </div>
          <div className="contact">
            <div className="flex">
              <AiFillMail/>
              <p className="contact-item font">이메일: <a href="mailto:nh_0221@naver.com" target='_blank'>nh_0221@naver.com</a></p>
            </div>
            <div className="flex">
              <AiFillGithub/>
              <p className="contact-item font">깃허브: <a href="https://github.com/hyung-2" target='_blank'>https://github.com/hyung-2</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about