import React from 'react'

import Clock from '../../atoms/clock/clock'

import mobileStatusBar from '../../../assets/images/mobile-status-bar.svg'

import './mobile.scss'


const Mobile = ( { mobileHeader, mobileFooter, children } ) => {
    return (
        <section id="mobile" className='mobile'>
            <header className='mobile__header'>
                <figure className='mobile__header__status'>
                    <img
                        src={mobileStatusBar}
                        alt='Mobile status bar'
                        className='status__bar'
                    />
                    <figcaption className='status__hour'>
                        <Clock />
                    </figcaption>
                </figure>
                {mobileHeader
                    ? (
                        <img
                            src={mobileHeader}
                            alt='Mobile header'
                            className='mobile__header__status-bar'
                        />
                    )
                    : null
                }
            </header>
            {children
                ? children
                : null
            }
            {mobileFooter
                ? (
                    <div className='mobile__footer'>
                        <img
                            src={mobileFooter}
                            alt='Mobile footer'
                            className='mobile__footer__image'
                        />
                    </div>
                )
                : null
            }
        </section>
    )
}

export default Mobile