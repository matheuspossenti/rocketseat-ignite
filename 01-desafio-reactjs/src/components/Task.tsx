import styles from './Task.module.css'

export function Task(){
    return(
        <article className={styles.task}>
            <div className={styles.content}>
                <input type="checkbox" />
            </div>
        </article>
    )
}