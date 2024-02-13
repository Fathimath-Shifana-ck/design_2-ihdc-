import React from 'react';
import realestatehouse from './assets/real-estate-house.png';


function Navbar() {
  const navbarStyle = {
    backgroundColor: '#C0C0C0', // Silver background color
    color: '#000', // Black text color
    padding: '10px 20px', // Increased padding for thickness
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center align horizontally
    marginTop: '20px', // Space from the top
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Space around items
    width: '100%', // Ensure full width
  };

  const iconStyle = {
    width: '100px', // Adjust the width to increase the size
    height: 'auto', // Let the height adjust automatically to maintain aspect ratio
    marginRight: '-10px', // Additional space from the right side
  };
  
  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
      <img src={realestatehouse} alt="icon" style={iconStyle} />
        <span>XYZ Systems LLP</span>
        <div style={{ width: '30px' }}></div> {/* Empty space for better alignment */}
      </div>
     
    </nav>
    
  );
}

export default Navbar;
