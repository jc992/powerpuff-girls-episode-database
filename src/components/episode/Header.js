import React from 'react';

/**
 * Renders header for episode list table.
 */
export const Header = () => {
    return (
        <tr>
            <th>Season</th>
            <th>Episode</th>
            <th>Name</th>
            <th>Air Date</th>
        </tr>
    );
};

export default Header;