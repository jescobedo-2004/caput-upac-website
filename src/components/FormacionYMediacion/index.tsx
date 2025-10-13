import React from 'react';
import styles from './FormacionYMediacion.module.css';

interface FormacionYMediacionProps {
  onShow404: () => void;
}

export const FormacionYMediacion = ({ onShow404 }: FormacionYMediacionProps) => {
  return (
    <section id="formacionYMediacion" className={styles.formacionYMediacionSection}>
      <div className={styles.bannerGrid}>
        <img
          src="/explosion_roja.svg"
          alt="Representación abstracta de una explosión creativa"
          className={styles.explosionSvg}
          loading="lazy"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.subtitlesContainer}>
          <button onClick={onShow404} className={styles.subtitleLink}>PROYECTO 11</button>
          <button onClick={onShow404} className={styles.subtitleLink}>OPERACIONES SENSIBLES</button>
          <button onClick={onShow404} className={styles.subtitleLink}>CHARLAS Y TALLERES EN UNIVERSIDADES</button>
          <button onClick={onShow404} className={styles.subtitleLink}>LICEOS Y ESPACIOS INDEPENDIENTES</button>
          <button onClick={onShow404} className={styles.subtitleLink}>GIRAS DE PUBLICACIONES</button>
        </div>
        <h1 className={styles.mainTitle}>formación & mediación</h1>
      </div>
    </section>
  );
};
