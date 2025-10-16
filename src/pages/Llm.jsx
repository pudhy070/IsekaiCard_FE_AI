import React, { useState, useEffect, useRef } from 'react';
import './Llm.css'; // 스타일을 위한 CSS 파일

const ArrowUpIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Llm = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
    const chatEndRef = useRef(null);

    useEffect(() => {
        setMessages([
            {
                id: 1,
                text: '안녕하세요! 카드 추천 AI 챗봇입니다. 어떤 카드를 찾으시나요?',
                sender: 'ai',
            },
        ]);
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            // 1. Spring Boot 서버에 API 요청 보내기
            const response = await fetch('http://localhost:8080/api/llm/recommend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: currentInput }),
            });

            if (!response.ok) {
                throw new Error('AI 서버로부터 응답을 받는 데 실패했습니다.');
            }

            const data = await response.json();
            const aiResponse = {
                id: Date.now() + 1,
                text: data.recommendation,
                sender: 'ai',
            };

            setMessages(prev => [...prev, aiResponse]);

        } catch (error) {
            console.error("AI 추천 기능 호출 중 오류 발생:", error);
            const errorMessage = {
                id: Date.now() + 1,
                text: '죄송합니다, 답변을 생성하는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
                sender: 'ai',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="llm-container">
            <header className="llm-header">
                <h1 className="llm-title">AI 챗봇</h1>
                <p className="llm-subtitle">나에게 맞는 카드 찾기</p>
            </header>

            <main className="llm-chat-area">
                {messages.map((msg) => (
                    <div key={msg.id} className={`chat-bubble-wrapper ${msg.sender}`}>
                        <div className="chat-bubble">{msg.text}</div>
                    </div>
                ))}
                {isLoading && (
                    <div className="chat-bubble-wrapper ai">
                        <div className="chat-bubble typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </main>

            <footer className="llm-input-form-wrapper">
                <form className="llm-input-form" onSubmit={handleSendMessage}>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="llm-input"
                        placeholder="메시지를 입력하세요..."
                        rows="1"
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = `${e.target.scrollHeight}px`;
                        }}
                    />
                    <button type="submit" className="llm-send-button" disabled={!input.trim() || isLoading}>
                        <ArrowUpIcon />
                    </button>
                </form>
            </footer>
        </div>
    );
};

export default Llm;