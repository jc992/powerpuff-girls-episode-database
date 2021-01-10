import React from 'react';
import ShowContainer from '../components/show/Show';
import EpisodeListContainer from '../components/episode/EpisodeList';

const Homepage = () => {
        
    return (
        <div>
            <ShowContainer></ShowContainer>
            <EpisodeListContainer></EpisodeListContainer>
        </div>
    );
};

export default Homepage;