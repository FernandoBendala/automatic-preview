import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import RouterAside from '../../routers/router-aside'
import LayoutMain from '../layout-main/layout-main'
import ModalAlert from '../../components/atoms/modals/modal-alert'
import HomeAside from '../../pages/home/home-aside'

import iconArrowLeft from '../../assets/images/icon-arrow-left-circle.svg'
import './layout-app.scss'

const LayoutApp = () => {
    const [selectedTool, setSelectedTool] = useState( '' )
    const [isLoading, setIsLoading] = useState( false )
    const [modalAlert, setModalAlert] = useState( false )

    let { tool } = useParams()

    const handleNavigationTool = ( data ) => {
        setSelectedTool( data )
    }

    const handleModalAlert = () => {
        setModalAlert( true )
    }

    const handleModalClose = ( shouldNavigate ) => {
        setModalAlert( false )
        if ( shouldNavigate ) {
            window.location.href = '/'
        }
    }

    return (
        <>
            {/* Menu */}
            <nav className='layout-aside'>
                {tool
                    ? <>
                        <Link
                            to="#"
                            onClick={handleModalAlert}
                            className='layout-aside__back'
                        >
                            <img
                                src={iconArrowLeft}
                                alt='return back'
                                className='layout-aside__back__image'
                            />
                            <span className='layout-aside__back__text'>Return selection</span>
                        </Link>

                        <h3 className='layout-aside__title'>{selectedTool || tool}</h3>
                        <RouterAside isLoading={setIsLoading} />
                    </>
                    : <HomeAside tool={handleNavigationTool} />
                }
            </nav>

            {/* Main */}
            <LayoutMain isLoading={isLoading} />

            {/* Alert */}
            {modalAlert && (
                <ModalAlert onClose={handleModalClose} />
            )}
        </>
    )
}

export default LayoutApp