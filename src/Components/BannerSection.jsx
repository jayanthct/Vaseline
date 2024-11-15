import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bannerimg from '../assets/Images/bannerimg.png';

function BannerSection() {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.4,  // Adjust threshold as needed
        triggerOnce: true // Animation triggers only once
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    // Variants for animation
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } }
    };

    return (
        <div
            ref={ref}
            className="banner w-full h-screen flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerimg})` }}
        >
            <motion.h1
                className="font-lexend font-black text-[white] text-center mt-[200px] text-[16vw] z-1"
                variants={textVariants}
                initial="hidden"
                animate={controls}
            >
                Vaseline®
            </motion.h1>
        </div>
    );
}

export default BannerSection;
