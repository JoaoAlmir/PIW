import { BrowserRouter, Route, Routes } from "react-router-dom";
import {PaginaMostrar} from "./components/pages/PaginaMostrar/PaginaMostrar"
import {PaginaCadastro} from "./components/pages/PaginaCadastro/PaginaCadastro"


function App() {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/mostrar" element={<PaginaMostrar></PaginaMostrar>}> </Route>
                <Route path="/cadastro" element={<PaginaCadastro></PaginaCadastro>}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;