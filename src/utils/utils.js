import ClipLoader from "react-spinners/ClipLoader";

/**
 * Renders clip loader while fetching data from API.
 */
export const EnhancedClipLoader = () => {
    return (
        <ClipLoader css={'display: block; margin: 25% auto;'} />
    );
};

export const InfiniteScrollClipLoader = ({ condition }) => {
    return condition ? <EnhancedClipLoader /> : <img src={EndScrollGif} alt="No more episodes" style={{marginTop:'5rem'}}></img>
};

export const NotFoundGif = 'https://64.media.tumblr.com/ad51ba9e793cbc4c80fa9b84b3dc9583/tumblr_mzq9i35By51s2r8npo1_500.gif';

const EndScrollGif = 'https://64.media.tumblr.com/561a8344d12d202c2817cfafe200b498/tumblr_pqe0izHYmZ1vtwr9o_540.gif'