import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EventWritePage.module.css';

function EventEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/events/${id}`);
                if (!response.ok) {
                    throw new Error('게시글 정보를 불러오지 못했습니다.');
                }
                const data = await response.json();
                setTitle(data.title);
                setContent(data.content);
            } catch (error) {
                console.error('Fetch error:', error);
                alert(error.message);
                navigate('/events');
            }
        };
        fetchEvent();
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
        }

        const eventData = { title, content };

        try {
            const response = await fetch(`http://localhost:8080/api/events/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            });

            if (!response.ok) {
                throw new Error('이벤트 수정에 실패했습니다.');
            }
            alert('이벤트가 성공적으로 수정되었습니다.');
            navigate(`/events/${id}`);
        } catch (error) {
            console.error('Error updating event:', error);
            alert(error.message);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <h1 className={styles.title}>이벤트 수정</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">제목</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목을 입력하세요"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="content">내용</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="내용을 입력하세요"
                            rows="15"
                            required
                        ></textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="button" onClick={() => navigate(`/events/${id}`)} className={`${styles.submitButton} ${styles.cancelButton}`}>취소</button>
                        <button type="submit" className={styles.submitButton}>수정하기</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default EventEditPage;
