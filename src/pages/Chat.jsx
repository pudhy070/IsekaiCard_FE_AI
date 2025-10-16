import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Chat() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // card_type: 'daily',
        name: '',
        email: '',
        phone: '',
        address: '',
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
            const response = await fetch('http://localhost:8080/api/apply', {
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
                <h1 className="section-title">온라인 상담</h1>
                <p className="section-subtitle">페이지 준비중 입니다.</p>
                <form onSubmit={handleSubmit} className="application-form">
                    {/*<div className="form-group">*/}
                    {/*    <label htmlFor="card_type">카드 종류</label>*/}
                    {/*    <select id="card_type" name="card_type" value={formData.card_type} onChange={handleChange}>*/}
                    {/*        <option value="daily">데일리 카드</option>*/}
                    {/*        <option value="weekend">위켄드 카드</option>*/}
                    {/*        <option value="platinum">플래티넘 카드</option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <label htmlFor="name">이름</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="홍길동" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">이메일</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">연락처</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="010-1234-5678" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">주소</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="카드를 수령할 주소를 입력하세요" required />
                    </div>

                    <div className="form-button-group">
                        <button type="submit" className="header-button" disabled>페이지 준비중 입니다.</button>
                        {/*<button type="button" onClick={() => navigate('/status')} className="secondary-button">*/}
                        {/*    신청 현황 조회*/}
                        {/*</button>*/}
                        {/*<button type="button" onClick={() => navigate('/admin')} className="admin-button">*/}
                        {/*    관리자 모드*/}
                        {/*</button>*/}
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Chat;

