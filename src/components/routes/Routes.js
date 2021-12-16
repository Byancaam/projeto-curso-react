import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/login/Login";
import ListaProdutos from "../pages/produtos/ListaProdutos";
import CadastroProdutos from "../pages/cadastro/CadastroProdutos";
import CadastroUsuario from "../pages/usuarios/CadastroUsuario";

const Rotas = () => (
  <Routes>
    {<Route path="/" element={<ListaProdutos />} />}
    <Route path="/login" element={<Login />} />
    {<Route path="/cadastro/produtos" element={<CadastroProdutos />} />}
    <Route path="/cadastro/usuarios" element={<CadastroUsuario />} />
  </Routes>
);

export default Rotas;
