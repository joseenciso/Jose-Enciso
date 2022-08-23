import { BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/joseenciso-88/" target="_blank" rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/joseenciso/" target="_blank" rel="noreferrer">
            <BsGithub />
        </a>
    </div>
  )
}

export default HeaderSocials