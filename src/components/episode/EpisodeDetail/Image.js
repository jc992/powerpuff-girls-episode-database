import React from 'react';

/**
 * Renders image cover for a specific episode.
 */
export const Image = ({ image }) => {
    return (
        image
            ? <img src={image.medium} alt="Episode Cover"></img>
            : <div>Episode cover</div>
    );
};

export default Image;