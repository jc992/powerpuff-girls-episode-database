import React from 'react';
import EpisodeItem from './EpisodeItem';

/**
 * Renders episode list table body.
 */
export const EpisodeListBody = ({ episodeList }) => {
    return (
        episodeList.map((episode, i) => {
            const { season, number, name, airdate } = episode;
            return (
                <EpisodeItem
                    key={i}
                    season={season}
                    number={number}
                    name={name}
                    airdate={airdate} />
            );
        })
    );
};

export default EpisodeListBody;