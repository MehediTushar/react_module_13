import React, { useRef, useEffect } from 'react';
import AppNav from '../components/AppNav.jsx';
const ProjectPage = () => {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);
    return (
        <div>
            <AppNav/>
            <h1>Project Page</h1>
            <input ref={inputRef} type="text" placeholder="Name" />
        </div>
    );
};

export default ProjectPage;