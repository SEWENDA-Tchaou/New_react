import {BrowserRouter, Route, Routes} from 'react-router-dom';import Header from './components/Header'
import Contact from './components/Contact';
import Apropos from './components/Apropos';
import Realisattion from './components/Realisattion';
import './App.css'
function App() {

  return (
    <BrowserRouter>
      < Routes>
        <Route path='/' element={<Header />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/apropos' element={<Apropos />} />
        <Route path='/realisation' element={<Realisattion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
