import React from 'react';

import './input.scss';

function Input({ className, value, type, onChange }) {
    return (
        <input
            className={className}
            value={value}
            type={type}
            onChange={onChange}>
        </input>
    )
}

export default Input;