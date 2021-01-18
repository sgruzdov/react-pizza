import React from 'react'
import cn from 'classnames'

type ButtonType = {
    children: React.ReactNode
    onClickAdd?: () => void
    className?: string
    outline?: boolean
}

const Button: React.FC<ButtonType> = React.memo(({ children, onClickAdd, className, outline }) => {
    const classes = cn(
            'button', 
            className,
            { 'button--outline': outline }
        )

    return (
        <button
            className={classes}
            onClick={onClickAdd}
        >
            {children}
        </button>
    )
})

export default Button
