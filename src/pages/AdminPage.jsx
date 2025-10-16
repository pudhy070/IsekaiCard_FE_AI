import React, { useState, useEffect } from 'react';

function AdminPage() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/applications');
                if (!response.ok) {
                    throw new Error('데이터를 불러오는 데 실패했습니다.');
                }
                const data = await response.json();
                setApplications(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`ID ${id}번 신청 내역을 정말로 삭제하시겠습니까?`)) {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/applications/${id}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('삭제에 실패했습니다.');
                }
                
                setApplications(applications.filter(app => app.id !== id));
                alert('성공적으로 삭제되었습니다.');

            } catch (err) {
                console.error('Error deleting application:', err);
                alert(err.message);
            }
        }
    };

    if (loading) {
        return <div className="container" style={{ textAlign: 'center', padding: '3rem' }}>로딩 중...</div>;
    }

    if (error) {
        return <div className="container" style={{ textAlign: 'center', padding: '3rem', color: 'red' }}>오류: {error}</div>;
    }

    return (
        <div className="admin-page-container">
            <h1 className="section-title">카드 신청 관리</h1>
            {applications.length === 0 ? (
                <p style={{ textAlign: 'center', padding: '3rem' }}>아직 접수된 카드 신청이 없습니다.</p>
            ) : (
                <div className="admin-table-container">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>카드 종류</th>
                                <th>신청자명</th>
                                <th>이메일</th>
                                <th>연락처</th>
                                <th>주소</th>
                                <th>상태</th>
                                <th>신청일</th>
                                <th>관리</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map(app => (
                                <tr key={app.id}>
                                    <td>{app.id}</td>
                                    <td>{app.card_type}</td>
                                    <td>{app.name}</td>
                                    <td>{app.email}</td>
                                    <td>{app.phone}</td>
                                    <td>{app.address}</td>
                                    <td>{app.status}</td>
                                    <td>{new Date(app.application_date).toLocaleString()}</td>
                                    {/* 각 행에 삭제 버튼 추가 */}
                                    <td>
                                        <button 
                                            onClick={() => handleDelete(app.id)} 
                                            className="delete-button"
                                        >
                                            삭제
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default AdminPage;