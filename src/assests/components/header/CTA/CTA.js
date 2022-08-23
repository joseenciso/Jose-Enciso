import CV from '../../../media/jose-enciso-cv.pdf';

const CTA = ( ) =>{
    return (
        <div className="cta">
            <a href={CV} className="btn" download>
                Download CV
            </a>
            <a href="#contact" rel="noreferrer" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    )
}

export default CTA;