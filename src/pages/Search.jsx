import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // card_type: 'daily',
        name: '',
        age: '',
        email: '',
        text: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const key in formData) {
            if (!formData[key].trim()) {
                alert('모든 항목을 입력해주세요.');
                return;
            }
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/api/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || '신청 중 오류가 발생했습니다.');
            }

            alert(result.message);
            navigate('/');

        } catch (error) {
            console.error('Error submitting application:', error);
            alert(error.message);
        }
    };

    return (
        <div className="application-page-container">
            <main className="application-form-container">
                <h1 className="section-title">나에게 맞는 카드 찾기</h1>
                <p className="section-subtitle">카드 찾기 정보를 정확하게 입력해주세요.</p>
                <form onSubmit={handleSubmit} className="application-form">
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="홍길동" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">나이</label>
                        <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} placeholder="ex) 20" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="money">자신의 소비 습관을 알려주세요!</label>
                        <input type="text" id="text" name="text" value={formData.text} onChange={handleChange} placeholder="ex) 저번달 청구서가 200만원 나왔어요!" required />
                    </div>

                    <div className="form-button-group">
                        <Link to="/llm">
                            <button type="button" className="header-button">
                            찾아보기
                            </button>
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Search;

