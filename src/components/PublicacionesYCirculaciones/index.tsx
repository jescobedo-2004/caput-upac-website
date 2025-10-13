import React from 'react';
import styles from './PublicacionesYCirculaciones.module.css';

interface PublicacionesYCirculacionesProps {
  onShow404: () => void;
}

const PublicacionesYCirculaciones: React.FC<PublicacionesYCirculacionesProps> = ({ onShow404 }) => {
  return (
    <section className={styles.publicacionesYCirculacionesSection}>
      <img src="/explosion.svg" alt="Explosión" className={styles.explosionImage} />
      <h1 className={styles.mainTitle}>publicaciones</h1>
      <h1 className={styles.mainTitle}>y circulación</h1>
      <div className={styles.subtitleContainer}>
        <button onClick={onShow404} className={styles.subtitle}>CAPUT 10</button>
        <button onClick={onShow404} className={styles.subtitle}>AGENCIA DE VALORES</button>
        <button onClick={onShow404} className={styles.subtitle}>CUEROS</button>
        <button onClick={onShow404} className={styles.subtitle}>AGÍTESE ANTES DE USAR</button>
        <button onClick={onShow404} className={styles.subtitle}>BURN ALL BOOKS</button>
        <button onClick={onShow404} className={styles.subtitle}>GUTTER FEST</button>
        <button onClick={onShow404} className={styles.subtitle}>FANZINES Y PUBLICACIONES</button>
      </div>
    </section>
  );
};

export { PublicacionesYCirculaciones };
