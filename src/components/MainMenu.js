import React from 'react';
import { Link } from 'react-router-dom'

const MainMenu = () => (
    <nav role='navigation' className="main-nav" id="main-nav">
        <ul id="main-nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/my-approach">My Approach</Link></li>
            <li><Link to="/therapy-for-adolescents"><div>Therapy for Adolescents</div></Link></li>
            <li><Link to="/faqs"><div>FAQs</div></Link></li>
        </ul>
    </nav>
)

export default MainMenu;