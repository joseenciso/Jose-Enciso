import './Footer.css';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = ( ) => {
    return (
        <footer id="footer">
            <a href="#home" className='footer__logo'>José Enciso<span className='footer__logo-dev'>Fullstack Developer</span></a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Experience</a></li>
                <li><a href="#home">Services</a></li>
                <li><a href="#home">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/joseenciso-88/" 
                    className="inkedin"
                    target="_blank"
                    rel="noreferrer noopener"
                ><BsLinkedin /> LinkedIn</a>
                <a href="https://github.com/joseenciso" 
                    className="github"
                    target="_blank"
                    rel="noreferrer noopener"
                ><BsGithub /> GitHub</a>
                <a href="https://twitter.com/josejefloen" 
                    className="twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                ><BsTwitter /> Twitter</a>
            </div>
        </footer>
    )
}

export default Footer;