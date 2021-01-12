import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { EnhancedClipLoader } from '../../utils/utils';

/**
 * Renders show title, image and information.
 */
export const Show = () => {
    const context = useContext(Context);
    if (context.show === undefined) return <EnhancedClipLoader />;

    const { name, image, summary } = context.show;
    return (
        <div className="show-container">
            <h3>{name}</h3>
            <div className="row u-margin-left-medium">
                <div className="col-1-of-3">
                    <img src={image.medium} alt="Powerpuff Girls Cover"></img>
                </div>
                <div className="col-1-of-3 text-justify">
                    <span dangerouslySetInnerHTML={{ __html: summary }}></span>
                </div>
            </div>
        </div>
    );
};

export default Show;