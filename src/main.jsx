import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// src/
// ├── components/
// │   ├── Sidebar.jsx            // Profile pic, nav (Profile, Services, etc.)
// │   ├── Hero.jsx               // “Deniz Atici”, subtitle, icons
// │   ├── Description.jsx        // The paragraph text about language passion
// │   ├── SectionHeading.jsx     // Reusable section title (e.g., “Services”)
// │   ├── Services.jsx           // Content for the Services section
// │   ├── Testimony.jsx          // Testimonial block
// │   └── Contact.jsx            // Contact text or form

