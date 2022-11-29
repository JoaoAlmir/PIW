import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/paginaCadastro/paginaCadastro";
import { Feed } from "./pages/paginaFeed/Feed";
import { Login } from "./pages/paginaLogin/paginaLogin";
import { PaginaMatricula } from "./pages/paginaMatricula/PaginaMatricula";

export const AuthContext = createContext(null);


function App() {

    const [auth, setAuth] = useState({token:null, nome:null})

    return (
        <AuthContext.Provider value={{ auth: auth, setAuth:setAuth }}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Feed />} />

                    <Route path="/matricula/" element={<PaginaMatricula />} />
                    <Route path="/matricula/:id" element={<PaginaMatricula />} />
                    <Route path="/cadastro/" element={<Cadastro />} />
                    <Route path="/login/" element={<Login />} />

                </Routes>

            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;