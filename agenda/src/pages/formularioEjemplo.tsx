import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Datos de ejemplo - En un caso real esto vendría de una API o base de datos
const instituciones = [
  { id: 1, nombre: "Hospital San José" },
  { id: 2, nombre: "Clínica Santa María" },
  { id: 3, nombre: "Centro Médico Nacional" }
];

const serviciosPorInstitucion = {
  1: [
    { id: 1, nombre: "Cardiología" },
    { id: 2, nombre: "Pediatría" }
  ],
  2: [
    { id: 3, nombre: "Dermatología" },
    { id: 4, nombre: "Oftalmología" }
  ],
  3: [
    { id: 5, nombre: "Traumatología" },
    { id: 6, nombre: "Neurología" }
  ]
};

const doctoresPorServicio = {
  1: [
    { id: 1, nombre: "Dr. Juan Pérez" },
    { id: 2, nombre: "Dra. María García" }
  ],
  2: [
    { id: 3, nombre: "Dr. Carlos López" },
    { id: 4, nombre: "Dra. Ana Martínez" }
  ],
  3: [
    { id: 5, nombre: "Dr. Luis Rodríguez" },
    { id: 6, nombre: "Dra. Patricia Sánchez" }
  ],
  4: [
    { id: 7, nombre: "Dr. Roberto Díaz" },
    { id: 8, nombre: "Dra. Carmen Torres" }
  ],
  5: [
    { id: 9, nombre: "Dr. Miguel Ángel" },
    { id: 10, nombre: "Dra. Laura Vega" }
  ],
  6: [
    { id: 11, nombre: "Dr. Fernando Ruiz" },
    { id: 12, nombre: "Dra. Sofia Castro" }
  ]
};

const FormularioEjemplo = () => {
  // Cambiamos los tipos de estado para manejar números en lugar de strings
  const [institucionSeleccionada, setInstitucionSeleccionada] = useState<number | ''>('');
  const [servicioSeleccionado, setServicioSeleccionado] = useState<number | ''>('');
  const [doctorSeleccionado, setDoctorSeleccionado] = useState<number | ''>('');

  const handleInstitucionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Convertimos el valor a número
    setInstitucionSeleccionada(e.target.value ? Number(e.target.value) : '');
    setServicioSeleccionado('');
    setDoctorSeleccionado('');
  };

  const handleServicioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Convertimos el valor a número
    setServicioSeleccionado(e.target.value ? Number(e.target.value) : '');
    setDoctorSeleccionado('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Agenda tu cita
          </h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Selecciona la Institución
              </label>
              <select
                className="w-full p-2 border rounded-md"
                value={institucionSeleccionada}
                onChange={handleInstitucionChange}
              >
                <option value="">Seleccione una institución</option>
                {instituciones.map((inst) => (
                  <option key={inst.id} value={inst.id}>
                    {inst.nombre}
                  </option>
                ))}
              </select>
            </div>

            {institucionSeleccionada && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Selecciona el Servicio
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={servicioSeleccionado.toString()}
                  onChange={handleServicioChange}
                >
                  <option value="">Seleccione un servicio</option>
                  {serviciosPorInstitucion[institucionSeleccionada as keyof typeof serviciosPorInstitucion]?.map((serv) => (
                    <option key={serv.id} value={serv.id.toString()}>
                      {serv.nombre}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {servicioSeleccionado && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Selecciona el Doctor
                </label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={doctorSeleccionado.toString()}
                  onChange={(e) => setDoctorSeleccionado(e.target.value ? Number(e.target.value) : '')}
                >
                  <option value="">Seleccione un doctor</option>
                  {doctoresPorServicio[servicioSeleccionado as keyof typeof doctoresPorServicio]?.map((doc) => (
                    <option key={doc.id} value={doc.id.toString()}>
                      {doc.nombre}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Agendar Cita
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
    
  );
};

export default FormularioEjemplo;