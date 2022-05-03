import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Author from './routes/Author'
import Cards from './routes/Cards';
import Contact from './routes/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path=''        element={<Cards />} />
          <Route path='author'  element={<Author />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
