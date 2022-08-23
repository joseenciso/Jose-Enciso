import './Header.css';
import CTA from './CTA/CTA.js';
import JOSEIMG from '../../images/jose-enciso.jpg';
import HeaderSocials from './CTA/HeaderSocials.js';
import { BsArrowRight } from 'react-icons/bs';


const Header = ( ) => {
    return ( 
        <header id="home">
            <div className="header__container">
                <div className="header__container-content">
                    <h5>Hello I'm</h5>
                    <div className="jose-enciso">
                        <img src={ JOSEIMG } alt="Jose Enciso - Full Stack Developer" />
                    </div>
                    <h1>José Enciso</h1>
                    <h5 className="text-light">Full Stack Developer</h5>
                </div>
                <HeaderSocials />
                <CTA />
                
                <a href="#contact" className='scroll__down'>Scroll Down <BsArrowRight /></a>
            </div>
        </header>
    )
}

export default Header;