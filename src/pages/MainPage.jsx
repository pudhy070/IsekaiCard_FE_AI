import React from 'react';
import HeroSection from '../components/Toss/HeroSection';
import CardLineup from '../components/Toss/CardLineup';
import BenefitsSection from '../components/Toss/BenefitsSection';

function MainPage() {
    return (
        <main>
            <HeroSection />
            <CardLineup />
            <BenefitsSection />
        </main>
    );
}

export default MainPage;