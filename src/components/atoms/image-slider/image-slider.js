import { useEffect } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSlide } from '../../../redux/reducers/domination'

import iconArrowLeft from '../../../assets/images/icon-arrow-left-circle-white.svg'
import iconArrowRight from '../../../assets/images/icon-arrow-right-circle-white.svg'

import './image-slider.scss'

const ImageSlider = ( { images } ) => {
    const dispatch = useDispatch()
    const currentSlide = useSelector( state => state.domination.currentSlide )

    useEffect( () => {
        dispatch( setCurrentSlide( 0 ) )
    }, [] )

    const handleClickBack = () => {
        const slide = currentSlide - 1
        dispatch( setCurrentSlide( slide ) )
    }

    const handleClickNext = () => {
        const slide = currentSlide + 1
        dispatch( setCurrentSlide( slide ) )
    }

    return (
        <CarouselProvider
            isIntrinsicHeight={true}
            totalSlides={images.length}
            className="image-slider"
        >
            <Slider className="image-slider__container">
                {images.map( ( image, index ) => (
                    <Slide
                        key={index}
                        index={index}
                        className="image-slider__slide"
                    >
                        <img
                            src={image}
                            alt={index}
                            className="image-slider__slide__image"
                        />
                    </Slide>
                ) )}
            </Slider>

            <ButtonBack
                onClick={handleClickBack}
                className="image-slider__button image-slider__button--back"
            >
                <img src={iconArrowLeft} alt="Back" />
            </ButtonBack>
            <ButtonNext
                className="image-slider__button image-slider__button--next"
                onClick={handleClickNext}
            >
                <img src={iconArrowRight} alt="Next" />
            </ButtonNext>
        </CarouselProvider>
    )
}
export default ImageSlider
