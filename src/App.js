import './App.css';

import Header from './assests/components/header/Header.js';
import Nav from './assests/components/nav/Nav.js';
import About from './assests/components/about/About.js';
import Experience from './assests/components/experience/Experience.js';
import Services from './assests/components/services/Services.js';
import Projects from './assests/components/projects/Projects.js';
import Contact from './assests/components/contact/Contact.js';
import Footer from './assests/components/footer/Footer.js';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/*<Services />*/}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
