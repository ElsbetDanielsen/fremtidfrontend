import styles from './footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <h3 className={styles.h3}>Information</h3>
                <p className={styles.infoText}>For at få mere at vide om AI og hvad det kan, så hop ind og læs mere i pdf'en. Ingen spoilers her.</p>
            </div>
            <button>
                <a href="https://drive.google.com/file/d/1-S7A-qgEJ4fUk-1-ivTxKnUqjcAEPZuD/view?usp=sharing" target="_blank">Download PDF</a>
            </button>
            <div className={styles.media}>
                <h3 className={styles.h3}>Social Media</h3>
                <a href="https://chatgpt.com/" target="_blank"><img className={styles.icons} src="./assets/icon/chatgpt.png" /></a>
                <a href="https://vello.ai/app" target="_blank"><img className={styles.icons} src="./assets/icon/vello.png" /></a>
                <a href="https://ai.google/gemini-ecosystem" target="_blank"><img className={`${styles.icons} ${styles.gemini}`} src="./assets/icon/gemini.png" /></a>
            </div>
        </footer>
    )
}

export default Footer