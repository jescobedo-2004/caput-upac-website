import React from 'react';
import styles from './FormacionYMediacion.module.css';

export const FormacionYMediacion = () => {
  return (
    <section id="formacionYMediacion" className={styles.formacionYMediacionSection}>
      <div className={styles.bannerGrid}>
        <img
          src="/explosion.svg"
          alt="Representación abstracta de una explosión creativa"
          className={styles.explosionSvg}
          loading="lazy"
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.subtitlesContainer}>
          <a href="#" className={styles.subtitleLink}>PROYECTO 11</a>
          <a href="#" className={styles.subtitleLink}>OPERACIONES SENSIBLES</a>
          <a href="#" className={styles.subtitleLink}>CHARLAS Y TALLERES EN UNIVERSIDADES</a>
          <a href="#" className={styles.subtitleLink}>LICEOS Y ESPACIOS INDEPENDIENTES</a>
          <a href="#" className={styles.subtitleLink}>GIRAS DE PUBLICACIONES</a>
        </div>
        <h1 className={styles.mainTitle}>formación & mediación</h1>
      </div>
    </section>
  );
};
