import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Grid de secciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección de información */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mi Agenda Médica</h3>
            <p className="text-sm">
              Tu plataforma confiable para gestionar citas médicas de manera fácil y segura.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gray-300">Inicio</Link>
              </li>
              <li>
                <Link to="/servicios" className="text-sm hover:text-gray-300">Servicios</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-sm hover:text-gray-300">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 Teléfono: (123) 456-7890</li>
              <li>📧 Email: contacto@miagenda.com</li>
              <li>📍 Dirección: Calle Principal #123</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-purple-400 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm">
              © {new Date().getFullYear()} Mi Agenda Médica. Todos los derechos reservados.
            </p>
            {/* Redes sociales */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;