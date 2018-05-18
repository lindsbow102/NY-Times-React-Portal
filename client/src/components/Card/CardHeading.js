import React from 'react';

export const CardHeading = (props) => (
    <div className = 'card-header' {...props}>
    {props.children}
    </div>
)