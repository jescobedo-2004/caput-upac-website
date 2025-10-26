import React from 'react';
import styles from './Somos.module.css';

export const Somos = () => {
  return (
    <section id="somos" className={styles.somosSection}>
      {/* Bloques de color siguiendo la referencia de la grilla */}
      <div aria-hidden className={styles.somosBlockYellow} />
      <div aria-hidden className={styles.somosBlockBlue} />
      <img
        src="/explosion_azul_claro.svg" // Explosión principal de fondo
        alt="Explosión abstracta de fondo"
        className={styles.mainExplosion}
        loading="lazy"
      />
      <img
        src="/explosion_azul_claro.svg" // Explosión en la esquina superior derecha
        alt="Explosión decorativa en la esquina"
        className={styles.cornerExplosion}
        loading="lazy"
      />

      <div className={styles.somosGrid}>
        {/* Título "somos" que ocupa las primeras dos columnas */}
        <h1 className={styles.somosTitle}>somos</h1>
        
        {/* Contenido de dos personas que ocupa las dos columnas restantes */}
        <div className={styles.personsContainer}>
          {/* Primera persona */}
          <div className={styles.personCard}>
            <p className={styles.personDescription}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
            <img 
              src="/explosion.svg" 
              alt="Imagen de miembro del equipo" 
              className={styles.personImage} 
              loading="lazy" 
            />
          </div>
          
          {/* Segunda persona */}
          <div className={styles.personCard}>
            <p className={styles.personDescription}>
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
            <img 
              src="/explosion.svg" 
              alt="Imagen de miembro del equipo" 
              className={styles.personImage} 
              loading="lazy"

            />
          </div>
        </div>
      </div>
    </section>
  );
};
