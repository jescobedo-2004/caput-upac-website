import React from 'react';
import styles from './Error404.module.css';

interface Error404Props {
  onGoHome?: () => void;
}

export const Error404: React.FC<Error404Props> = ({ onGoHome }) => {
  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col_sm_12}>
            <div className={styles.col_sm_10}>
              <div className={styles.four_zero_four_bg}>
                <h1 className={styles.text_center}>404</h1>
              </div>
              
              <div className={styles.contant_box_404}>
                <h3 className={styles.h2}>
                  Parece que te has perdido
                </h3>
                
                <p>¡La página que buscas no está disponible!</p>
                
                <button 
                  className={styles.link_404}
                  onClick={handleGoHome}
                >
                  Ir al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
