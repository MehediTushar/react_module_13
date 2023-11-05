import React, { useRef, useEffect } from 'react';
import AppNav from '../components/AppNav.jsx';

const AboutPage = () => {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);
    return (
        <div>
             <AppNav/>
            <h1>About Page</h1>
            <input ref={inputRef} type="text" placeholder="Name" />
        </div>
    );
};

export default AboutPage;