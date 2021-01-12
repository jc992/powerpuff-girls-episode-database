import React from 'react';
import { NOT_FOUND_GIF } from '../config/endpoints';
import { Gif } from '../utils/utils';

export const NotFound = () => {
    return (
        <Gif
            className="notfound-container"
            gifSource={NOT_FOUND_GIF}
            alt="Invalid Route"
            message="404 Page Not Found" />
    );
};

export default NotFound;