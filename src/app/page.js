
import Link from "next/link";

export default function Home() {

  return (
    <div className="home">
      <Link className="link" href={`/about`}>
          <h2 className="homeTitle">Namhyung&prime;s Portfolio</h2>
      </Link>
    </div>
  )
}
