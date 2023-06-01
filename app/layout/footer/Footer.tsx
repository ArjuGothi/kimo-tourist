import styles from './Footer.module.scss';
import Logo from '../header/logo';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Logo />
        </div>
    )
}
