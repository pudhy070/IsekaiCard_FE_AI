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
                        <a href="#" className={styles.navLink}>카드</a>
                    </div>
                    <div onMouseEnter={() => handleMouseEnter('benefits')}>
                        <a href="#" className={styles.navLink}>혜택</a>
                    </div>
                    <a href="#" className={styles.navLink}>이벤트</a>
                </nav>

                <button className="header-button">
                    카드 신청하기
                </button>
            </div>

            <HeaderModal activeModal={activeModal} />
        </header>
    );
}

export default Header;
