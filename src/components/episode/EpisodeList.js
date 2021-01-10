import React, { Fragment, useContext } from 'react';
import EpisodeItem from './EpisodeItem';
import Header from './Header';
import { Context } from '../../context/Context';
import { EnhancedClipLoader } from '../../utils/utils';

/**
 * Renders a table containing episode list.
 */
export const EpisodeListContainer = () => {

    const context = useContext(Context);
    const { episodeList } = context;
    if (episodeList === undefined) return <EnhancedClipLoader />;

    const Episodes = () => {
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

    const EpisodeList = () => {
        return (
            <div className="episodelist-container">
                <table className="table u-width-big u-center-table">
                    <thead>
                        <Header />
                    </thead>
                    <tbody>
                        <Episodes />
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <Fragment>
            <EpisodeList />
        </Fragment>
    );
};

export default EpisodeListContainer;