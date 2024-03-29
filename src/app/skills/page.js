
import icons from '../../../icons.json'

const frontIcons = icons.frontIcons
const backIcons = icons.backIcons

async function skills(){

  return(
    <>
      <h2 className="pageTitle font">My skills</h2>
      <h3 className="IconTitle aniShowDown font">Front-end</h3>
      <div className="IconsBox">
          {frontIcons.map((icon,id) => {
            return(
              <div className="iconBox aniShowDown" key={id}>
              <svg width='70' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      {backIcons.map((icon,id) => {
            return(
              <div className="iconBox aniShowDown2" key={id}>
              <svg width='70' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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