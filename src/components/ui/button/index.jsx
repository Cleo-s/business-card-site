import React from 'react';

import './button.scss';

export const Button = ({ children, className, icon, onClick}) => {
    return (
        <button className={`button + ${className}`} onClick={onClick}>
            {icon ? children : icon}
        </button>
    )
}
