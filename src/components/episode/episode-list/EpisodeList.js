import React, { useContext } from 'react'
import Header from './Header';
import EpisodeListBody from './EpisodeListBody';
import { Context } from '../../../context/Context';
import { EnhancedClipLoader } from '../../../utils/utils';
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

    const Testing = () => {
        if (lastRowIndex < episodeList.length) {
            return <EnhancedClipLoader />
        } else {
            return <h1>You have reached the end</h1> //meter gif do devil do show ;
        };
    };

    return (
        <div>
            <InfiniteScroll
                className="episodelist-container"
                loadMore={handleLoadMore}
                hasMore={true || false}
                loader={<Testing key={lastRowIndex} />}>
                <table className="table u-width-big u-center-table" id="scrollableDiv">
                    <thead>
                        <Header />
                    </thead>
                    <tbody>
                        <EpisodeListBody
                            episodeList={episodeList}
                            lastRowIndex={lastRowIndex} />
                    </tbody>
                </table>
            </InfiniteScroll>
        </div>
    );
};

export default EpisodeList;