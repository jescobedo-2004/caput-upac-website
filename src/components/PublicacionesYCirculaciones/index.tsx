import React from 'react';
import styles from './PublicacionesYCirculaciones.module.css';

interface PublicacionesYCirculacionesProps {
  onShow404: () => void;
}

const PublicacionesYCirculaciones: React.FC<PublicacionesYCirculacionesProps> = ({ onShow404 }) => {
  return (
    <section className={styles.publicacionesYCirculacionesSection}>
      <div className={styles.bannerGrid}>
        <img src="/explosion_morado.svg" alt="Explosión" className={styles.explosionImage} />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>publicaciones y circulación</h1>
      </div>
    </section>
  );
};

export { PublicacionesYCirculaciones };
