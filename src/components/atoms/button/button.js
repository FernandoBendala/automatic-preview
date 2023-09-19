import './button.scss'

const Button = ( { icon, text, disabled, onClick, type } ) => {
    const styles = type === 'secondary'
        ? `button button--secondary ${!disabled ? 'disabled' : ''}`
        : `button ${!disabled ? 'disabled' : ''}`

    return (
        <button
            className={styles}
            onClick={onClick}
        >
            <span className='button__text'>{text}</span>
            {icon &&
                <img
                    src={icon}
                    alt={text}
                    className='button__icon'
                />}
        </button>
    )
}

export default Button