import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    React.useEffect(() => {
        const logo = document.querySelector('.logo');
        setTimeout(() => {
          logo.style.opacity = '1';
          logo.style.filter = 'blur(0)';
          setTimeout(() => {
            logo.style.opacity = '0';
            logo.style.filter = 'blur(10px)';
            setTimeout(() => {
              document.querySelector('.loading-screen').style.opacity = '0';
              setTimeout(() => {
                window.location.href = '/';
              }, 1000); // Change 1000 to the desired delay in milliseconds
            }, 1000); // Change 1000 to the desired delay in milliseconds
          }, 1000); // Change 1000 to the desired delay in milliseconds
        }, 1000); // Change 1000 to the desired delay in milliseconds
      }, []);
  
    return (
      <div className="loading-screen">
        <img src="https://res.cloudinary.com/djhqargof/image/upload/v1675539397/CPSlogo2_htqw6o.png" alt="logo" className="logo" />
      </div>
    );
  }

export default LoadingScreen;
