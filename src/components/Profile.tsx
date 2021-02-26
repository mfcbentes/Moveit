import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/mfcbentes.png" alt="Manoel Fernando C. Bentes" />
            <div>
                <strong>Manoel Fernando C. Bentes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}