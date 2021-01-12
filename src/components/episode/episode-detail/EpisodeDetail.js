import React from 'react';
import Image from './Image';
import Summary from './Summary';

/**
 * Renders specific episode information.
 */
export const EpisodeDetail = ({ episode }) => {
    
    const { name, image, summary } = episode;

    return (
        <div className="episode-container">
            <h3>{name}</h3>
            <div className="row u-margin-left-medium">
                <div className="col-1-of-3">
                    <Image
                        image={image} />
                </div>
                <div className="col-1-of-3 text-justify">
                    <Summary
                        summary={summary} />
                </div>
            </div>
        </div>
    );
};

export default EpisodeDetail;