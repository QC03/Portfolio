import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './Intro/Intro.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Intro />
  </StrictMode>,
)
