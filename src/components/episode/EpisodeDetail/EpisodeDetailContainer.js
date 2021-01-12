import React, { Fragment } from 'react';
import EpisodeDetail from './EpisodeDetail';

/**
 * Renders container for episode information.
 */
export const EpisodeDetailContainer = ({ episode }) => {

    return (
        <Fragment>
            <EpisodeDetail
                episode={episode} />
        </Fragment>
    );
};

export default EpisodeDetailContainer;