import './About.css';
import ME from '../../images/jose-enciso.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { TbBooks } from 'react-icons/tb';
import { BsArrowDownSquare } from 'react-icons/bs';
const About = () => {
	return ( 
		<section id="about">
			<h2>About Me</h2>

			<div className="about__container">
				<div className="about__me">
					<div className="about__me-image">
							<img src={ ME } alt="José Enciso" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>Studied</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Independent Projects</h5>
							<small>
								Projects created for friends to 
								gain experice
							</small>
						</article>
						<article className="about__card">
							<TbBooks className="about__icon" />
							<h5>Projects</h5>
							<small>Various projects completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur 
						adipisicing elit. Non perferendis earum 
						atque, asperiores id sequi illo quidem 
						eligendi cupiditate accusamus odio 
						dolore dicta sunt unde saepe. Ex 
						laudantium deleniti officia.
					</p>
					<a href="#contact" className="btn btn-primary">Let's Talk <BsArrowDownSquare className='about__button-icon'/></a>
				</div>
			</div>
		</section>
	)
}

export default About;