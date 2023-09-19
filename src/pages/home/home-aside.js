import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { appSelected } from '../../redux/reducers/home'

import Dropdown from '../../components/atoms/dropdown/dropdown'

import iconArrowRight from '../../assets/images/icon-arrow-right-circle-white.svg'
import './home.scss'


const HomeAside = ( { tool } ) => {
    const dispatch = useDispatch()
    const homeReducer = useSelector( state => state.home )
    const apps = homeReducer.apps
    const selected = homeReducer.selected

    const handleDropdownSelectedTool = ( data ) => {
        dispatch( appSelected( data ) )
    }

    const handleButtonClick = () => {
        tool( selected )
    }

    return (
        <section className='home-aside'>
            <h2 className='home-aside__title'>Welcome</h2>
            <Dropdown
                list={apps}
                selection={selected}
                setSelectedOpt={handleDropdownSelectedTool}
            />
            <Link
                to={selected ? `/tool/${selected.toLowerCase()}` : null}
                className={`home-aside__button ${!selected ? 'disabled' : ''}`}
                onClick={handleButtonClick}
            >
                <span className='home-aside__button__text'>Let&apos;s do it!</span>
                <img
                    src={iconArrowRight}
                    alt='Let&apos;s do it!'
                    className='home-aside__button__icon'
                />
            </Link>
        </section>
    )
}

export default HomeAside