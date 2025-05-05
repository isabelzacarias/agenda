import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
/*
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";
import ListaProductos from "../pages/listProductos";
*/
const AppRoutes = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

