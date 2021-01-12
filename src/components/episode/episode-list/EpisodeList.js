import React, { useContext } from 'react'
import Header from './Header';
import EpisodeListBody from './EpisodeListBody';
import { Context } from '../../../context/Context';
import { EnhancedClipLoader, InfiniteScrollClipLoader } from '../../../utils/utils';
import InfiniteScroll from 'react-infinite-scroller';

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
        <div>
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
        </div>
    );
};

export default EpisodeList;