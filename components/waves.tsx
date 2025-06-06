import React from "react";
import styles from "./waves.module.css";

const Waves = ({ color }: { color: string }) => {
  return (
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
        <use xlinkHref="#gentle-wave" x="48" y="0" fill={`${color}80`} />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill={`${color}4d`} />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill={`${color}1a`} />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill={color} />
      </g>
    </svg>
  );
};

export default Waves;
