import Link from 'next/link'
import './globals.css'


export const metadata = {
  title: `Namhyung's Portfolio`,
  description: `Namhyung's Portfolio with next.js`,
}

export default function RootLayout({ children }) {

  return (
    <html>
      <body>
          <div className='box'>
            <div className='menu'>
              <div className='menu-item'><Link href='/'>홈</Link></div>
              <div className='menu-item'><Link href={`/read/about`}>about</Link></div>
              <div className='menu-item'><Link href={`/read/skills`}>skills</Link></div>
              <div className='menu-item'><Link href={`/read/project`}>project</Link></div>
              <div className='menu-item'><Link href={`/read/contact`}>contact</Link></div>
            </div>
            <div className='content'>{children}</div>
          </div>
      </body>
    </html>
  )
}
