import "./index.css";
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { Proyectos } from './components/Proyectos';
import { Residencias } from './components/Residencias';
import { CharlasYTalleres } from './components/CharlasYTalleres';
import { Contacto } from './components/Contacto';

export function App() {
  return (
    <>
      <Header />
      <div className="relative">
        {/* Sección Inicio (vertical) */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-blue-100">
          <Inicio />
        </div>

        {/* Contenedor para scroll horizontal: Proyectos y Residencias */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="w-full h-full flex overflow-x-scroll snap-x snap-mandatory">
            {/* Proyectos (horizontal) */}
            <div className="w-screen h-full flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white snap-center">
              <Proyectos />
            </div>
            {/* Residencias (horizontal) */}
            <div className="w-screen h-full flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white snap-center">
              <Residencias />
            </div>
          </div>
        </div>

        {/* Sección Charlas y Talleres (vertical) */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <CharlasYTalleres />
        </div>

        {/* Sección Contacto (vertical) */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
          <Contacto />
        </div>
      </div>
    </>
  );
}

export default App;