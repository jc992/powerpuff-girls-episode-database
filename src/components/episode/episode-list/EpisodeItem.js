import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders table row with specific episode information.
 */
export const EpisodeItem = ({ season, number, name, airdate }) => {

    const formattedDate = airdate.split('-').reverse().join('-');

    return (
        <tr>
            <td>
                {season}
            </td>
            <td>
                {number}
            </td>
            <td>
                <Link to={`episodes/${season}/${number}`}>
                    {name}
                </Link>
            </td>
            <td>
                {formattedDate}
            </td>
        </tr>
    );
};

export default EpisodeItem;