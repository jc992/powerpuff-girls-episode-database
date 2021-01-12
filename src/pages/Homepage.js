import React, { Fragment } from 'react';
import ShowContainer from '../components/show/Show';
import EpisodeListContainer from '../components/episode/episode-list/EpisodeListContainer';

const Homepage = () => {

    return (
        <Fragment>
            <ShowContainer />
            <EpisodeListContainer />
        </Fragment>
    );
};

export default Homepage;