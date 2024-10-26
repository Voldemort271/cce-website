import React from "react";
import styles from "./waves.module.css";

const Waves = () => {
  return (
    <div className="absolute bottom-0 left-0 w-screen h-fit">
      <svg
        className={`${styles.waves} ${styles.headerWaves}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={styles.parallax}>
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#f1f5f980" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="#f1f5f94d" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#f1f5f91a" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#F1F5F9" />
        </g>
      </svg>
    </div>
  );
};

export default Waves;
