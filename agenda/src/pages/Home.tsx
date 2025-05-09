import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            (El nombre de la app amor)
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Organiza y gestiona las citas médicas de toda tu familia en un solo lugar. 
            Nunca más olvides una cita importante.
          </p>
          <Link 
            to="/login" 
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors inline-block"
          >
            Comenzar a Organizar
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ¿Por qué usar (El nombre de la app amor)?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Gestión Familiar</h3>
              <p className="text-gray-600">
                Registra y organiza las citas médicas de cada miembro de tu familia de manera independiente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Recordatorios Inteligentes</h3>
              <p className="text-gray-600">
                Recibe notificaciones personalizadas para cada cita programada y nunca pierdas una consulta importante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-purple-600 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Historial Médico</h3>
              <p className="text-gray-600">
                Mantén un registro detallado de todas las citas, especialistas y tratamientos de cada miembro de la familia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ¿Cómo Funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-semibold mb-2">Regístrate</h3>
              <p className="text-gray-600">Crea tu cuenta familiar</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-semibold mb-2">Agrega Miembros</h3>
              <p className="text-gray-600">Registra a tu familia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-semibold mb-2">Programa Citas</h3>
              <p className="text-gray-600">Agenda las consultas médicas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">4️⃣</div>
              <h3 className="font-semibold mb-2">Recibe Alertas</h3>
              <p className="text-gray-600">Mantente informado</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Mantén a tu familia al día con sus citas médicas
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Comienza hoy a organizar las citas médicas de toda tu familia de manera eficiente y sin complicaciones.
          </p>
          <div className="space-x-4">
            <Link 
              to="/register" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
            >
              Crear Cuenta Familiar
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-block border border-purple-600"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;