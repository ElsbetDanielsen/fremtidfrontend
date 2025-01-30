import { useEffect, useRef, useState } from 'react';
import styles from './tørdu.module.css';

const phrases = [
  "Nej",
  "Er du sikker?",
  "Er du bange?",
  "Kom nu!",
  "Tryk ja",
];

function TørDu({ id, onNextSection }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [animateJa, setAnimateJa] = useState(false);
  const [animateNej, setAnimateNej] = useState(false);
  const [hideSection, setHideSection] = useState(false); // State to hide the section
  const yesTextSize = noCount * 20 + 55;

  // IntersectionObserver to detect if the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setAnimateJa(false);
            setAnimateNej(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger animations when the section becomes visible
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setAnimateJa(true), 200); // Delay Ja animation
      setTimeout(() => setAnimateNej(true), 700); // Delay Nej animation
    }
  }, [isVisible]);

  // Scroll-lock logic to prevent scrolling away from the section
  useEffect(() => {
    const handleScroll = (e) => {
      if (!yesPressed && isVisible && sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition < sectionTop) {
          window.scrollTo(0, sectionTop); // Prevent scrolling upwards
        } else if (scrollPosition + windowHeight > sectionBottom) {
          window.scrollTo(0, sectionBottom - windowHeight); // Prevent scrolling downwards
        }
      }
    };

    if (!yesPressed && isVisible) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, [yesPressed, isVisible]);

  // Increment "No" counter
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  // Handle "Ja" button click
  const handleYesClick = () => {
    setYesPressed(true); // Allow the next section logic to trigger

    // Trigger the logic to hide the current section and show the next section
    setTimeout(() => {
      setHideSection(true); // Hide the current section
      if (onNextSection) {
        onNextSection(); // Call the function to show the next section
      }
    }, 200); // Delay to match any necessary animations
  };

  // Display the next phrase for "No"
  const getNoText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return !hideSection ? ( // Conditionally render section based on hideSection state
    <section id={id} className={styles.gåvidere} ref={sectionRef}>
      <div className={`${styles.content} ${isVisible ? styles.show : ''} ${yesPressed ? styles.hide : ''}`}>
        {yesPressed ? (
          <>
            {/* Empty div for transition logic */}
          </>
        ) : (
          <>
            <h2 className={`${styles.hero} ${styles.glitch} ${styles.layers}`} data-text='TØR DU GÅ VIDERE?'>
              <span>TØR DU GÅ VIDERE?</span>
            </h2>
            <div className={styles.svar}>
              <p
                className={`${styles.ja} ${animateJa ? styles.zoomJa : ''}`}
                style={{ fontSize: yesTextSize }}
                onClick={handleYesClick} // Handle Ja click
              >
                Ja
              </p>
              <p
                className={`${styles.nej} ${animateNej ? styles.zoomNej : ''}`}
                onClick={handleNoClick}
              >
                {getNoText()}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  ) : null; // Return null when the section is hidden
}

export default TørDu;
