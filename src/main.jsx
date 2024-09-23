import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClickCounter from './ClickCounter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter/>
  </StrictMode>,
)
