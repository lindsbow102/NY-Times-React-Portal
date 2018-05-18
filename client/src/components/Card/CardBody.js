import React from 'react';

export const CardBody = (props) => (
    <div className = 'card-body text-dark' {...props}>
    {props.children}
    </div>
)