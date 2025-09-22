import React from "react";

const Explosion: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* Carga el svg desde /public */}
      <img src="/explosion.svg" alt="Explosion" className={styles.explosion} />
    </div>
  );
};

export default Explosion;
