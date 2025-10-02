import React from 'react';

function EventList({ events }) {
    if (!events) return null;

    return (
        <div style={styles.container}>
            <h3 style={styles.sectionTitle}>진행중인 이벤트</h3>
            <div style={styles.eventList}>
                {events.map(event => (
                    <div key={event.id} style={styles.eventItem}>
                        <div style={styles.eventHeader}>
                            <h4 style={styles.eventTitle}>{event.title}</h4>
                            <span style={styles.eventDate}>{event.date}</span>
                        </div>
                        <p style={styles.eventContent}>{event.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default EventList;
