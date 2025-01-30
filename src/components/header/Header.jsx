import styles from "./header.module.css"

function Header() {

    return (
        <header className={styles.header}>
                <h2 className={`${styles.hero} ${styles.glitch} ${styles.layers}`} data-text='MØRKE SIDE AF AI'><span>MØRKE SIDE AF AI</span></h2>
        </header>
    )
}

export default Header