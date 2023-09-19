import { useSelector } from 'react-redux'

import ImageSlider from '../../../components/atoms/image-slider/image-slider'

import './domination-template.scss'

const DominationTemplate = (
    { backgroundColor, brandLogo, titleText, titleColor, adsImages, buttonColor, buttonText, buttonTextColor }
) => {
    const currentSlide = useSelector( state => state.domination.currentSlide )

    const setRgba = ( value ) => {
        const { r, g, b, a } = value ?? { r: 255, g: 255, b: 255, a: 1 }
        return `rgba(${r},${g},${b},${a})`
    }

    return (
        <div
            className='domination-template'
            style={{
                backgroundColor: setRgba( backgroundColor ),
            }}
        >
            {brandLogo &&
                <img
                    src={brandLogo}
                    alt='brand logo'
                    className='domination-template__brand-logo'
                />
            }
            {titleText &&
                <p
                    className='domination-template__title'
                    style={{ color: setRgba( titleColor ) }}
                >{titleText}</p>
            }
            {adsImages &&
                <ImageSlider images={adsImages} />
            }
            {buttonText &&
                <button
                    className='domination-template__button'
                    style={{
                        color: setRgba( buttonTextColor ),
                        backgroundColor: setRgba( buttonColor ),
                    }}
                >{buttonText}</button>
            }
            {adsImages &&
                <div className='domination-template__slides'>
                    {adsImages.map( ( image, index ) => {
                        return (
                            <span
                                key={image}
                                className='domination-template__slides__slide'
                                style={{ backgroundColor: index === currentSlide && setRgba( buttonColor ) }}
                            ></span>
                        )
                    } )}
                </div>
            }
        </div >
    )
}

export default DominationTemplate