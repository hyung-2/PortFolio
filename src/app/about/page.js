'use client'

import { useState } from "react";

import { AiFillTag } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaBirthdayCake } from "react-icons/fa";


function about(props){
  // console.log(props)
  const [typing, setTyping] = useState(false)

  return(
    <>
      <h2 className="pageTitle font">About me</h2>
      <div className="about">
        <div className="contentBox aniShowDown">
          <div className="flex">
            <AiFillTag/>
            <p className="contact-item font name">안남형</p>
          </div>
          <div className="flex">
            <FaBirthdayCake/>
            <p className="contact-item font name">1994.02.21</p>
          </div>
        </div>
        <div className="photobox">
          {/* <img src="/profile.png"/> */}
        </div>
        <div className="contentBox aniShowDown">
          <div className="font name">Contact!</div>
          <div className="contact">
            <div className="flex">
              <AiFillMail/>
              <p className="contact-item font">이메일: <a href="mailto:nh_0221@naver.com" target='_blank' title="메일 보내기">nh_0221@naver.com</a></p>
            </div>
            <div className="flex">
              <AiFillGithub/>
              <p className="contact-item font">깃허브: <a href="https://github.com/hyung-2" target='_blank' title="깃허브로 이동">hyung-2</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="introBox">
        <p className="intro font">안녕하세요. <br/>
        새로 배우는 것이 재미있고 그 배움을 토대로 도전하는 것이 즐거운 <span className="">안남형</span> 입니다. <br/>
        현재 프론트엔드 개발자를 희망하고 있습니다. </p>
      </div>
    </>
  )
}

export default about