import styles from './Card.module.scss'

export default function Card({ children, className, ...rest }: any) {
    return (
        <div className={`${styles.card} ${className}`} {...rest}>{children}</div>
    )
}
