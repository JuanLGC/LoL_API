import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../welcomeSection.css';
import rito from '../img/rito.png';


export function WelcomeSection() {
    return (
        <>
            <div className="welcome-section">
                
                <h1 className="title-welcome-section">WELCOME</h1>
                <p className="welcome-text"> In here you will be able to find the info about your favorite champions, get to know 
                the different game modes available, your stats as a summoner. </p>
                <p className="welcome-text"> Come into the depths of Runeterra and begin your adventure through the frozen Freljord, face the thoughest sailors in Bilgewaters, stand up to your own demons in the Shadow Isles and more. </p>     
                <div className="welcome-section-footer">
                    <a href="https://euw.leagueoflegends.com/es-es/" className="join-us"><button className="button-footer">Join us</button></a>
                    <img src={rito} className="rito"/>   
                </div>       
            </div>
        </>
    )
}