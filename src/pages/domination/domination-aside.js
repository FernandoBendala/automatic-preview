import { toPng } from 'html-to-image'
import download from 'downloadjs'
import useConverter from '../../utils/converters'

import { useDispatch, useSelector } from 'react-redux'
import { setAdsImages, setBackgroundColor, setBrandImage, setButtonColor, setButtonText, setButtonTextColor, setTitleText, setTitleColor } from '../../redux/reducers/domination'

import AsideSection from '../../components/molecules/aside-section/aside-section'
import ColorPicker from '../../components/atoms/color-picker/color-picker'
import Input from '../../components/atoms/input/input'

import iconBackgroundColor from '../../assets/images/icon-background.svg'
import iconBrandLogo from '../../assets/images/icon-brands.svg'
import iconTitle from '../../assets/images/icon-title.svg'
import iconAdsImages from '../../assets/images/icon-images.svg'
import iconButton from '../../assets/images/icon-button.svg'
import iconArrowDown from '../../assets/images/icon-arrow-down-circle-white.svg'
import ImageUpload from '../../components/atoms/image-upload/image-upload'
import ImagesUpload from '../../components/molecules/images-upload/images-upload'
import Button from '../../components/atoms/button/button'

const DominationAside = ( { isLoading } ) => {
    const dispatch = useDispatch()
    const dominationReducer = useSelector( state => state.domination )
    const adsImages = dominationReducer.adsImages
    const backgroundColor = dominationReducer.backgroundColor
    const brandImage = dominationReducer.brandImage
    const buttonColor = dominationReducer.buttonColor
    const buttonText = dominationReducer.buttonText
    const buttonTextColor = dominationReducer.buttonTextColor
    const titleColor = dominationReducer.titleColor
    const titleText = dominationReducer.titleText

    const handleAdsImages = ( data ) => dispatch( setAdsImages( data ) )
    const handleBackgroundColor = ( data ) => dispatch( setBackgroundColor( data ) )
    const handleBrandImage = ( data ) => dispatch( setBrandImage( data ) )
    const handleButtonColor = ( data ) => dispatch( setButtonColor( data ) )
    const handleButtonText = ( data ) => dispatch( setButtonText( data ) )
    const handleButtonTextColor = ( data ) => dispatch( setButtonTextColor( data ) )
    const handleTitleText = ( data ) => dispatch( setTitleText( data ) )
    const handleTitleColor = ( data ) => dispatch( setTitleColor( data ) )

    const handleExportClick = async () => {
        isLoading( true )

        const mobile = document.getElementById( 'mobile' )
        const sliderNextButton = document.querySelector( 'button[aria-label="next"]' )
        const sliderPrevButton = document.querySelector( 'button[aria-label="previous"]' )
        let counter = 0

        while ( counter < adsImages.length ) {
            if ( sliderPrevButton.disabled === false )
                setTimeout( () => sliderPrevButton.click(), 400 )

            counter++
        }

        for ( let i = 0; i < adsImages.length; i++ ) {
            const image = adsImages[i]
            const name = useConverter.removeSpecialChars( image ).slice( -12 )
            const indexNumber = useConverter.addCero( i )

            // Wait to slide transition before take the screenshot
            await new Promise( ( resolve ) => setTimeout( resolve, 800 ) )

            // Take screenshot and download the image
            const dataUrl = await toPng( mobile )
            download( dataUrl, `${indexNumber}-${name}.png` )

            // Click slider and show the next image
            sliderNextButton.click()
        }

        isLoading( false )
    }

    return (
        <>
            {/* Background color */}
            <AsideSection icon={iconBackgroundColor} name='Background color'>
                <ColorPicker
                    initialRgb={backgroundColor}
                    onChange={handleBackgroundColor}
                />
            </AsideSection>

            {/* Brand logo */}
            <AsideSection icon={iconBrandLogo} name='Brand logo'>
                <ImageUpload
                    id='brandLogo'
                    initialImage={brandImage}
                    onChange={handleBrandImage}
                />
            </AsideSection>

            {/* Title */}
            <AsideSection icon={iconTitle} name='Title'>
                <section>
                    <Input
                        id='title'
                        initialValue={titleText}
                        onChange={handleTitleText}
                    />
                    <ColorPicker
                        initialRgb={titleColor}
                        onChange={handleTitleColor}
                    />
                </section>
            </AsideSection>

            {/* Ads images */}
            <AsideSection icon={iconAdsImages} name='Ads images'>
                <ImagesUpload
                    id='adsImages'
                    initialImage={adsImages}
                    onChange={handleAdsImages}
                />
            </AsideSection>

            {/* Button */}
            <AsideSection icon={iconButton} name='Button'>
                <h4 className='domination__subtitle'>Background color</h4>
                <ColorPicker
                    initialRgb={buttonColor}
                    onChange={handleButtonColor}
                />

                <h4 className='domination__subtitle'>Text</h4>
                <section>
                    <Input
                        id='title'
                        initialValue={buttonText}
                        onChange={handleButtonText}
                    />
                    <ColorPicker
                        initialRgb={buttonTextColor}
                        onChange={handleButtonTextColor}
                    />
                </section>
            </AsideSection>

            {/* Export */}
            <div className='domination__aside-section__last'>
                <Button
                    icon={iconArrowDown}
                    text='Export'
                    disabled={true}
                    onClick={handleExportClick}
                />
            </div>
        </>
    )
}

export default DominationAside