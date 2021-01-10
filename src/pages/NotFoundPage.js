import React from 'react';
import { NotFoundGif } from '../utils/utils';

export const NotFound = () => {
    return (
        <div>
            <img src={NotFoundGif} alt="Invalid Route" style={{ borderRadius: '10px' }}></img>
            <h1>404 Page Not Found</h1>
        </div>
    );
};

export default NotFound;