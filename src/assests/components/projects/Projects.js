import './Projects.css';
import IMG1 from '../../images/portfolio/portfolio1.webp';

const data = [
	{
		id: 0,
		image: IMG1,
		title: ' Project Title',
		github: 'https://github.com',
		demo: 'https://www.google.com/'
	},
	{
		id: 1,
		image: IMG1,
		title: ' Project Title',
		github: 'https://github.com',
		demo: 'https://www.google.com/'
	},
	{
		id: 2,
		image: IMG1,
		title: ' Project Title',
		github: 'https://github.com',
		demo: 'https://www.google.com/'
	},
	{
		id: 3,
		image: IMG1,
		title: ' Project Title',
		github: 'https://github.com',
		demo: 'https://www.google.com/'
	},
	{
		id: 4,
		image: IMG1,
		title: ' Project Title',
		github: 'https://github.com',
		demo: 'https://www.google.com/'
	
	},
	{
		id: 5,
		image: IMG1,
		title: ' Project Title',
		github: 'https://github.com',
		demo: 'https://www.google.com/'
	},
	{
		id: 6,
		image: IMG1,
		title: ' Project Title',
		github: 'https://://github.com/joseenciso',
		demo: 'https://www.google.com/'
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