import React, { useState, useEffect, RefObject } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  scrollRef: RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProps> = ({ scrollRef }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  useEffect(() => {
    const currentScrollContainer = scrollRef.current;
    if (!currentScrollContainer) return;

    let lastScrollX = currentScrollContainer.scrollLeft;
    const handleScroll = () => {
      const currentScrollX = currentScrollContainer.scrollLeft;

      if (currentScrollX > lastScrollX && currentScrollX > 100) {
        // Scrolling right
        setIsHidden(true);
      } else {
        // Scrolling left
        setIsHidden(false);
      }
      lastScrollX = currentScrollX;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < 100) { // If mouse is within 100px from the top
        setIsHoveringTop(true);
      } else {
        setIsHoveringTop(false);
      }
    };

    currentScrollContainer.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      currentScrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [scrollRef]);

  const headerClasses = `${styles.header} ${isHidden && !isHoveringTop ? styles.hidden : ''}`;

  return (
    <header className={headerClasses}>
      {/* Logo: cambia aquí el path si no está en /public */}
      <a href="#inicio" className={styles.logoLink} aria-label="CaputUpac - inicio">
        <img
          className={styles.logo}
          src="/logo.svg"  alt=" " // ← AQUÍ: si el archivo está en /public/logo.svg
        />
      </a>

      {/* Redes arriba a la derecha */}
      <div className={styles.socials} aria-label="Redes sociales">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src="/icons/instagram.svg" alt="" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <img src="/icons/facebook.svg" alt="" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
          <img src="/icons/youtube.svg" alt="" />
        </a>
      </div>

      {/* Navegación (en línea / horizontal) */}
      <nav className={styles.nav} aria-label="Navegación principal">
        <ul className={styles.menu}>
          <li><a href="#somos">somos</a></li>
          <li><a href="#proyectosYAcciones">proyectos y acciones</a></li>
          <li><a href="#residencias">residencias</a></li>
          <li><a href="#formacionYMediacion">formación y mediación</a></li>
          <li><a href="#publicacionesYCirculaciones">publicaciones y circulaciones</a></li>
          <li><a href="#videos">videos</a></li>
        </ul>
      </nav>
    </header>
  );
};
