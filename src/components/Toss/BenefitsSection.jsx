import React from 'react';
import { FaCoffee, FaShoppingCart, FaPlaneDeparture } from 'react-icons/fa';

const benefits = [
    { icon: <FaCoffee size={32} />, title: "자주 가는 카페 50% 할인", description: "매일 마시는 커피, 이제 부담 없이 즐기세요. 전국 주요 프랜차이즈 카페에서 할인 혜택을 드립니다." },
    { icon: <FaShoppingCart size={32} />, title: "온라인 쇼핑 10% 적립", description: "주요 쇼핑몰에서 결제 시, 결제 금액의 10%를 포인트로 적립해 드립니다." },
    { icon: <FaPlaneDeparture size={32} />, title: "전 세계 공항 라운지 이용", description: "여행의 시작을 더 편안하게. 전 세계 제휴 공항 라운지를 무료로 이용할 수 있는 혜택을 누려보세요." }
];

function BenefitsSection() {
    return (
        <section className="benefits-section">
            <div className="container">
                <div className="benefits-container">
                    <h2 className="section-title">
                        일상의 모든 순간,
                        <br/>
                        특별한 혜택을 담다
                    </h2>
                    {benefits.map((item, index) => (
                        <div key={index} className="benefits-item">
                            <div className="benefits-icon">{item.icon}</div>
                            <div>
                                <h3 className="benefits-title">{item.title}</h3>
                                <p className="benefits-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BenefitsSection;