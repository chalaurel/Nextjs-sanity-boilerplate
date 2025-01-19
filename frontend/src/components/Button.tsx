import React from 'react'
import { ButtonProps } from '@/interfaces/Button.d'
import { baseClasses, typeClasses, sizeClasses } from '@/styles'

const Button: React.FC<ButtonProps> = ({
    type = 'default',
    label,
    size = 'md',
    onClick,
}) => {
    return (
        <button
            className={`${baseClasses} ${typeClasses[type]} ${sizeClasses[size]}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button