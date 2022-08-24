import './Contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdAlternateEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { GrSend } from 'react-icons/gr';
import { BsChatTextFill } from 'react-icons/bs';

const Contact = ( ) => {
	const form = useRef();
	const sendEmail = (e) => {

		e.preventDefault();

		emailjs.sendForm('service_ekhk9r7', 'template_7lua96b', form.current, 'DSPFhJjHFDxFnIH7g')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});

		e.target.reset();
	}

	return (
		<section id="contact">
			<h2>Contact</h2>
			<h3>Get in touch</h3>

			<div className="contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdAlternateEmail className='contact__option-icon' />
						<div className="contact__option-content">
							<h4>Email</h4>
							<h5>josejefloen@gmail.com</h5>
							<a 
							href="mailto:josejefloen@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
							>Send a message!</a>
						</div>
					</article>
					<article className="contact__option">
						<FaFacebookMessenger className='contact__option-icon' />
						<div className="contact__option-content">
							<h4>Messenger</h4>
							<h5>José Enciso</h5>
							<a 
								href="http://m.me/Jose.Enciso.88?ref=portfolio"
								rel="noreferrer noopener"
								target="_blank"  
							>Send a message!</a>
						</div>
					</article>
					<article className="contact__option">
						<BsChatTextFill className='contact__option-icon' />
						<div className="contact__option-content">
						<h4>Text Message</h4>
						<h5>+447752701658</h5>
						<a 
							href="https://api.whatsapp.com/send?phone=+447752701658"
							target="_blank"  
							rel="noreferrer noopener"
							>Send a message!</a>
						</div>
					</article>
				</div>

				<form ref={ form } onSubmit={ sendEmail } method="post">
					<fieldset>
						<legend>Drop a message here</legend>
						<input type="text" name="name" placeholder="Name" required />
						<input type="email" name="email" placeholder='Email' />
						<textarea name="message" cols="30" rows="12" placeholder='Message' required ></textarea>
						<button type="submit" className='btn btn-primary'>Send Message <GrSend className='send__button-icon' /></button>
					</fieldset>
				</form>
			</div>
		</section>
	)
}

export default Contact;