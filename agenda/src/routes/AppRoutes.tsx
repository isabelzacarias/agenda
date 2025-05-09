import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FormularioEjemplo from "../pages/formularioEjemplo";
import Login from "../pages/Login";
import HomeUsuario from "../pages/HomeUsuario";
import Loader from "../pages/Loaders";
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
        <Route path="/formulario" element={<FormularioEjemplo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homeusuario" element={<HomeUsuario />} />
        <Route path="/pantallaCarga" element={<Loader />} />
        {/* Rutas comentadas para futuras implementaciones */}
        {/* <Route path="/productos" element={<ListaProductos />} /> */}
        {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/productos" element={<ListaProductos />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/productos/:id" element={<ProductDetail />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/productos" element={<ListaProductos />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;

