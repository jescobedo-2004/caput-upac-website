import "./index.css";
import { Header } from './components/Header';
import { Inicio } from './components/Inicio';
import { Somos } from './components/Somos'; // Nuevo import
import { ProyectosYAcciones } from './components/ProyectosYAcciones'; // Nombre cambiado
import { Residencias } from './components/Residencias';
import { FormacionYMediacion } from './components/FormacionYMediacion'; // Nombre cambiado
import { PublicacionesYCirculaciones } from './components/PublicacionesYCirculaciones'; // Nombre cambiado
import { Videos } from './components/Videos'; // Nuevo import
import { Error404 } from './components/Error404'; // Nuevo import
import React, { useRef, useEffect, useState } from 'react';

export function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const currentSectionIndex = useRef(0);
  const canScroll = useRef(true);
  const SCROLL_COOLDOWN = 600;
  const [show404, setShow404] = useState(false);

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
    // Evita configurar el scroll mientras se muestra la 404
    if (show404) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      // Si estamos en la sección de Videos (índice 6), permitir scroll vertical
      if (currentSectionIndex.current === 6) {
        return; // Permitir scroll vertical natural
      }

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
  }, [show404]);

  const handleShow404 = () => {
    setShow404(true);
  };

  const handleHide404 = () => {
    setShow404(false);
  };

  if (show404) {
    return <Error404 onGoHome={handleHide404} />;
  }

  return (
    <>
      <Header scrollRef={scrollContainerRef as React.RefObject<HTMLDivElement>} />
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
        }} className="w-screen h-screen flex-shrink-0 text-white snap-center">
          <ProyectosYAcciones onShow404={handleShow404} />
        </div>

        {/* Sección Residencias */}
        <div id="residencias" ref={el => {
          if (el) sectionRefs.current[3] = el;
        }} className="w-screen h-screen flex-shrink-0 snap-center">
          <Residencias onShow404={handleShow404} />
        </div>

        {/* Sección Formación y Mediación */}
        <div id="formacionYMediacion" ref={el => {
          if (el) sectionRefs.current[4] = el;
        }} className="w-screen h-screen flex-shrink-0 bg-[#f2dc40] snap-center">
          <FormacionYMediacion onShow404={handleShow404} />
        </div>

        {/* Sección Publicaciones y Circulaciones */}
        <div id="publicacionesYCirculaciones" ref={el => {
          if (el) sectionRefs.current[5] = el;
        }} className="w-screen h-screen flex-shrink-0 snap-center">
          <PublicacionesYCirculaciones onShow404={handleShow404} />
        </div>

        {/* Sección Videos */}
        <div id="videos" ref={el => {
          if (el) sectionRefs.current[6] = el;
        }} className="w-screen h-screen flex-shrink-0 snap-center">
          <Videos onShow404={handleShow404} />
        </div>
      </div>
    </>
  );
}

export default App;