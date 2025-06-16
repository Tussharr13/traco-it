'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export const TextReveal = ({ text }: { text: string }) => {
    const container = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const translateY = useTransform(scrollYProgress, [0, 1], ["80%", "-80%"]);
    const scale = useTransform(scrollYProgress, [0, 1], ['80%', '100%']);
    const word = `${text}`
    return (
        <div>
            <div ref={container} className='bg-cover bg-clip-text font-onest font-light'
            >
                {
                    word.split("").map((letter, i) => {
                        return <motion.span
                            key={`${letter}-${i}`}
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.01 * i, ease: [0.33, 1, 0.68, 2] }}
                            viewport={{ once: true }}

                            className="text-white "
                            style={{ translateY, scale }}
                        >{letter}</motion.span>
                    })
                }
            </div>
        </div>
    )
}
