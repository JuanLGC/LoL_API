import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../firstSection.css';

export function FirstSection() {
    return (
        <div className="first-section">
            <div className="cards-frame">
                <div className="first-section-card champions-card">
                    <div className="card-overlay">
                        <h2>Champions</h2>
                    </div>
                </div>
                <div className="first-section-card modes-card">
                    <div className="card-overlay">
                        <h2>Game Modes</h2>
                    </div>
                </div>
                <div className="first-section-card stats-card">
                    <div className="card-overlay">
                        <h2>Stats</h2>
                    </div>
                </div>
                <div className="first-section-card esports-card">
                    <div className="card-overlay">
                        <h2>Esports</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}