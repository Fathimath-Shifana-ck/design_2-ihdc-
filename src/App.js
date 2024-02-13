import React, { useState } from 'react';
import Navbar from './components/navbar';
import membershipImage from './components/assets/membership.jpg'; 
import img1 from './components/assets/img1.jpg'; 
import img2 from './components/assets/img2.jpg';
import img3 from './components/assets/img3.jpg';

function App() {
  const navigationBarStyle = {
    color: '#fff', 
    padding: '30px',
    display: 'flex', 
    justifyContent: 'center', 
  };

  const listStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  };

  const [activeLink, setActiveLink] = useState('Join');


  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

 
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    marginTop: '50px',
    marginLeft: '200px', 
  };

  const buttonStyle = {
    backgroundColor: 'silver',
    color: 'blue',
    padding: '10px 110px', 
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    textTransform: 'uppercase',
  };

  const premiumFeaturesStyle = {
    color: 'blue',
    textAlign: 'right',
    marginRight: '500px', 
    marginTop: '-480px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'normal',
  };

  const scrollableContainerStyle = {
    display: 'flex', 
    overflowX: 'auto', 
    marginTop: '20px',
    marginLeft: '600px', 
    marginRight: '200px', 
  };

  const imageStyle = {
    width: '300px', 
    height: '200px', 
    marginRight: '10px', 
  };

  const joinListItemStyle = {
    marginRight: '10px', 
    marginTop: '10px', 
  };

  const todayListItemStyle = {
    marginRight: '50px', 
    marginTop: '10px', 
  };

  return (
    <div>
      <Navbar />
      
      <div style={containerStyle}>
        <h2 style={{ fontWeight: 'normal', fontSize: '30px', fontFamily: 'Arial, sans-serif' }}>New Arrival</h2>
        
        <div style={{ height: '20px' }}></div>

        <div style={navigationBarStyle}>
          <ul style={listStyle}>
            <li style={joinListItemStyle}>
              <a href="#" style={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'Arial, sans-serif', color: 'black', textDecoration: activeLink === 'Join' ? 'underline' : 'none' }} onClick={() => handleLinkClick('Join')}>Join</a>
            </li>
            <li style={todayListItemStyle}>
              <a href="#" style={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'Arial, sans-serif', color: 'black', textDecoration: activeLink === 'Today' ? 'underline' : 'none' }} onClick={() => handleLinkClick('Today')}>Today</a>
            </li>
          </ul>
        </div>

        <img src={membershipImage} alt="Membership" style={{ width: '300px', marginTop: '20px' }} />

        <button style={buttonStyle}>JOIN NOW</button>
      </div>

      <h3 style={premiumFeaturesStyle}>Unlock Premium Features Now</h3>

      <div style={scrollableContainerStyle}>
        <div style={{ textAlign: 'center' }}>
          <img src={img1} alt="Image 1" style={imageStyle} />
          <p>Text for Image 1</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img src={img2} alt="Image 2" style={imageStyle} />
          <p>Text for Image 2</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <img src={img3} alt="Image 3" style={imageStyle} />
          <p>Text for Image 3</p>
        </div>
      </div>

      <div style={{ marginBottom: '200px', paddingLeft: '800px', height: '150px' }}>
        <button style={{ ...buttonStyle, backgroundColor: 'silver', color: 'black' }}>UNLOCK NOW</button>
      </div>
      <div style={{ marginBottom: '100px', paddingLeft: '830px', height: '150px', marginTop:'-300px' }}>
        <button style={{ ...buttonStyle, backgroundColor: 'silver', color: 'black' }}>DETAILS</button>
      </div>
      
    </div>
  );
}

export default App;
