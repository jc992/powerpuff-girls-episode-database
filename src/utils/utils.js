import ClipLoader from "react-spinners/ClipLoader";
import { END_SCROLL_GIF } from '../config/endpoints';

/**
 * Renders clip loader while fetching data from API.
 */
export const EnhancedClipLoader = () => {
    return (
        <ClipLoader css={'display: block; margin: 25% auto;'} />
    );
};

/**
 * Conditionally render a clip loader when loading more table data, or an image if all data has been rendered.
 */
export const InfiniteScrollClipLoader = ({ condition }) => {
    return condition
        ? <EnhancedClipLoader />
        : <Gif
            className="u-margin-top-big"
            gifSource={END_SCROLL_GIF}
            alt="No more episodes" />
};

/**
 * Re-usable Animated Gif Component.
 */
export const Gif = ({ className, gifSource, alt, message }) => {
    return (
        <div className={className}>
            <img src={gifSource} alt={alt}></img>
            {message ? <h1>{message}</h1> : null}
        </div>
    );
};