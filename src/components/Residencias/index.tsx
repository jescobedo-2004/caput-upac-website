import React from 'react';
import styles from './Residencias.module.css';
import explosionGraphic from '../../../public/explosion.svg';

export const Residencias = () => {
  return (
    <section id="residencias" className={styles.residenciasGrid}>
      <h1 className={styles.residenciasTitle}>Residencias</h1>

      <a href="#" className={`${styles.residenciaLink} ${styles.rioSeco}`}>RÍO SECO</a>
      <a href="#" className={`${styles.residenciaLink} ${styles.putre}`}>PUTRE</a>
      <a href="#" className={`${styles.residenciaLink} ${styles.losChoros}`}>LOS CHOROS</a>
      <a href="#" className={`${styles.residenciaLink} ${styles.confluencias}`}>CONFLUENCIAS</a>
      <a href="#" className={`${styles.residenciaLink} ${styles.travesias}`}>TRAVESÍAS</a>
      <a href="#" className={`${styles.residenciaLink} ${styles.lagda}`}>LAGDA</a>
      <a href="#" className={`${styles.residenciaLink} ${styles.internacionales}`}>INTERNACIONALES</a>

      <div className={styles.explosionGraphic}>
        <img src={explosionGraphic} alt="Graphic Element" />
      </div>
    </section>
  );
};
