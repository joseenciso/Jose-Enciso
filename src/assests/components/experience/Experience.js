import './Experience.css';
import { ImHtmlFive, ImCss3 } from 'react-icons/im'
import { SiJavascript,SiJquery, SiBootstrap, SiMongodb, SiDjango, SiDart, SiFlutter } from 'react-icons/si';
import { FaReact, FaFlask, FaStripeS, FaAws, FaVuejs, FaJava } from 'react-icons/fa';
import { IoLogoNodejs, IoLogoAngular } from 'react-icons/io';
import { DiSqllite, DiDotnet } from 'react-icons/di';
import { TbBrandKotlin } from 'react-icons/tb';
import { GrDocker } from 'react-icons/gr';

const Experience = ( ) => {
	return (
		<section id="experience">
			<h2>My Experience</h2>
			<div className="experience__container">
				<div className="experience__card experience__frontend">
						<h3>Frontend Development</h3>
						<div className="experience__content">
							<article className="experience__details">
								<ImHtmlFive />
								<h4 className='text-light'>
										HTML
								</h4>
							</article>
							<article className="experience__details">
								<ImCss3 />
								<h4 className='text-light'>
										CSS
								</h4>
							</article>
							<article className="experience__details">
								<SiBootstrap />
								<h4 className='text-light'>
										Bootstrap
								</h4>
							</article>
							<article className="experience__details">
								<SiJavascript />
								<h4 className='text-light'>
										JavaScript
								</h4>
							</article>
							<article className="experience__details">                            
								<SiJquery />
								<h4 className='text-light'>
										jQuery
								</h4>
							</article>
							<article className="experience__details">                            
								<FaReact />
								<h4 className='text-light'>
										React
								</h4>
							</article>
						</div>
				</div>

				<div className="experience__card experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__details">
							<FaFlask />
							<h4 className='text-light'>
									Flask
							</h4>
						</article>
						<article className="experience__details">
							<SiDjango />
							<h4 className='text-light'>
									dJango
							</h4>
						</article>
						<article className="experience__details">
							<IoLogoNodejs />
							<h4 className='text-light'>
									Node.js
							</h4>
						</article>
						<article className="experience__details">
							<SiMongodb />
							<h4 className='text-light'>
									MongoDB
							</h4>
						</article>
						<article className="experience__details">                            
							<FaStripeS />
							<h4 className='text-light'>
									Stripe
							</h4>
						</article>
						<article className="experience__details">                            
							<FaReact />
							<h4 className='text-light'>
									React
							</h4>
						</article>
						<article className="experience__details">                            
							<FaAws />
							<h4 className='text-light'>
									AWS S3
							</h4>
						</article>
						<article className="experience__details">                            
							<DiSqllite />
							<h4 className='text-light'>
									SQLite
							</h4>
						</article>
					</div>
				</div>
				
				<div className="experience__card experience__future">
					<h3>Technologies To Learn</h3>
					<div className="experience__content">
						<article className="experience__details">
							<IoLogoAngular /> 
							<h4 className='text-light'>
									Angular
							</h4>
						</article>
						<article className="experience__details">
							<FaVuejs />
							<h4 className='text-light'>
									Vue
							</h4>
						</article>
						<article className="experience__details">
							<FaJava />
							<h4 className='text-light'>
									Java
							</h4>
						</article>
						<article className="experience__details">
							<TbBrandKotlin />
							<h4 className='text-light'>
									Kotlin
							</h4>
						</article>
						<article className="experience__details">                            
							<DiDotnet />
							<h4 className='text-light'>
									C#
							</h4>
						</article>
						<article className="experience__details">                            
							<GrDocker />
							<h4 className='text-light'>
									Docker
							</h4>
						</article>
						<article className="experience__details">                            
							<SiDart />
							<h4 className='text-light'>
									Dart
							</h4>
						</article>
						<article className="experience__details">                            
							<SiFlutter />
							<h4 className='text-light'>
									Flutter
							</h4>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience;