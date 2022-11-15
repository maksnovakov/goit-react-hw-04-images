import { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const Modal = ({lgImage,tags,closeModal})=>{
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };
 
    return (
      <div className={style.Overlay} onClick={handleBackdropClick}>
        <div className={style.Modal}>
          <img src={lgImage} alt={tags} />
        </div>
      </div>
    );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  lgImage: PropTypes.string.isRequired,
  tags :PropTypes.string.isRequired,
  
}
export default Modal;


  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  // handleKeyDown = element => {
  //   if (element.code === 'Escape') {
  //     this.props.closeModal();
  //   }
  // };

  // handleBackdropClick = event => {
  //   if (event.currentTarget === event.target) {
  //     this.props.closeModal();
  //   }
  // };
