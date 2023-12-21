import './App.css';
// import { SiHomeassistantcommunitystore } from 'react-icons/si';
// import { SiKnowledgebase } from 'react-icons/si';
// import { MdWorkHistory, MdContacts } from 'react-icons/md';

import CarouselComponent from './CarouselComponent.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App() {

  return (
    <div className="App">

      {/* Navigation section starts here */}
      <nav className='nav-container'>
        <div className='brand'><h1>IMRAN ANSARI</h1></div>

        <ul className='navigation-options'>
          <li className='option'><a className="fancy-link" href="/">Home</a></li>
          <li className='option'><a className="fancy-link" href="/">About</a></li>
          <li className='option'><a className="fancy-link" href="#serviceid">Services</a></li>
          <li className='option'><a className="fancy-link" href="/contact">Contact</a></li>
        </ul>
      </nav>
      {/* Navigation section ends here */}

      <Main />

      {/* Service section starts here */}
      <div id="serviceid" className='Service-section'>
        <div className='service-header'>
          <h1>Offered Services</h1>
          <p>Get things done quick, get things done reliably</p>
        </div>
        <CarouselComponent />
      </div>
      {/* Service section ends here */}

      <Footer />

    </div>
  );
}

export default App;
