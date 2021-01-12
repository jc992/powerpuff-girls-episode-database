import React from 'react';
import { NOT_FOUND_GIF } from '../utils/utils';

export const NotFound = () => {
    return (
        <div className="notfound-container">
            <img src={NOT_FOUND_GIF} alt="Invalid Route"></img>
            <h1>404 Page Not Found</h1>
        </div>
    );
};

export default NotFound;