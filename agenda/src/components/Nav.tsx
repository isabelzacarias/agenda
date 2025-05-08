import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-purple-500 shadow-lg">
            <div className="flex justify-center gap-x-15 py-4">
                <Link to="/" className="text-white text-2xl hover:text-purple-400 transition-colors duration-200">
                    Inicio
                </Link>
                <Link to="/formulario" className="text-white text-2xl hover:text-purple-200 transition-colors duration-200">
                    Agendar Cita
                </Link>
                <Link to="/formulario" className="text-white text-2xl hover:text-purple-200 transition-colors duration-200">
                    Historial
                </Link>
                <Link to="/formulario" className="text-white text-2xl hover:text-purple-200 transition-colors duration-200">
                    Contacto
                </Link>
                <Link to="/formulario" className="text-white text-2xl hover:text-purple-200 transition-colors duration-200">
                    Perfil
                </Link>
            </div>

            <button
                className="md:hidden text-white p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Menú móvil */}
            {
                isMenuOpen && (
                    <div className="md:hidden">
                        <nav className="px-2 pt-2 pb-4 space-y-2">
                            <Link to="/" className="block text-white hover:bg-purple-600 rounded px-3 py-2">
                                Inicio
                            </Link>
                            <Link to="/formulario" className="block text-white hover:bg-purple-600 rounded px-3 py-2">
                                Agendar Cita
                            </Link>
                            <Link to="/formulario" className="block text-white hover:bg-purple-600 rounded px-3 py-2">
                                Historial
                            </Link>
                            <Link to="/formulario" className="block text-white hover:bg-purple-600 rounded px-3 py-2">
                                Contacto
                            </Link>
                            <button className="w-full text-center bg-white text-purple-500 px-4 py-2 rounded-lg font-medium hover:bg-purple-100 transition-colors duration-200">
                                Iniciar Sesión
                            </button>
                        </nav>
                    </div>
                )
            }

        </nav>
    )
};

export default Nav;
