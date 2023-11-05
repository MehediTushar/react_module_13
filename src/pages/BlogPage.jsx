import React, { useRef, useEffect } from 'react';
import AppNav from '../components/AppNav.jsx';
const BlogPage = () => {
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    }, []);
    return (
        <div>
            <AppNav/>
            <h1>Blog Page</h1>
            <input ref={inputRef} type="text" placeholder="Name" />
        </div>
    );
};

export default BlogPage;