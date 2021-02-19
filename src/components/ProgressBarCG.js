import React, { useEffect } from 'react';
import useStorageCG from '../hooks/useStorageCG';
import { motion } from 'framer-motion';

const ProgressBarCG = ({file, setFile}) => {
    const {url, progress} = useStorageCG(file);
    
    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className='progress-bar' 
          initial= {{ width: 0}}
          animate= {{ width: progress + '%'}}>
        </motion.div>
    )
}

export default ProgressBarCG;