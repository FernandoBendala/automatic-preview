import { useState } from 'react'

import iconBurgerMenu from '../../../assets/images/icon-burger-menu.svg'
import iconChevronDown from '../../../assets/images/icon-chevron-down.svg'
import iconHeart from '../../../assets/images/icon-heart.svg'

import './dropdown.scss'

const Dropdown = ( { list, selection, setSelectedOpt } ) => {
    const [displayToolList, setDisplayToolList] = useState( false )

    const handleDropdownClick = () => {
        setDisplayToolList( !displayToolList )
    }

    const handleSelection = async ( data ) => {
        setSelectedOpt( data )
        setDisplayToolList( !displayToolList )
    }

    return (
        <div className='dropdown'>
            {/* Dropdown button */}
            <button
                className='dropdown__button'
                onClick={handleDropdownClick}
            >
                <img
                    src={iconBurgerMenu}
                    alt='menu'
                    className='button__icon'
                />
                <span className='button__text'>
                    {selection || 'Select the product'}
                </span>
                <img
                    src={iconChevronDown}
                    alt='status'
                    className='button__icon'
                />
            </button>

            {/* Dropdown list */}
            {displayToolList
                ? (
                    <ul className='dropdown__list'>
                        {list && Object.keys( list ).map( ( item ) =>
                            <li
                                key={item}
                                className='list__item'
                                onClick={() => handleSelection( list[item] )}
                            >
                                <img
                                    src={iconHeart}
                                    alt='list icon'
                                    className='list__item__icon'
                                />
                                <span
                                    className='list__item__text'
                                    title={list[item]}
                                >
                                    {list[item]}
                                </span>
                            </li>
                        )}
                    </ul>
                ) : null
            }

        </div>
    )
}

export default Dropdown