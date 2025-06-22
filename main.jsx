import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Routes } from 'react-router-dom'
import { UserContext } from './Hooks/Context.jsx'; 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
      <UserContext>
        <App />
      </UserContext>

    </Routes>
  </StrictMode>,
)