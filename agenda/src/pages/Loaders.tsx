import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/homeusuario');
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600/50 to-purple-400/50 backdrop-blur-sm">
      {/* Logo o Título */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white text-center">
         (EL nombre del proyecto amor)
        </h2>
        <p className="text-white/80 mt-2 text-center">
          Cargando tu espacio familiar...
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-full gap-x-3 flex justify-center items-center mb-6">
          <div 
            className="w-4 h-4 bg-[#d991c2] rounded-full animate-bounce" 
            style={{ animationDelay: '0ms' }}
          />
          <div 
            className="w-4 h-4 bg-[#9869b8] rounded-full animate-bounce" 
            style={{ animationDelay: '150ms' }}
          />
          <div 
            className="w-4 h-4 bg-[#6756cc] rounded-full animate-bounce" 
            style={{ animationDelay: '300ms' }}
          />
        </div>
        
        <div className="text-white/90 text-sm animate-pulse">
          Preparando todo para ti...
        </div>
      </div>

      <div className="mt-12 opacity-50">
        <span className="text-6xl animate-pulse">👨‍⚕️</span>
      </div>

      <div className="mt-4 text-white/60 text-sm">
        Redirigiendo en unos segundos...
      </div>

      <div className="fixed bottom-4 text-white/70 text-sm">
        <p>(EL nombre del proyecto amor)</p>
      </div>
    </div>
  );
}

export default Loader;
