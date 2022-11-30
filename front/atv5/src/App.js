import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed } from "./pages/paginaFeed/Feed";
import { PaginaPostar } from "./pages/paginaPostar/PaginaPostar";

export const AuthContext = createContext(null);


function App() {

    const [auth, setAuth] = useState({token:null, nome:null})

    return (
        <AuthContext.Provider value={{ auth: auth, setAuth:setAuth }}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Feed />} />

                    <Route path="/postar/" element={<PaginaPostar />} />
                    

                </Routes>

            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;