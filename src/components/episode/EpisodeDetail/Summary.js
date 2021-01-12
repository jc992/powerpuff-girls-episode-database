import React from 'react';

/**
 * Renders summary for a specific episode.
 */
export const Summary = ({ summary }) => {
    return (
        summary
                ? <span dangerouslySetInnerHTML={{ __html: summary }}></span>
                : <span><p>There is no description.</p></span>
    );
};

export default Summary; 