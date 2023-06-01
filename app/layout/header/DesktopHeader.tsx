import Button from '@/app/components/button/Button'
import styles from './Header.module.scss'
import Logo from './logo'

export default function DesktopHeader() {
    return (
        <div className={styles.header}>
            <div className={styles['header-right-panel']}>
                <div className={styles['brand-logo']}>
                    <Logo />
                </div>
                <div className={styles['navigations']}>
                    <div className={styles['nav-item']}>Home</div>
                    <div className={styles['nav-item']}>Surfing</div>
                    <div className={styles['nav-item']}>Hula</div>
                    <div className={styles['nav-item']}>Vulcano</div>
                </div>
            </div>
            <div className={styles['tools']}>
                <Button title="Book a trip" />
            </div>
        </div>
    )
}
