import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cardDetailsData } from '../data/cardDetailsData';
import BenefitDetails from '../components/Toss/BenefitDetails';
import EventList from '../components/Toss/EventList';
import styles from './CardPage.module.css';

function WeekendCardPage() {
    const [activeTab, setActiveTab] = useState('benefits');
    const style = {};

    const card = cardDetailsData.weekend;

    if (!card) return <div>카드 정보를 찾을 수 없습니다.</div>;

    return (
        <div className={styles.pageContainer}>
            <section className={styles.cardSection}>
                <div className={styles.cardImageWrapper}>
                    <img src={card.imageUrl} alt={`${card.name} 카드`} className={styles.cardImage} />
                </div>
                <div className={styles.cardInfo}>
                    <h1 className={styles.cardTitle} style={{ color: card.theme.primary }}>
                        {card.name}
                    </h1>
                    <p className={styles.cardDesc}>{card.description}</p>

                    <Link
                        to="/apply"
                        className={styles.applyButton}
                        style={{ backgroundColor: card.theme.primary }}
                    >
                        지금 바로 신청하기
                    </Link>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.tabContainer}>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'benefits' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('benefits')}
                        style={{ borderColor: activeTab === 'benefits' ? card.theme.primary : 'transparent' }}
                    >
                        혜택
                    </button>
                    <button
                        className={`${styles.tabButton} ${activeTab === 'events' ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab('events')}
                        style={{ borderColor: activeTab === 'events' ? card.theme.primary : 'transparent' }}
                    >
                        이벤트
                    </button>
                </div>

                <div className={styles.tabContent}>
                    {activeTab === 'benefits' && (
                        <BenefitDetails benefits={card.benefits} theme={card.theme} />
                    )}
                    {activeTab === 'events' && <EventList events={card.events} />}
                </div>
            </section>
        </div>
    );
}

export default WeekendCardPage;
