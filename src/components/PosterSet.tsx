import React from 'react';
import { Poster } from '../components/Poster';
import styles from '../styles/Poster.module.css';

export const PosterSet = () => {
  return (
    <div className={styles.posterset}>
      <h2>박스오피스 순위</h2>
      <ul>
        <li>
          <Poster />
        </li>
        <li>
          <Poster />
        </li>
        <li>
          <Poster />
        </li>
        <li>
          <Poster />
        </li>
        <li>
          <Poster />
        </li>
      </ul>
    </div>
  );
};
