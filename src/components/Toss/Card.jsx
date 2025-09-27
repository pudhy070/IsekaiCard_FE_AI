import React from 'react';

const gradeStyles = {
    'UR': 'from-purple-500 to-indigo-600',
    'SSR': 'from-yellow-400 to-orange-500',
    'SR': 'from-red-500 to-rose-600',
};

function Card({ name, grade, imageUrl, isLarge = false }) {
    const gradient = gradeStyles[grade] || 'from-gray-500 to-gray-700';
    const sizeClass = isLarge ? 'w-80 h-[480px]' : 'w-60 h-96';

    return (
        <div className={`${sizeClass} relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}></div>

            <img
                src={imageUrl}
                alt={name}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-auto object-contain"
            />

            <div className="absolute top-6 left-6">
                <p className="font-bold text-white text-lg">{name}</p>
                <span className="text-white/70 text-sm">{grade}</span>
            </div>

            <img
                src="/images/logo-symbol.png"
                alt="Symbol"
                className="absolute bottom-5 right-5 w-10 h-10 opacity-70"
            />
        </div>
    );
}

export default Card;