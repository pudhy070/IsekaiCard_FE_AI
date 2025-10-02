import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EventWritePage.module.css';

function EventWritePage() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEvent = {
            title,
            content,
            author,
        };

        try {
            const response = await fetch('http://localhost:8080/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent),
            });

            if (!response.ok) {
                throw new Error('서버에 이벤트를 등록하는 데 실패했습니다.');
            }

            alert('이벤트가 성공적으로 등록되었습니다.');
            navigate('/events');

        } catch (error) {
            console.error('Error creating event:', error);
            alert(error.message);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <main className={styles.mainContent}>
                <h1 className={styles.title}>이벤트 글쓰기</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">제목</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="author">작성자</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="content">내용</label>
                        <textarea
                            id="content"
                            rows="10"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="button" onClick={() => navigate('/events')} className={styles.cancelButton}>
                            취소
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            등록
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default EventWritePage;
