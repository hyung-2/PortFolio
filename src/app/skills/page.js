
async function skills(props){
  // console.log(props)

  const frontRes = await fetch(`${process.env.URL}frontIcons`)
  const backRes = await fetch(`${process.env.URL}backIcons`)
  const frontIcons = await frontRes.json()
  const backIcons = await backRes.json()

  return(
    <>
      <h2 className="pageTitle font">My skills</h2>
      <h3 className="IconTitle aniShowDown font">Front-end</h3>
      <div className="IconsBox">
          {frontIcons.map(icon => {
            return(
              <div className="iconBox aniShowDown">
              <svg width='50' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>{icon.title}</title>
                <path style={{fill:`${icon.color}`}} d={icon.path} />
              </svg>
              <div className="iconTitle font">{icon.title}</div>
              </div>
            )
          })}
      </div>
      <h3 className="IconTitle aniShowDown2 font">Back-end</h3>
      <div className="IconsBox">
      {backIcons.map(icon => {
            return(
              <div className="iconBox aniShowDown2">
              <svg width='50' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>{icon.title}</title>
                <path style={{fill:`${icon.color}`}} d={icon.path} />
              </svg>
              <div className="iconTitle font">{icon.title}</div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default skills