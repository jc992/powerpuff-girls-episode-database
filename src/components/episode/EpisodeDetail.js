import React from 'react';

/**
 * Renders specific episode information.
 */
export const EpisodeDetailContainer = ({ episode }) => {

    const { name, image, summary } = episode;

    const Image = () => {
        return (
            image
                ? <img src={image.medium} alt="Episode Cover"></img>
                : <div>Episode cover</div>
        );
    };

    const Summary = () => {
        return (
            summary
                ? <span dangerouslySetInnerHTML={{ __html: summary }}></span>
                : <span><p>There is no description.</p></span>
        );
    };

    const Episode = () => (
        <div className="episode-container">
            <h3>{name}</h3>
            <div className="row u-margin-left-medium">
                <div className="col-1-of-3">
                    <Image />
                </div>
                <div className="col-1-of-3 text-justify">
                    <Summary />
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Episode />
        </div>
    );
};

export default EpisodeDetailContainer;