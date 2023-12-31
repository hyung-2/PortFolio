import Link from "next/link";

import { AiFillFile } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export default function Button({ align, github, more}){
  return(
    <div className={`linkBox ${align == 'vertical' ? 'vertical' : ''}`}>
      <Link href={more} className="btn"><AiOutlinePlus size='20'/></Link>
      {/* <Link href='/' target='_blank' className="btn"><AiFillFile size='20'/></Link> */}
      <Link href={github} target='_blank' className="btn"><AiOutlineGithub size='20'/></Link>
      <Link href='/' target='_blank' className="btn"><AiFillYoutube size='20'/></Link>
    </div>
  )
}