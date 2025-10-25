import React, { useState } from 'react';
import styles from './Inicio.module.css';

export const Inicio = () => {
  const [isDebugGrid, setIsDebugGrid] = useState(false); // Estado para la grilla de depuración

  return (
    <section id="inicio" className={styles.inicioSection}>
      <div className={`${styles.bannerGrid} ${isDebugGrid ? styles.debugGrid : ''}`}>
        {/* Cuadro verde en esquina inferior derecha */}
        <div aria-hidden className={styles.cornerGreenSquare} />
        {/* Mapa SVG */}
        <img
          src="/mapa.svg" // Asumiendo que mapa.svg está en la carpeta /public
          alt="Mapa con puntos de interés de la explosión creativa"
          className={styles.mapaSvg}
          loading="lazy"
        />
      </div>

      {/* Botón para alternar la grilla de depuración (solo en desarrollo) */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={() => setIsDebugGrid(!isDebugGrid)}
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            zIndex: 9999,
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {isDebugGrid ? 'Ocultar Grilla DEBUG' : 'Mostrar Grilla DEBUG'}
        </button>
      )}
    </section>
  );
};