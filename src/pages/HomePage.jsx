import React , { useState, useEffect } from 'react';
import AppNav from '../components/AppNav.jsx';

const HomePage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `Home Page (${count} clicks)`;
    }, [count]);
  
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
        <div>
            <AppNav/>
            <h1>Home Page</h1>
            <p>Click count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
        </div>
    );
};

export default HomePage;