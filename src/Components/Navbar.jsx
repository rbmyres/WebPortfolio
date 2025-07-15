import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleSidebar = () => setSidebarOpen(prevState => !prevState);
    const closeSidebar = () => setSidebarOpen(false);
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeSidebar();
    };
    
    return (
        <>
            {sidebarOpen && (<div className="overlay" onClick={closeSidebar}></div>)}

            <nav>
                <ul className={`sidebar ${sidebarOpen ? "open" : ""}`}>
                    <li className='closeSidebar' onClick={closeSidebar}><FaX /></li>
                    <li className='sideText' onClick={() => scrollToSection('about')}>About</li>
                    <li className='sideText' onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className='sideText' onClick={() => scrollToSection('projects')}>Projects</li>
                </ul>

                <ul className='navbar'>
                    <li className='navText' onClick={() => scrollToSection('about')}>About</li>
                    <li className='navText' onClick={() => scrollToSection('skills')}>Skills</li>
                    <li className='navText' onClick={() => scrollToSection('projects')}>Projects</li>

                    <li className='openSidebar' onClick={handleSidebar}><FaBars /></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar