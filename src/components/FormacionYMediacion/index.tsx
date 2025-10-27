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
          src="/explosion_transparente_rojo.svg"
          alt="Representación abstracta de una explosión creativa"
          className={styles.explosionSvg}
          loading="lazy"
        />
      </div>
      <div className={styles.contentContainer}>
        <h1 className={styles.mainTitle}>formación & mediación</h1>
      </div>
    </section>
  );
};
