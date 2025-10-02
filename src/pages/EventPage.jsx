import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './EventPage.module.css';

const dummyEvents = [
    { id: 'dummy-1', title: '이세계 카드 출시 기념 이벤트!', author: '운영자', createdAt: '2025-10-01' },
    { id: 'dummy-2', title: '친구 초대하고 프리미엄 혜택 받자', author: '운영자', createdAt: '2025-09-28' },
    { id: 'dummy-3', title: '주말엔 위켄드 카드로 5% 추가 할인', author: '운영자', createdAt: '2025-09-25' },
];

function EventPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/events');
                if (!response.ok) {
                    throw new Error('이벤트 목록을 불러오는 데 실패했습니다.');
                }
                const data = await response.json();

                if (data && data.length > 0) {
                    const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    setEvents(sortedData);
                } else {
                    setEvents(dummyEvents);
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                setEvents(dummyEvents);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <h1 className={styles.title}>이벤트</h1>
                    <Link to="/events/write" className={styles.writeButton}>
                        글쓰기
                    </Link>
                </div>
                <ul className={styles.postList}>
                    {events.length > 0 ? (
                        events.map(event => (
                            <li key={event.id} className={styles.postItem}>
                                <Link to={`/events/${event.id}`} className={styles.postLink}>
                                    <h2 className={styles.postTitle}>{event.title}</h2>
                                    <div className={styles.postMeta}>
                                        <span>작성자: {event.author}</span>
                                        <span>등록일: {new Date(event.createdAt).toLocaleDateString()}</span>
                                    </div>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p className={styles.noPosts}>등록된 이벤트가 없습니다.</p>
                    )}
                </ul>
            </main>
        </div>
    );
}

export default EventPage;