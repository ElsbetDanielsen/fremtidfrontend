import styles from "./sections.module.css"

function Sections({ id }) {

    return (
        <section id={id} className={styles.sections}>
                <div className={styles.picContainer}>
                    <img className={styles.img} src="/assets/img/deepfake1.jpg" />
                    <div className={styles.content}>
                        <a className={styles.title} href="https://drive.google.com/file/d/1-S7A-qgEJ4fUk-1-ivTxKnUqjcAEPZuD/view?usp=sharing" target="_blank">Deepfake</a>
                        <p className={styles.text}>Deepfakes er en kraftfuld AI-teknologi, der skaber realistiske, men falske medier, og udgør både en fascinerende mulighed og alvorlig risiko.</p>
                    </div>
                </div>
                <div className={styles.picContainer}>
                    <img className={styles.img} src="/assets/img/aifraud1.jpg"/>
                    <div className={styles.content}>
                        <a className={styles.title} href="https://drive.google.com/file/d/1-S7A-qgEJ4fUk-1-ivTxKnUqjcAEPZuD/view?usp=sharing" target="_blank">AI Svindel</a>
                        <p className={styles.text}>AI-svindel er en ny og voksende trussel, hvor kriminelle bruger avanceret kunstig intelligens til at efterligne stemmer og bedrage deres ofre.</p>
                    </div>
                </div>
                <div className={styles.picContainer}>
                    <img className={styles.img} src="/assets/img/villain2.jpg" />
                    <div className={styles.content}>
                        <a className={styles.title} href="https://drive.google.com/file/d/1-S7A-qgEJ4fUk-1-ivTxKnUqjcAEPZuD/view?usp=sharing" target="_blank">Digital Skurk</a>
                        <p className={styles.text}>Digital kriminalitet omfatter svindel som phishing og ransomware, hvilket kan have livstruende konsekvenser, især i sundhedsvæsenet.</p>
                    </div>
                </div>
                <div className={styles.picContainer}>
                    <img className={styles.img} src="/assets/img/popo4.jpg" />
                    <div className={styles.content}>
                        <a className={styles.title} href="https://drive.google.com/file/d/1-S7A-qgEJ4fUk-1-ivTxKnUqjcAEPZuD/view?usp=sharing" target="_blank">Ai Bekæmper Kriminalitet</a>
                        <p className={styles.text}>AI hjælper politiet med at bekæmpe kriminalitet med diverse nyopfundne teknologier.</p>
                    </div>
                </div>
        </section>
    )
}

export default Sections