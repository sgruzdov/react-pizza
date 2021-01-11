import React from 'react'
import cn from 'classnames'

type ButtonType = {
    children: React.ReactNode
    onClick?: Function
    className?: string
    outline?: boolean
}

const Button: React.FC<ButtonType> = ({ children, onClick, className, outline }) => {

    const classes = cn(
            'button', 
            className,
            { 'button--outline': outline }
        )


    return (
        <button
            className={classes}
            // onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
