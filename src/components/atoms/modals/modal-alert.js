import Button from '../button/button'

import iconArrowDown from '../../../assets/images/icon-arrow-left-circle-white.svg'
import iconCancel from '../../../assets/images/icon-cancel.svg'
import './modals.scss'

const ModalAlert = ( { onClose } ) => {
    return (
        <div className="modal__container">
            <section className="modal">
                <h3 className="modal__title">Are you sure?</h3>
                <p className="modal__text">If you go back, you will lose your work!</p>
                <div className="modal__buttons">
                    <Button
                        icon={iconCancel}
                        text='Cancel'
                        disabled={true}
                        onClick={() => onClose( false )}
                        type='secondary'
                    />
                    <Button
                        icon={iconArrowDown}
                        text={`I'm sure`}
                        disabled={true}
                        onClick={() => onClose( true )}
                    />
                </div>
            </section>
        </div>
    )
}

export default ModalAlert