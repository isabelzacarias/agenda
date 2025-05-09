import Header from '../components/HeaderUsuario';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">Iniciar Sesión</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Tu contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Ingresar
            </button>
            <Link 
              to="/registro" 
              className="w-full bg-green-300 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              Registrate
            </Link>
            <Link 
              to="/pantallaCarga" 
              className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
            >
              Iniciar Sesión
            </Link>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

