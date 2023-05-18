import React from 'react';
import ReactDOM from 'react-dom/client';

const handleScrollTo = (location) => {
    const element = document.getElementById(location);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

export default handleScrollTo;