import React from 'react';
import { motion } from 'framer-motion';

export const Loading = () => {
  return (
    <div className='container_loading'>
        <motion.svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155.24 604.7"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
            }
            }}
        >
            <title>Farmalaax_loadding</title>
            <path id="capsula_verde" className="cls-1" d="M896.05,47.43H644.17A37.37,37.37,0,0,1,657,75.68v62.24h87.78a37.48,37.48,0,0,1,0,75H657v61A37.43,37.43,0,0,1,641.89,304H896.05a128.29,128.29,0,0,0,128.29-128.29h0A128.29,128.29,0,0,0,896.05,47.43Z" transform="translate(-24.8 -47.43)"/>
                <text className="cls-2" transform="translate(0 477.19)">Farma</text>
                <text className="cls-3" transform="translate(621.61 477.19)">LAAX</text>
            <path id="capsula_azuldark" className="cls-4" d="M582.14,273.82v-61H494.36a37.48,37.48,0,0,1,0-75h87.78V75.59A37.35,37.35,0,0,1,594.9,47.43H348.28A128.29,128.29,0,0,0,220,175.72h0A128.29,128.29,0,0,0,348.28,304H597.42A37.42,37.42,0,0,1,582.14,273.82Z" transform="translate(-24.8 -47.43)"/>
        </motion.svg>
    </div>
  )
}
