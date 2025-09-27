import React from 'react';
import Card from './Card';

const cardData = [
    { id: 1, name: '데일리 카드', grade: 'SHOPPING', imageUrl: '/images/cards/card-shopping.png' },
    { id: 2, name: '위켄드 카드', grade: 'TRAVEL', imageUrl: '/images/cards/card-travel.png' },
    { id: 3, name: '마일리지 카드', grade: 'AIRLINE', imageUrl: '/images/cards/card-airline.png' },
    { id: 4, name: '비즈니스 카드', grade: 'BUSINESS', imageUrl: '/images/cards/card-business.png' },
];

function CardLineup() {
    return (
        <section className="card-lineup">
            <div className="container">
                <h2 className="section-title">
                    당신을 위한 카드 라인업
                </h2>
                <div className="card-lineup-scroll-container">
                    {cardData.map(card => (
                        <div key={card.id} className="card-lineup-item">
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CardLineup;