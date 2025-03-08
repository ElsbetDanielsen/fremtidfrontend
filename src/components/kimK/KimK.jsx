import { useInView } from 'react-intersection-observer'
import { useState } from 'react';

import styles from "./kimk.module.css"

function KimK({ id }) {
    const [isFlipped, setIsFlipped] = useState(false);
      
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
      });

    return (
        <section id={id} className={`${styles.kimK} ${inView ? styles.animate : ''}`} ref={ref}>
            <div className={styles.kimKContent}>
                <h2 className={`${styles.h2} ${inView ? styles.h2Animate : ''}`}></h2>
                <p className={styles.p}>Pas på hvad du vælger at tro på, i dag er det nemmere end nogensinde at svindle med identitet</p>
            </div>

            <div className={styles.container}>
                <div className={`${styles.imageContainer} ${isFlipped ? styles.flipped : ''}`}>
                    {isFlipped ? (
                        <img
                            src="./assets/img/kimkpernille.png"
                            className={styles.pernille}
                            alt="Second Image"
                        />
                    ) : (
                        <img
                            src="./assets/img/kimk.png"
                            className={styles.kim}
                            alt="First Image"
                        />
                    )}
                </div>
                <button onClick={handleClick} className={styles.flipButton}>Flip</button>
            </div>
        </section>
    )
}

export default KimK