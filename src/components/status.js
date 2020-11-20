import React from 'react';
import classNames from 'classnames';

const status = ({ status }) => {
    const statusClasses = classNames( 'status', status );

    return (
        <div className={ statusClasses }>
            { status }
            </div>
    )
};

export default status;