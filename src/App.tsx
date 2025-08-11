import React from 'react';
import Image from './Image';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Meu App com Tailwind CSS
        </h1>
        <Image />
        <div className="mt-6 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Botão de Exemplo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;