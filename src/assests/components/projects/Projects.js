import './Projects.css';
import IMG1 from '../../images/portfolio/portfolio1.webp';

const data = [
	{
		id: 0,
		image: IMG1,
		title: 'Abel Pineda',
		github: 'https://github.com/joseenciso/abelpineda',
		demo: 'https://www.abelpinedaconsultant.co.uk/'
	},
	{
		id: 1,
		image: IMG1,
		title: 'Backpocket',
		description: '',
		github: 'https://github.com/joseenciso/Backpocket',
		demo: 'https://backpocket-store.herokuapp.com/'
	},
	{
		id: 2,
		image: IMG1,
		title: 'Bottleneck',
		description: '',
		github: 'https://github.com/joseenciso/bottleneck',
		demo: 'https://bottleneck-gaming.herokuapp.com/home?page=1'
	},
	{
		id: 3,
		image: IMG1,
		title: 'Live-Band',
		github: 'https://github.com/joseenciso/Live-Band',
		demo: 'https://joseenciso.github.io/Live-Band/'
	}
];

const Projects = ( ) => {
	return  (
		<section id="projects">
			<h2>Portfolio Section</h2>
			<div className="portfolio__container">
				
				{
					data.map( ( { id, image, title, github, demo } ) => {
						return (
							<article key={id} className="portfolio__item">
								<img src={ image } alt={ title } />
								<div className="portfolio__item-content">
									<h3>{ title }</h3>
									<div className="portfolio__item-cta">
										<a href={ github } 
											target="_blank"  
											rel="noopener noreferrer"
											className='btn btn-repo'
										>Github</a>
										<a href={ demo } 
											target="_blank" 
											rel="noopener noreferrer"
											className='btn btn-primary btn-demo'
										>Live Demo</a>
									</div>
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Projects;