import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Intro from './Intro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Intro />
  </StrictMode>,
)
