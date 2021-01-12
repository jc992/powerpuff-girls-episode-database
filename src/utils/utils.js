import ClipLoader from "react-spinners/ClipLoader";

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
    return condition ? <EnhancedClipLoader /> : <img src={END_SCROLL_GIF} alt="No more episodes" style={{marginTop:'5rem'}}></img>
};

export const NOT_FOUND_GIF = 'https://64.media.tumblr.com/ad51ba9e793cbc4c80fa9b84b3dc9583/tumblr_mzq9i35By51s2r8npo1_500.gif';

export const END_SCROLL_GIF = 'https://64.media.tumblr.com/561a8344d12d202c2817cfafe200b498/tumblr_pqe0izHYmZ1vtwr9o_540.gif'