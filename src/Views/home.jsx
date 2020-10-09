import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../home.css';
import { UserNavbar } from '../Components/navbar';
import { WelcomeSection } from '../Components/welcomeSection';

export function Home() {
    return (
        <div className="container-fluid">
            <div className="foreground">
                <UserNavbar />
                <WelcomeSection />
            </div>
        </div>
    );
}