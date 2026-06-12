import { useState, useEffect } from 'react';
import './bgImg.css'

function bgImg(src: string, op: number = 0.75, title: string = "-", date: string = "-") {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <div style={{
      margin: '0',
      width: '1920px',
      height: '900px',
      overflow: 'hidden',
    }} className={`fade-in ${isVisible ? 'active' : ''}`}>
        <img src={src} style={{ width: '1920px', height: '1200px', opacity: op }} />
        <div className="text-overlay">
          <h1>{title != "-" ? title : ""}</h1>
          <p>{date != "-" ? date : ""}</p>
        </div>
      </div>
    </>
  )
}

export default bgImg
