import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom'

/**
 * Renders a navbar.
 */
export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <Button />
            </Link>
        </div>
    );
};

export default Navbar;