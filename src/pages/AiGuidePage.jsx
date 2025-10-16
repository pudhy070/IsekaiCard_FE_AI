import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cardDetailsData } from '../data/cardDetailsData';
import styles from './CardPage.module.css';

const GuideContent = () => (
    <div className={styles.guideContent}>
        <h2>AI 챗봇 사용 방법 🤖</h2>
        <ol>
            <li>아래 '지금 바로 찾아보기' 버튼을 눌러 챗봇 페이지로 이동하세요.</li>
            <li>채팅창에 평소 소비 습관, 원하는 혜택, 직업 등을 자유롭게 입력해보세요.</li>
            <li>AI가 여러분의 라이프스타일에 꼭 맞는 최적의 카드를 추천해 드릴 거예요!</li>
        </ol>
        <h2 style={{ marginTop: '2rem' }}>이렇게 질문해보세요! ✨</h2>
        <ul>
            <li>"주말에 쇼핑이랑 영화보는 걸 좋아하는데 어떤 카드가 좋아요?"</li>
            <li>"해외 여행 자주 다니는데 항공 마일리지 쌓기 좋은 카드 추천해줘."</li>
            <li>"전월 실적 없이 그냥 혜택 많이 주는 카드 없어?"</li>
        </ul>
    </div>
);

function AiGuidePage() {
    const card = cardDetailsData.aiGuide;

    if (!card) return <div>페이지 정보를 불러올 수 없습니다.</div>;

    return (
        <div className={styles.pageContainer}>
            <section className={styles.cardSection}>
                <div className={styles.cardImageWrapper}>
                    <img src={card.imageUrl} alt={`${card.name} 안내`} className={styles.cardImage} />
                </div>
                <div className={styles.cardInfo}>
                    <h1 className={styles.cardTitle} style={{ color: card.theme.primary }}>
                        {card.name}
                    </h1>
                    <p className={styles.cardDesc}>{card.description}</p>
                    <Link
                        to="/ai"
                        className={styles.applyButton}
                        style={{ backgroundColor: card.theme.primary }}
                    >
                        지금 바로 찾아보기
                    </Link>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.tabContent}>
                    <GuideContent />
                </div>
            </section>
        </div>
    );
}

export default AiGuidePage;