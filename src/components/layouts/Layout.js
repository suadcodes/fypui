import Header from './Header.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Modal from '../pages/PageLayout/Modal.js';

import './Layout.css';


function Layout(props) {
  return (
    <Modal.Provider>
    <div className="centrepane">
    <div className="StickyHeader">   
      <Header />
      <Navbar/>
      </div> 
      <main>
        {props.children}
      </main>
      <Footer />
    </div>

    </Modal.Provider>
  )
    
}

export default Layout;