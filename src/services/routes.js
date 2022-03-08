import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Inicio from "../pages/inicio";
import Header from '../component/Header'
import Painel from '../component/Painel'
import Cadastro from "../pages/cadastro";
import NaoEncontrada from "../pages/naoEncontrada";


const Rotas = () => {
    return(
      
        <Router>
            <Header/>
            <Painel/>
            <Routes>
                <Route exact path="/" element={<Inicio/>}></Route>
                <Route exact path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="*" element={<NaoEncontrada/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;