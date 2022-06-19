import React from 'react';
import { Poster } from '../components/Poster';
import styles from '../styles/Poster.module.css';

export const PosterSet = () => {
    return (
        <div className={styles.posterset}>
            <ul>
                <li><Poster /></li>
                <li><Poster /></li>
                <li><Poster /></li>
                <li><Poster /></li>
                <li><Poster /></li>
            </ul>
        </div>
    )
    
}