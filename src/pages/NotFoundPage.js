import React, { Fragment } from 'react';
import { NotFoundGif } from '../utils/utils';

export const NotFound = () => {
    return (
        <Fragment>
            <img src={NotFoundGif} alt="Invalid Route" style={{ borderRadius: '10px' }}></img>
            <h1>404 Page Not Found</h1>
        </Fragment>
    );
};

export default NotFound;