import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderUsuario = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* AQUI EL LOGO AMOR */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              {/* Puedes reemplazar el emoji con una imagen de logo */}
              <span className="text-5xl">👨‍⚕️</span>
              <span className="text-purple-600 font-bold text-5xl">MiAgenda</span>
            </Link>
          </div>


          

          <button 
            className="md:hidden bg-purple-400 text-purple-800 p-2"
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
        </div>

        
      </div>
    </header>
  );
};

export default HeaderUsuario;