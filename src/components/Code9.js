import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { useState } from 'react';
import closeModal from '../images/close.svg';
import myImage9 from '../images//IMG_2309.jpg';

//<motion.div
//className="container"
//initial={{ scale: 0 }}
// animate={{ rotate: 180, scale: 1 }}
//transition={{
//type: 'spring',
//stiffness: 260,
//damping: 20,
//}}
///>

const Code9 = ({ technology, title, image, color, id }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? '10vw' : '-10vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement('#root');

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showCert, setShowCert] = useState(false);
  const handleClick = () => {
    setShowCert(!showCert);
  };

  const [showImage, setShowImage] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div
        style={{ backgroundColor: '#ff8c00' }}
        className="certCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">
            <em>{technology}</em>
          </p>

          <h3 className="codeCademyCerts">Deploying a Website Course</h3>
          <span className="viewCerts">View Certifications &#8594;</span>
        </div>

        <div className="certContainer col-6 d-flex align-items-center justify-content-center">
          <img src={myImage9} alt="React.js" />
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: ' black',
            color: '#383838',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            width: '800px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '999',
          },
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="certDescription"></p>
      </Modal>
    </motion.div>
  );
};
export default Code9;
