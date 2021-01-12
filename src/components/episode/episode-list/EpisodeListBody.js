import React from 'react';
import EpisodeItem from './EpisodeItem';

/**
 * Renders episode list table body.
 */
export const EpisodeListBody = ({ episodeList, lastRowIndex }) => {
    return (
        <tbody>
            {episodeList
                .filter((episode, i) => i < lastRowIndex)
                .map((episode, i) => {
                    const { season, number, name, airdate } = episode;
                    return (
                        <EpisodeItem
                            key={i}
                            season={season}
                            number={number}
                            name={name}
                            airdate={airdate} />
                    );
                })}
        </tbody>
    );
};

export default EpisodeListBody;