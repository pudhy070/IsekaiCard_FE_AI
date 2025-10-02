import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './EventDetailPage.module.css';

function EventDetailPage() {
    const [event, setEvent] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/events/${id}`);
                if (!response.ok) {
                    throw new Error('게시글을 불러오는 데 실패했습니다.');
                }
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.error('Error fetching event:', error);
                alert(error.message);
                navigate('/events');
            }
        };
        fetchEvent();
    }, [id, navigate]);

    const handleDelete = async () => {
        if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
            try {
                const response = await fetch(`http://localhost:8080/api/events/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('삭제에 실패했습니다.');
                }
                alert('게시글이 삭제되었습니다.');
                navigate('/events');
            } catch (error) {
                console.error('Error deleting event:', error);
                alert(error.message);
            }
        }
    };

    if (!event) {
        return <div className={styles.loading}>로딩 중...</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <div className={styles.postHeader}>
                    <h1 className={styles.postTitle}>{event.title}</h1>
                    <div className={styles.postMeta}>
                        <span>작성자: {event.author}</span>
                        <span>작성일: {new Date(event.createdAt).toLocaleString()}</span>
                    </div>
                </div>
                <div className={styles.postContent}>
                    <p>{event.content}</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Link to="/events" className={styles.listButton}>목록</Link>
                    <div>
                        <Link to={`/events/edit/${id}`} className={styles.editButton}>수정</Link>
                        <button onClick={handleDelete} className={styles.deleteButton}>삭제</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default EventDetailPage;