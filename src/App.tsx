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
      <main>
        <Inicio />
        <Proyectos />
        <Residencias />
        <CharlasYTalleres />
        <Contacto />
      </main>
    </>
  );
}

export default App;
