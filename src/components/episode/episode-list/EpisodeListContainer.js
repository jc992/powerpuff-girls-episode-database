import React, { Fragment } from 'react';
import EpisodeList from './EpisodeList';

/**
 * Renders a table containing episode list.
 */
export const EpisodeListContainer = () => {

    return (
        <Fragment>
            <EpisodeList />
        </Fragment>
    );
};

export default EpisodeListContainer;