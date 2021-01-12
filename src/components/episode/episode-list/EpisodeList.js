import React, { useContext } from 'react'
import Header from './Header';
import EpisodeListBody from './EpisodeListBody';
import { Context } from '../../../context/Context';
import { EnhancedClipLoader } from '../../../utils/utils';

/**
 * Renders a table containing episode list.
 */
export const EpisodeList = () => {

    const context = useContext(Context);
    const { episodeList } = context;

    if (episodeList === undefined) return <EnhancedClipLoader />;

    return (
        <div className="episodelist-container">
            <table className="table u-width-big u-center-table">
                <thead>
                    <Header />
                </thead>
                <tbody>
                    <EpisodeListBody
                        episodeList={episodeList} />
                </tbody>
            </table>
        </div>
    );
};

export default EpisodeList;