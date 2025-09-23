import React from 'react';
import styles from './Inicio.module.css';
import explosionStyles from '../Explosion/Explosion.module.css';

export const Inicio = () => {
  return (
    <section id="inicio" className={styles.inicioSection}>
      <div className={styles.contentWrapper}>
        {/* Aquí puedes añadir el contenido de tu sección de Inicio */}
        <h1>Bienvenido a Inicio</h1>
        <p>Este es el contenido de la sección de inicio.</p>
        <img
          src="/explosion.svg"
          alt="Explosión"
          className={explosionStyles.explosion}
        />
      </div>
    </section>
  );
};
