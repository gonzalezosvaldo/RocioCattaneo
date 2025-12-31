import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Carta from './componentes/Carta/Carta';
import Fotos from './componentes/Fotos/Fotos';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename="/RocioCattaneo" >
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/Carta" element={ <Carta />} />
          <Route path="/Fotos" element={ <Fotos />} />
        </Routes>
      </main>
      <Footer />
      </Router>
  )
}

export default App
