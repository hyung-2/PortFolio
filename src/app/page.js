
import Link from "next/link";

export default function Home() {

  return (
    <div className="home">
      <Link className="link" href={`/about`}>
        {/* <div className="imgBox"> */}
          {/* <img src='/text.png' alt="main"></img> */}
          <h2 className="homeTitle">Namhyung's Portfolio</h2>
        {/* </div> */}
      </Link>
    </div>
  )
}
