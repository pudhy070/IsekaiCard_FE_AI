import React from 'react';
import Card from './Card';

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    차원을 넘어
                    <br />
                    <span className="shiny-gradient-text">전설이 될 카드</span>
                </h1>
                <p className="hero-subtitle">
                    지금까지 없었던 힘을 당신의 손안에.
                </p>
            </div>
            <div className="hero-card-container">
                <Card
                    name="Check Card"
                    grade="Basic"
                    imageUrl="/images/card11.jpg"
                    isLarge={true}
                />
            </div>
        </section>
    );
}

export default HeroSection;