import { useCallback } from 'react'
import parse from 'html-react-parser'
import useEvent from '../../../utils/events'

import iconHeart from '../../../assets/images/icon-heart.svg'

import './modals.scss'

const ModalInfo = ( { content, show } ) => {
    const handleClickOutside = useCallback( () => show( false ), [show] )
    const reference = useEvent.outsideClick( handleClickOutside )

    return (
        <div className='modal__container'>
            <section className='modal' ref={reference}>
                <h3 className='modal__title'>{parse( content.title )}</h3>
                <ul className='modal__list'>
                    {content.list.map( ( item ) =>
                        <li
                            key={item}
                            className='modal__list__item'
                        >
                            <img
                                src={iconHeart}
                                alt='list icon'
                                className='item__icon'
                            />
                            <span className='item__text'>{item}</span>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    )
}


export default ModalInfo