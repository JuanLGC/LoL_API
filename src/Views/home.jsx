import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../home.css';
import awaken from '../video/awaken.mp4'
import { FirstSection } from '../Components/sectionOne';

export function Home() {
    return (
        <>
        <div className="container-fluid">
            <video className="h-video" src={awaken} autoPlay loop muted></video>
            <div className="h-content">
                <h1 className="h-content-title">Welcome to <br/> <b>League of Legends</b></h1>
                <p className="h-content-text">Come to Runeterra and become a summoner. You will fight in the frozen lands of freljord,
                    stand up to the toughest pirates in bilgewaters, fight for justice in the war between Demacia and Noxus, face your biggest
                    fears and risk to lose your soul in the shadow isles. 
                </p>
                <p className="h-content-text">What are you waiting for?</p>
                <div className="h-content-btn-container">
                    <button className="h-content-btn"><a className="h-content-btn-link" href="https://na.leagueoflegends.com/en-us/">Join us</a></button>
                </div>
            </div>    
        </div>
        <FirstSection />
        </>
    );
}