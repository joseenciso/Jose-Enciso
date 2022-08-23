import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { MdOutlineBuild } from 'react-icons/md';
import { RiMailSendLine } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';

const Nav = ( ) => {
    const [ activeNav, setActiveNav ] = useState('#home');

    return (
        <nav>
            <a href="#home" 
                onClick={ ( )=> setActiveNav( '#home' ) }
                className={ activeNav === '#home' ? 'active' : '' }
            >
                <AiOutlineHome />
            </a>
            <a href="#about" 
                onClick={ ( )=> setActiveNav( '#about' ) }
                className= { activeNav === '#about' ? 'active' : '' }
            >
                <AiOutlineUser />
            </a>
            <a href="#experience" 
                onClick={ ( )=> setActiveNav( '#experience' ) }
                className= { activeNav === '#experience' ? 'active' : '' }
            >
                <BsGraphUp />
            </a>
            {/*<a href="#services" 
                onClick={ ( )=> setActiveNav( '#services' ) }
                className= { activeNav === '#services' ? 'active' : '' }
            >
                <MdOutlineBuild />
    </a>*/}
            <a href="#projects" 
                onClick={ ( )=> setActiveNav( '#portfolio' ) }
                className= { activeNav === '#portfolio' ? 'active' : '' }
            >
                <VscLibrary />
            </a>
            <a href="#contact" 
                onClick={ ( )=> setActiveNav( '#contact' ) }
                className= { activeNav === '#contact' ? 'active' : '' }
            >
                <RiMailSendLine />
            </a>
        </nav>
    )
}

export default Nav;