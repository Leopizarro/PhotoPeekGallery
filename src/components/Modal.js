import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({setSelectedImg, selectedImg}) => {

    return (
        <motion.div className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={()=> setSelectedImg(null)}>
            <motion.img src={selectedImg} alt='vista personal pic'
              initial={{ y: '-100vh' }}
              animate= {{ y: 0 }} />
        </motion.div>
    )
}

export default Modal;