import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'

import styles from "./ai.module.css"

function Ai({ id }) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 20% of the component is visible
    triggerOnce: true, // Only trigger the animation once
  });


  const sectionRef = useRef(null) // Reference to the section element
    const [isVisible, setIsVisible] = useState(false) // State to track visibility

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Show the content when in view
                        observer.unobserve(entry.target) // Stop observing once it's visible
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 30% of the element is visible
                rootMargin: "0px 0px -100px 0px", // Start observing a bit earlier
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])


  return (
    <section id={id} className={styles.aiContainer}>
        <motion.div
            className={styles.hand}
            ref={ref}
            initial={{ opacity: 0, scale: 0.5, y: 50, rotate: -50 }}  // Starting state
            animate={inView ? { opacity: 1, scale: 1.0, y: 0, rotate: 0 } : {}}  // Animate to this state when in view
            transition={{ duration: 0.5 }}  // Animation duration
        >
        </motion.div>
        <div className={`${styles.læsHvordan} ${isVisible ? styles.show : ''}`} ref={sectionRef}>
            <h2>Læs Mere Om Hvordan DU Bekæmper</h2>
            <a href="https://drive.google.com/file/d/1-S7A-qgEJ4fUk-1-ivTxKnUqjcAEPZuD/view?usp=sharing" target="_blank">AI</a>
        </div>
    </section>
  );
};

export default Ai