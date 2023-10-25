import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPadrao from "./Componentes/LayoutPadrao";
import PaginaNaoEncontrada from "./Componentes/Paginas/PaginaNaoEncontrada";
import PaginaInicial from "./Componentes/Paginas/PaginaInicial";
import PaginaVeiculo from "./Componentes/Paginas/PaginaVeiculo";
import ScrollToTop from "./Componentes/ScrollToTop";
import PaginaPesquisa from "./Componentes/Paginas/PaginaPesquisa";

function AppRoutes() {
  

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LayoutPadrao/>}>
          <Route index element={<PaginaInicial/>}/>
          <Route path="pesquisar" element={<PaginaPesquisa/>}/>
          <Route path="veiculo/:id/*" element={<PaginaVeiculo/>}/>
        </Route>

        <Route path="*" element={<PaginaNaoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
