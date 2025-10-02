import React from 'react';

function BenefitDetails({ benefits }) {
    
    const styles = {};

    if (!benefits) return null;

    return (
        <div style={styles.container}>
            <h3 style={styles.sectionTitle}>캐쉬백 혜택</h3>
            <ul style={styles.list}>
                {benefits.cashback.map((item, index) => (
                    <li key={`cashback-${index}`} style={styles.listItem}>
                        <strong>{item.title}</strong>
                        <p style={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>

            <h3 style={styles.sectionTitle}>할인 혜택</h3>
            <ul style={styles.list}>
                {benefits.discount.map((item, index) => (
                    <li key={`discount-${index}`} style={styles.listItem}>
                        <strong>{item.title}</strong>
                        <p style={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>

            <h3 style={styles.sectionTitle}>포인트 혜택</h3>
            <ul style={styles.list}>
                {benefits.points.map((item, index) => (
                    <li key={`points-${index}`} style={styles.listItem}>
                        <strong>{item.title}</strong>
                        <p style={styles.description}>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BenefitDetails;
