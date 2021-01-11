import React, { Fragment } from 'react';
import ShowContainer from '../components/show/Show';
import EpisodeListContainer from '../components/episode/EpisodeList';

const Homepage = () => {

    return (
        <Fragment>
            <ShowContainer />
            <EpisodeListContainer />
        </Fragment>
    );
};

export default Homepage;