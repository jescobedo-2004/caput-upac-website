import React from 'react';
import styles from './FormacionYMediacion.module.css';

export const FormacionYMediacion = () => {
  const cardData = [
    { title: "Charla: Introducción a la Explosión Creativa", link: "#" },
    { title: "Taller: Desencadenando Ideas", link: "#" },
    { title: "Webinar: El Big Bang de la Innovación", link: "#" },
    { title: "Sesión: Creatividad Sin Límites", link: "#" },
    { title: "Masterclass: Innovación Disruptiva", link: "#" },
    { title: "Taller Avanzado: Proyectos de Impacto", link: "#" },
    { title: "Conferencia: Futuro Creativo", link: "#" },
    { title: "Bootcamp: Estrategias de Innovación", link: "#" },
    { title: "Sesión Interactiva: Diseño Centrado en el Usuario", link: "#" },
    { title: "Workshop: Pensamiento Lateral", link: "#" },
    { title: "Seminario: Liderazgo Creativo", link: "#" },
    { title: "Clase Abierta: Arte y Tecnología", link: "#" },
    { title: "Encuentro: Conectando Ideas", link: "#" },
    { title: "Demostración: Prototipado Rápido", link: "#" },
    { title: "Panel: Tendencias en Creatividad", link: "#" },
    { title: "Diálogo: Rompiendo Paradigmas", link: "#" },
  ];

  return (
    <section id="formacionYMediacion" className={styles.formacionYMediacionSection}>
      <h1 className={styles.sectionTitle}>Formación y Mediación</h1>
      <div className={styles.mainContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.cardAnimationLayer}>
            <article className={styles.card}>
              <img src="/explosion.svg" alt="Explosión" height="100" width="100" />
              <p>{card.title}</p>
              <a href={card.link}>Más información</a>
            </article>
          </div>
        ))}
      </div>
      <button className={styles.showAllButton}>Mostrar todo</button>
    </section>
  );
};
