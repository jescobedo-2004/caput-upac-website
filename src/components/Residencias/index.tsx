import React from 'react';
import styles from './Residencias.module.css';
import explosionGraphic from '../../../public/explosion.svg';

interface ResidenciasProps {
  onShow404: () => void;
}

export const Residencias = ({ onShow404 }: ResidenciasProps) => {
  return (
    <section id="residencias" className={styles.residenciasGrid}>
      <h1 className={styles.residenciasTitle}>Residencias</h1>

      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.rioSeco}`}>RÍO SECO</button>
      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.putre}`}>PUTRE</button>
      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.losChoros}`}>LOS CHOROS</button>
      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.confluencias}`}>CONFLUENCIAS</button>
      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.travesias}`}>TRAVESÍAS</button>
      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.lagda}`}>LAGDA</button>
      <button onClick={onShow404} className={`${styles.residenciaLink} ${styles.internacionales}`}>INTERNACIONALES</button>

      <div className={styles.explosionGraphic}>
        <img src={explosionGraphic} alt="Graphic Element" />
      </div>
    </section>
  );
};
