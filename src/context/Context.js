import React, { createContext, useState, useEffect } from 'react';

import { fetchAllData } from '../config/axios';

export const Context = createContext();

/**
 * Context provider for Application.
 */
export const Provider = ({ children }) => {

    const [show, setShow] = useState();
    const [episodeList, setEpisodeList] = useState();
    const [lastRowIndex, setLastRowIndex] = useState(15); //Starts the episode list at 15 entries.

    useEffect(() => {
        fetchAllData(setShow, setEpisodeList);
    }, []);

    return (
        <Context.Provider
            value=
            {{
                show,
                episodeList,
                lastRowIndex,
                setLastRowIndex
            }}>
            {children}
        </Context.Provider>
    );
};