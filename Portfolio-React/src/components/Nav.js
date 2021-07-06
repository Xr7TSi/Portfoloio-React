import React from 'react';
import '../styles/style.css';

const styles = {
    navbarLogo: {
        color: 'white',
        backgroundColor: 'rgb(30, 8, 153)',
        // backgroundColor: 'black',
        fontSize: '28px',
        marginLeft: '25px'
    },

    navbarBackground: {
      // backgroundColor: 'white'
      backgroundColor: 'black'
    },

    navbarLocation: {
      backgroundColor: 'black',
      border: 'none'
    },
  };



function Nav({ currentPage, handlePageChange }) {
    return (
      
      <ul className="nav nav-tabs"style={styles.navbarBackground}>
          <a className="navbar-brand" style={styles.navbarLogo} >Jonathan Rein</a>
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#work"
            onClick={() => handlePageChange('Work')}
            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
          >
            Work
          </a>
        </li>
    
        <li className="nav-item">
          <a style={styles.navbarLocation}
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    );
  }






export default Nav;