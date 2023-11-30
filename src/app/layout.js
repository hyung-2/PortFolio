
import './globals.css'
import Menus from './Menus'



export const metadata = {
  title: `Namhyung's Portfolio`,
  description: `Namhyung's Portfolio with next.js`,
}

export default function RootLayout({ children }) {
  console.log(children)
  return (
    <html>
      <body>
          <div className='box'>
            <div className='content'>{children}</div>
            <Menus/>
          </div>
      </body>
    </html>
  )
}
