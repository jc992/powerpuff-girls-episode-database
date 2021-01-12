import React, { Fragment, useEffect, useContext } from 'react';
import { EpisodeDetailContainer } from '../components/episode/episode-detail/EpisodeDetailContainer';
import { Context } from '../context/Context';
import { EnhancedClipLoader } from '../utils/utils';

/**
 * Returns specific episode details page.
 */
const EpisodeDetailsPage = ({ match, history }) => {
    const context = useContext(Context);
    const { episodeList } = context;
    const { number, season } = match.params;

    let episode;

    /**
     * Guarantee that you don't get stuck waiting for the page to render if you try to access a nonexistent episode.
     */
    useEffect(() => {
        setTimeout(() => {
            if (episode === undefined) {
                history.push('/NotFound');
            }
        }, 5000)
    }, [history, episode]);

    if (episodeList === undefined) return <EnhancedClipLoader />;

    /**
     * This variable filters out the episode matching the accessed navigation link by number and season.
     */
    episode = episodeList.filter(episode => episode.season === parseInt(season) && episode.number === parseInt(number))[0]

    return (
        <Fragment>
            <EpisodeDetailContainer
                episode={episode} />
        </Fragment>
    );
};

export default EpisodeDetailsPage;