import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ReviewProvider } from './Components/Context/ReviewContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <ReviewProvider>
     <App />
   </ReviewProvider>
  </StrictMode>,
)
