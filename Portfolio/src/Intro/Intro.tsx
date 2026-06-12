import bgImg from '../bgImg/bgImg.tsx'

function Intro() {

  return (
    <>
      {bgImg("/src/img/U1게임대회.JPG", 0.75, "U1 게임 대회", "2025. 11. 25")}
      <br/>
      {bgImg("/src/img/ski/리프트샷.JPEG", 0.75, "스키 강사", "2021. 11. ~ 2026. 3.")}
      
    </>
  )
}

export default Intro
