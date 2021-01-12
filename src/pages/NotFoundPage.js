import React, { Fragment } from 'react';
import { NOT_FOUND_GIF } from '../utils/utils';

export const NotFound = () => {
    return (
        <Fragment>
            <img src={NOT_FOUND_GIF} alt="Invalid Route" style={{ borderRadius: '10px' }}></img>
            <h1>404 Page Not Found</h1>
        </Fragment>
    );
};

export default NotFound;