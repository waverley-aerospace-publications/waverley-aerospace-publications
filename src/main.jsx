import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './routes/About'
import Cards from './routes/Cards';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Cards />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
