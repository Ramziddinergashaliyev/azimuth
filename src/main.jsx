import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
const App = lazy(() => import("./App.jsx"))
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import Leazy from './components/leazy/Leazy.jsx'
import "./lang/i18n.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Leazy/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
)
