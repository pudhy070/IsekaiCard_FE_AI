import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import HeaderModal from './HeaderModal';

function Header() {
    const [activeModal, setActiveModal] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveModal(menu);
    };

    const handleMouseLeave = () => {
        setActiveModal(null);
    };

    return (
        <header className="header" onMouseLeave={handleMouseLeave}>
            <div className="container header-container">
                <Link to="/">
                    <img src="/images/logo.png" alt="Logo" className="header-logo" />
                </Link>

                <nav className={styles.nav}>
                    <div onMouseEnter={() => handleMouseEnter('cards')}>
                        <span className={styles.navLink} style={{ cursor: 'pointer' }}>카드</span>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('benefits')}>
                        <span className={styles.navLink} style={{ cursor: 'pointer' }}>혜택</span>
                    </div>
                    <Link to="/events" className={styles.navLink}>이벤트</Link>
                </nav>

                <Link to="/apply" className="header-button">
                    카드 신청하기
                </Link>

            </div>

            <HeaderModal activeModal={activeModal} />
        </header>
    );
}

export default Header;

