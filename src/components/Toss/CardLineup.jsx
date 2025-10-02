import React from 'react';
import Card from './Card';
import styles from './CardLineup.module.css'; 

const cardData = [
    { id: 1, name: '데일리 카드', grade: 'SHOPPING', imageUrl: '/images/card2.jpg' },
    { id: 2, name: '위켄드 카드', grade: 'TRAVEL', imageUrl: '/images/card3.jpg' },
    { id: 3, name: '플래티넘 카드', grade: 'PREMIUM', imageUrl: '/images/card22.jpg' },
];

function CardLineup() {
    return (
        <section className={styles.cardLineupSection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    당신을 위한 카드 라인업
                </h2>
                <div className={styles.scrollContainer}>
                    {cardData.map(card => (
                        <div key={card.id} className={styles.cardItem}>
                            <Card {...card} isLarge={false} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CardLineup;
