import axios from 'axios';
import { API_SHOW_URL, API_EPISODELIST_URL } from './endpoints';

/**
 * Retrieves show & episode list from API, a sets data to respective hooks.
 * @param {Function} setShow Hook for setting show state.
 * @param {Function} setEpisodeList  Hook for setting episode list state.
 */
export const fetchAllData = (setShow, setEpisodeList) => {
    const showData = axios.get(API_SHOW_URL);
    const episodeData = axios.get(API_EPISODELIST_URL);
    axios.all([showData, episodeData])
        .then(axios.spread((...allData) => {
            setShow(allData[0].data);
            setEpisodeList(allData[1].data)
        }));
};