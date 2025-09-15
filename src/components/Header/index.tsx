import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
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
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#proyectos">proyectos</a></li>
          <li><a href="#residencias">residencias</a></li>
          <li><a href="#charlasyTalleres">charlas y talleres</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};
