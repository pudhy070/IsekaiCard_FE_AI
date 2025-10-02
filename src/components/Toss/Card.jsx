import React from 'react';
import styles from './Card.module.css';

const gradeStyles = {
    'PREMIUM': styles.gradientPremium,
    'TRAVEL': styles.gradientTravel,
    'SHOPPING': styles.gradientShopping,
    'BASIC': styles.gradientBasic,
};

function Card({ name, grade, imageUrl, isLarge = false }) {
    const gradientClass = gradeStyles[grade] || gradeStyles['BASIC'];

    const sizeClass = isLarge ? styles.large : styles.small;

    return (
        <div className={`${styles.cardWrapper} ${sizeClass}`}>
            <div className={`${styles.gradientBg} ${gradientClass}`}></div>

            <img
                src={imageUrl}
                alt={name}
                className={styles.cardImage}
            />

            {/* 카드 이름과 등급 정보 */}
            <div className={styles.cardText}>
                <p className={styles.cardTitle}>{name}</p>
                <span className={styles.cardGrade}>{grade}</span>
            </div>

            <img
                src="/images/logo-symbol.png"
                alt="Symbol"
                className={styles.logoSymbol}
            />
        </div>
    );
}

export default Card;

