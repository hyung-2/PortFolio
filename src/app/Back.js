import Link from 'next/link'
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Back(){
  return(
    <Link href='/project'><AiOutlineArrowLeft size='24' color='#000'/></Link>
  )
}