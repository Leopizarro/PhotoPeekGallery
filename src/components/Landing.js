import React from 'react';
import {
    Link
  } from "react-router-dom";
import { motion } from 'framer-motion';

const Landing = () =>{

    return (
        <div>

            <Link to="/spraypaint">
             <motion.div class="split left grow br2 pointer"
               layout
               whileHover={{ opacity: 1 }}>
                <div class="centered">
                    <h2 className='bordertext'>Spraypaint Gallery</h2>
                </div>
                </motion.div>
            </Link>
            <Link to='/photos'>
                <motion.div class="split right grow br2 pointer"
                    layout
                    whileHover={{ opacity: 1 }}>
                <div class="centered">
                    <h2 className='bordertext'>Cellphone Photos Gallery</h2>
                </div>
                </motion.div> 
            </Link>
        </div>
    )
}

export default Landing;