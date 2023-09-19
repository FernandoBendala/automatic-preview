import { useState } from 'react'
import { useSelector } from 'react-redux'

import Mobile from '../../components/molecules/mobile/mobile'
import DominationTemplate from './template/domination-template'
import ModalInfo from '../../components/atoms/modals/modal-info'

import imageMobileHeader from '../../assets/images/mobile-header.svg'
import imageMobileFooter from '../../assets/images/mobile-footer.svg'
import iconInfo from '../../assets/images/icon-info.svg'

import './domination.scss'

const DominationMain = () => {
    const dominationReducer = useSelector( state => state.domination )
    const adsImages = dominationReducer.adsImages
    const backgroundColor = dominationReducer.backgroundColor
    const brandImage = dominationReducer.brandImage
    const buttonColor = dominationReducer.buttonColor
    const buttonText = dominationReducer.buttonText
    const buttonTextColor = dominationReducer.buttonTextColor
    const titleColor = dominationReducer.titleColor
    const titleText = dominationReducer.titleText

    const [showInfo, setShowInfo] = useState( false )

    const data = {
        title: `Here are some tips to ${<br />} make your work the best!`,
        list: [
            'The background color',
            'The brand logo',
            'The title',
            'The ads images',
            'The button',
        ]
    }

    return (
        <>
            <div
                onClick={() => setShowInfo( !showInfo )}
                className='domination__info'
            >
                <img
                    src={iconInfo}
                    alt='info'
                    className='domination__info__image'
                />
            </div>
            {showInfo && <ModalInfo content={data} show={setShowInfo} />}
            <Mobile
                mobileHeader={imageMobileHeader}
                mobileFooter={imageMobileFooter}
            >
                <DominationTemplate
                    backgroundColor={backgroundColor}
                    brandLogo={brandImage}
                    titleText={titleText}
                    titleColor={titleColor}
                    adsImages={adsImages}
                    buttonColor={buttonColor}
                    buttonText={buttonText}
                    buttonTextColor={buttonTextColor}
                />
            </Mobile>
        </>
    )
}

export default DominationMain