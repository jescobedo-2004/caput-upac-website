import "./index.css";
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { Somos } from './components/Somos'; // Nuevo import
import { ProyectosYAcciones } from './components/ProyectosYAcciones'; // Nombre cambiado
import { Residencias } from './components/Residencias';
import { FormacionYMediacion } from './components/FormacionYMediacion'; // Nombre cambiado
import { PublicacionesYCirculaciones } from './components/PublicacionesYCirculaciones'; // Nombre cambiado
import { Videos } from './components/Videos'; // Nuevo import
import React, { useRef, useEffect } from 'react';

export function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentSectionIndex = useRef(0);
  const canScroll = useRef(true);
  const SCROLL_COOLDOWN = 600;

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); // Previene el scroll vertical por defecto

      if (scrollContainerRef.current) {
        const delta = event.deltaY;
        const numberOfSections = sectionRefs.current.length;

        if (!canScroll.current) return;

        let newIndex = currentSectionIndex.current;

        if (delta > 0) {
          // Desplazarse hacia adelante
          newIndex = Math.min(numberOfSections - 1, currentSectionIndex.current + 1);
        } else {
          // Desplazarse hacia atrás
          newIndex = Math.max(0, currentSectionIndex.current - 1);
        }

        if (newIndex !== currentSectionIndex.current) {
          currentSectionIndex.current = newIndex;
          scrollToSection(currentSectionIndex.current);
          canScroll.current = false;

          setTimeout(() => {
            canScroll.current = true;
          }, SCROLL_COOLDOWN);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div
        ref={scrollContainerRef}
        className="flex h-screen w-screen overflow-x-hidden snap-x snap-mandatory"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Sección Inicio */}
        <div id="inicio" ref={el => {
          if (el) sectionRefs.current[0] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-blue-100 snap-center">
          <Inicio />
        </div>

        {/* Sección Somos */}
        <div id="somos" ref={el => {
          if (el) sectionRefs.current[1] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-green-100 snap-center">
          <Somos />
        </div>

        {/* Sección Proyectos y Acciones */}
        <div id="proyectosYAcciones" ref={el => {
          if (el) sectionRefs.current[2] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white snap-center">
          <ProyectosYAcciones />
        </div>

        {/* Sección Residencias */}
        <div id="residencias" ref={el => {
          if (el) sectionRefs.current[3] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white snap-center">
          <Residencias />
        </div>

        {/* Sección Formación y Mediación */}
        <div id="formacionYMediacion" ref={el => {
          if (el) sectionRefs.current[4] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black snap-center">
          <FormacionYMediacion />
        </div>

        {/* Sección Publicaciones y Circulaciones */}
        <div id="publicacionesYCirculaciones" ref={el => {
          if (el) sectionRefs.current[5] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200 snap-center">
          <PublicacionesYCirculaciones />
        </div>

        {/* Sección Videos */}
        <div id="videos" ref={el => {
          if (el) sectionRefs.current[6] = el;
        }} className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-yellow-100 snap-center">
          <Videos />
        </div>
      </div>
    </>
  );
}

export default App;