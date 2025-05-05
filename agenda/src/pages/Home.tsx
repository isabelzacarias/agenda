
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold text-center text-blue-500">
            ¡Bienvenido a tus citas!
          </h1>
          
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold">Información Principal</h2>
            <p className="text-gray-600 mt-2">
              Aqui mi amor no se que vaya a colocar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-200 p-4 rounded">Elemento 1</div>
            <div className="bg-blue-300 p-4 rounded">Elemento 2</div>
            <div className="bg-blue-400 p-4 rounded">Elemento 3</div>
            <div className="bg-blue-500 p-4 rounded">Elemento 4</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;