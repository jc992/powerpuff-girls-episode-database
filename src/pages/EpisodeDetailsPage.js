import React, { useContext } from 'react';
import { EpisodeDetailContainer } from '../components/episode/EpisodeDetail';
import { Context } from '../context/Context';
import { EnhancedClipLoader } from '../utils/utils';

/**
 * Returns specific episode details page.
 */
const EpisodeDetailsPage = ({ match }) => {

    const context = useContext(Context);
    const { episodeList } = context;
    const { number, season } = match.params;

    if (episodeList === undefined) return <EnhancedClipLoader />;

    /**
     * This variable filters out the episode matching the accessed navigation link by number and season.
     */
    let episode = episodeList.filter(episode => episode.season === parseInt(season) && episode.number === parseInt(number))[0]

    return (
        < div >
            <EpisodeDetailContainer
                episode={episode} />
        </div >
    );
};

export default EpisodeDetailsPage;