import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderModal.module.css';

function HeaderModal({ activeModal }) {
    if (!activeModal) return null;

    const modalContent = {
        cards: [
            { title: '데일리 카드', desc: '쇼핑과 일상에 강력한 혜택', link: '/details' },
            { title: '위켄드 카드', desc: '여행과 주말을 위한 선택', link: '/details' },
            { title: '플래티넘 카드', desc: '프리미엄 혜택의 모든 것', link: '/details' },
        ],
        benefits: [
            { title: '캐시백', desc: '쓸 때마다 돌려받는 즐거움', link: '/details' },
            { title: '할인', desc: '생활 전반에 폭넓은 할인', link: '/details' },
            { title: '포인트', desc: '차곡차곡 쌓이는 포인트 혜택', link: '/details' },
        ],
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {modalContent[activeModal]?.map((item, index) => (
                    <Link to={item.link} key={index} className={styles.menuItem}>
                        <div className={styles.menuTitle}>{item.title}</div>
                        <div className={styles.menuDesc}>{item.desc}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HeaderModal;