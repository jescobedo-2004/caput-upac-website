import React, { useState } from 'react';
import styles from './ProyectosYAcciones.module.css';
/* import Explosion from '../Explosion'; */

export const ProyectosYAcciones = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleProjectClick = (index: number) => {
    setExpandedProject(index === expandedProject ? null : index);
  };

  return (
    <section id="proyectosYAcciones" className={styles.proyectosYAccionesSection}>
      <img
        src="/explosion.svg"
        alt="Explosión superior izquierda"
        className={styles.topLeftExplosion}
      />
      <img
        src="/explosion.svg"
        alt="Explosión inferior derecha"
        className={styles.bottomRightExplosion}
      />
      <div className={styles.projectTitlesContainer}>
        {projectTitles.map((project, index) => (
          <div key={index}>
            <h2
              className={styles.projectTitle}
              onClick={() => handleProjectClick(index)}
            >
              {project.title}
            </h2>
            {expandedProject === index && (
              <div className={styles.projectSummary}>
                <p>{project.summary}</p>
                <button 
                  className={styles.readMoreButton}
                  onClick={() => alert(`Redirigiendo a la página de ${project.title}`)}
                >
                  Leer completo
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.mainTitleContainer}>
        <h1 className={styles.sectionTitlePrimary}>proyectos &</h1>
        <h1 className={styles.sectionTitleSecondary}>acciones</h1>
      </div>
    </section>
  );
};

const projectTitles = [
  { title: "PRESIÓN", summary: "Resumen de PRESIÓN..." },
  { title: "CARGA MÁXIMA", summary: "Resumen de CARGA MÁXIMA..." },
  { title: "ENEBA", summary: "Resumen de ENEBA..." },
  { title: "APTHAPI", summary: "Resumen de APTHAPI..." },
  { title: "CARAVANA 60", summary: "Resumen de CARAVANA 60..." },
  { title: "REANIMACIONES", summary: "Resumen de REANIMACIONES..." },
  { title: "AGENCIA DE VALORES", summary: "Resumen de AGENCIA DE VALORES..." },
  { title: "MÁS QUINOA MENOS ARROZ", summary: "Resumen de MÁS QUINOA MENOS ARROZ..." },
  { title: "DOCUMENTA 15", summary: "Resumen de DOCUMENTA 15..." },
  { title: "MONO BONITO", summary: "Resumen de MONO BONITO..." },
  { title: "ZONA DE CAMPAMENTO", summary: "Resumen de ZONA DE CAMPAMENTO..." },
  { title: "FESTIVAL PRESIÓN 10 AÑOS", summary: "Resumen de FESTIVAL PRESIÓN 10 AÑOS..." },
  { title: "EXPLORACIONES: CENTEX", summary: "Resumen de EXPLORACIONES: CENTEX..." },
  { title: "RECOSTADOS", summary: "Resumen de RECOSTADOS..." },
  // Puedes añadir más proyectos si es necesario, siguiendo este formato
];
