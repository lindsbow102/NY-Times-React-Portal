import React from 'react';

export const Card = (props) => (
    <div className="card border-dark mb-3" {...props}>
    {props.children}
  </div>
)