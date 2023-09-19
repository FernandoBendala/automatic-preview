import { Outlet } from 'react-router-dom'

import iconLoading from '../../assets/images/icon-loading.svg'
import logoShopfully from '../../assets/images/logo-shopfully.svg'

import './layout-main.scss'

const LayoutMain = ( { isLoading } ) => {
    return (
        <>
            <main className='main'>
                {/* Here should go the main content */}
                {isLoading &&
                    <div className='main__loading'>
                        <img src={iconLoading} alt='loading...' />
                    </div>
                }
                <Outlet />

                {/* Shopfully logo */}
                <img
                    src={logoShopfully}
                    alt='Shopfully logo'
                    className='main__watermark'
                />
            </main>
        </>
    )
}

export default LayoutMain