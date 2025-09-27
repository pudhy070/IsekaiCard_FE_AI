import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.linkColumns}>
                        <div className={styles.column}>
                            <h4>상품</h4>
                            <a href="#">카드</a>
                            <a href="#">적금</a>
                            <a href="#">대출</a>
                        </div>
                        <div className={styles.column}>
                            <h4>회사</h4>
                            <a href="#">회사 소개</a>
                            <a href="#">채용</a>
                            <a href="#">공지사항</a>
                        </div>
                        <div className={styles.column}>
                            <h4>지원</h4>
                            <a href="#">고객센터</a>
                            <a href="#">FAQ</a>
                            <a href="#">약관 및 정책</a>
                        </div>
                    </div>
                    <div className={styles.socialContainer}>
                        <h4>Follow Us</h4>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Youtube"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>(주)이세계 아카이브 | 대표이사: Sia | 사업자번호: 123-45-67890</p>
                    <p>&copy; {new Date().getFullYear()} Isekai Archive. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;