import React, { useState } from 'react';
import styles from './ApplicationStatusPage.module.css';

function ApplicationStatusPage() {
    const [email, setEmail] = useState('');
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            alert('이메일을 입력해주세요.');
            return;
        }
        setIsLoading(true);
        setError('');
        setSearched(true);
        setApplications([]);

        try {
            const response = await fetch(`http://127.0.0.1:5000/api/applications/status?email=${encodeURIComponent(email)}`);
            if (!response.ok) {
                throw new Error('신청 현황 조회에 실패했습니다.');
            }
            const data = await response.json();
            setApplications(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <h1 className={styles.title}>신청 현황 조회</h1>
                <p className={styles.subtitle}>카드 신청 시 입력한 이메일 주소로 신청 내역을 조회할 수 있습니다.</p>
                <form onSubmit={handleSearch} className={styles.searchForm}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일 주소를 입력하세요"
                        required
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton} disabled={isLoading}>
                        {isLoading ? '조회 중...' : '조회하기'}
                    </button>
                </form>

                <div className={styles.resultsContainer}>
                    {isLoading && <p>데이터를 불러오는 중입니다...</p>}
                    {error && <p className={styles.errorMessage}>오류: {error}</p>}
                    {searched && !isLoading && !error && (
                        applications.length > 0 ? (
                            <div>
                                <h2 className={styles.resultsTitle}>'{email}' 님의 신청 내역</h2>
                                <ul className={styles.applicationList}>
                                    {applications.map(app => (
                                        <li key={app.id} className={styles.applicationItem}>
                                            <div className={styles.itemHeader}>
                                                <span className={styles.cardType}>{app.card_type.toUpperCase()} 카드</span>
                                                <span className={`${styles.status} ${styles[app.status.toLowerCase()]}`}>{app.status}</span>
                                            </div>
                                            <div className={styles.itemBody}>
                                                <p><strong>신청일:</strong> {new Date(app.application_date).toLocaleString()}</p>
                                                <p><strong>신청자명:</strong> {app.name}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>해당 이메일으로 접수된 신청 내역이 없습니다.</p>
                        )
                    )}
                </div>
            </main>
        </div>
    );
}

export default ApplicationStatusPage;
