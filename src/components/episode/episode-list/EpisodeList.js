import React, { useContext, Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Header from './Header';
import EpisodeListBody from './EpisodeListBody';
import { Context } from '../../../context/Context';
import { EnhancedClipLoader, InfiniteScrollClipLoader } from '../../../utils/utils';

/**
 * Renders a table containing episode list.
 */
export const EpisodeList = () => {

    const context = useContext(Context);
    const { episodeList, lastRowIndex, setLastRowIndex } = context;

    if (episodeList === undefined) return <EnhancedClipLoader />;

    const handleLoadMore = () => {
        if (lastRowIndex < episodeList.length) {
            return setLastRowIndex(lastRowIndex * 2);
        };
    };

    return (
        <Fragment>
            {/**
             * Infinitely load content using a React Component. Check https://www.npmjs.com/package/react-infinite-scroller for more detailed information.
             * @prop {String} className Specify a CSS class.
             * @prop {Function} loadMore A callback when more items are requested by the user.
             * @prop {Boolean} hasMore Whether there are more items to be loaded.
             * @prop {Component} loader A React component to render while more items are loading.
             */}
            <InfiniteScroll
                className="episodelist-container"
                loadMore={handleLoadMore}
                hasMore={true || false}
                loader={
                    <InfiniteScrollClipLoader
                        condition={lastRowIndex < episodeList.length}
                        key={lastRowIndex} />
                }>
                <table className="table u-width-big u-center-table">
                    <Header />
                    <EpisodeListBody
                        episodeList={episodeList}
                        lastRowIndex={lastRowIndex} />
                </table>
            </InfiniteScroll>
        </Fragment>
    );
};

export default EpisodeList;