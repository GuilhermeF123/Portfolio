import './App.css'
import Cliente from './components/Experiencias'
import Footer from './components/Footer'
import Contato from './components/Contato'
import Menu from './components/Menu'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'

import { BrowserRouter as Navegador, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navegador>
        <Menu />
        <Routes>
          <Route exact path="/" element={"Seja bem-vindo ao meu Portfólio!"} />
          <Route path="/experiencias" element={<Cliente />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />

        </Routes>
      </Navegador>
      <Footer />
    </>
  )
}
export default App;