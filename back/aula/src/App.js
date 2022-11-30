import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { PaginaCriarAluno } from './components/pages/PaginaCriarAluno/PaginaCriarAluno';
import { PaginaDetalheAluno } from './components/pages/PaginaDetalheAluno/PaginaDetalheAluno';
import {PaginaPrincipal} from "./components/pages/PaginaHome/PaginaHome";
import { PaginaListarAlunos } from './components/pages/PaginaListarAlunos/PaginaListarAlunos';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';

export const authContext = createContext(null);

function App() {

  let [token, setToken] = useState(localStorage.getItem("token"));

  function setTokenLocal(token){
    setToken(token);
    localStorage.setItem("token", token);
  }
  console.log("Token", token);
  

  return (
    <authContext.Provider value={{token:token, setToken:setTokenLocal}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              token == null?
              <Navigate to="/alunos/login"></Navigate>:
              <PaginaPrincipal></PaginaPrincipal>
            }></Route>
            <Route path="/alunos" element={<PaginaListarAlunos></PaginaListarAlunos>}></Route>
            <Route path="/alunos/create" element={<PaginaCriarAluno></PaginaCriarAluno>}></Route>
            <Route path="/alunos/login" element={<PaginaLogin></PaginaLogin>}></Route>
            <Route path="/alunos/:matricula" element={<PaginaDetalheAluno></PaginaDetalheAluno>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </authContext.Provider>
    
  );
}

export default App;
