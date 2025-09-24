import React from 'react';
import styles from './Somos.module.css';

export const Somos = () => {
  return (
    <section id="somos" className={styles.somosSection}>
      <img
        src="/explosion.svg" // Explosión principal de fondo
        alt="Explosión abstracta de fondo"
        className={styles.mainExplosion}
        loading="lazy"
      />
      <img
        src="/explosion.svg" // Explosión en la esquina superior derecha
        alt="Explosión decorativa en la esquina"
        className={styles.cornerExplosion}
        loading="lazy"
      />

      <div className={styles.somosGrid}>
        <h1 className={styles.somosTitle}>SOMOS</h1>
        <p className={styles.somosDescription}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
        </p>
        <div className={styles.imageGallery}>
          <img src="/explosion.svg" alt="Imagen de miembro del equipo" className={styles.memberImage} loading="lazy" />
          <img src="/explosion.svg" alt="Imagen de miembro del equipo" className={styles.memberImage} loading="lazy" />
        </div>
      </div>
    </section>
  );
};
