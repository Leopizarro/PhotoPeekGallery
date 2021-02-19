import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGridCG = ({ setSelectedImg }) => {
    const { docs } = useFirestore('imagesCG');
    console.log(docs);

    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <motion.div className='img-wrap br3 ma2 dib grow bw2 shadow-5 pointer' key={doc.id}
                  layout
                  whileHover={{ opacity:1 }}
                  onClick= {() => setSelectedImg(doc.url)}>
                    <motion.img className='kappocha' src={doc.url} alt='imagen-desde-bdd'
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }} />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGridCG;