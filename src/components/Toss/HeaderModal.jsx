import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderModal.module.css';

function HeaderModal({ activeModal }) {
    if (!activeModal) return null;

    const modalContent = {
        cards: [
            { title: '데일리 카드', desc: '쇼핑과 일상에 강력한 혜택', link: '/daily' },
            { title: '위켄드 카드', desc: '여행과 주말을 위한 선택', link: '/weekend' },
            { title: '플래티넘 카드', desc: '프리미엄 혜택의 모든 것', link: '/platinum' },
        ],
        benefits: [
            { title: '캐시백', desc: '쓸 때마다 돌려받는 즐거움' },
            { title: '할인', desc: '생활 전반에 폭넓은 할인' },
            { title: '포인트', desc: '차곡차곡 쌓이는 포인트 혜택' },
        ],
        events: [
            { title: '진행중인 이벤트', desc: '참여하고 특별한 혜택을 받으세요', link: '/events' },
            { title: '지난 이벤트', desc: '아쉽게 놓친 이벤트들을 확인해보세요', link: '/events' },
            { title: '당첨자 발표', desc: '행운의 주인공을 확인하세요', link: '/events' },
        ],
    };

    const handleBenefitClick = () => {
        alert('페이지 준비중입니다.');
    };

    const itemsToRender = modalContent[activeModal] || [];

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {itemsToRender.map((item, index) => {
                    if (activeModal === 'cards' || activeModal === 'events') {
                        return (
                            <Link to={item.link} key={index} className={styles.menuItem}>
                                <div className={styles.menuTitle}>{item.title}</div>
                                <div className={styles.menuDesc}>{item.desc}</div>
                            </Link>
                        );
                    }

                    if (activeModal === 'benefits') {
                        return (
                            <div
                                key={index}
                                className={styles.menuItem}
                                onClick={handleBenefitClick}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className={styles.menuTitle}>{item.title}</div>
                                <div className={styles.menuDesc}>{item.desc}</div>
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </div>
    );
}

export default HeaderModal;

