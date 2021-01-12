import React, { Fragment } from 'react';
import EpisodeList from './EpisodeList';

/**
 * Renders container with episode list.
 */
export const EpisodeListContainer = () => {

    return (
        <Fragment>
            <EpisodeList />
        </Fragment>
    );
};

export default EpisodeListContainer;