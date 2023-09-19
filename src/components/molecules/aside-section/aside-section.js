import './aside-section.scss'

const AsideSection = ( { icon, name, children } ) => {
    return (
        <section className='aside-section'>
            <h3 className='aside-section__title'>
                <img
                    src={icon}
                    alt={name}
                    className='aside-section__title__icon'
                />
                <span className='aside-section__title__text'>{name}</span>
            </h3>
            <div className='aside-section__actions'>
                {children}
            </div>
        </section>
    )
}

export default AsideSection