import React from 'react';

import './button.scss';

function Button({ children, className, icon, onClick}) {
    return (
        <button className={`button + ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;