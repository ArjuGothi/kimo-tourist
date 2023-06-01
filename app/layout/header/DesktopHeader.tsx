import Button from '@/app/components/button/Button'
import styles from './Header.module.scss'
import Logo from './logo'
import Link from 'next/link'

export default function DesktopHeader() {
    return (
        <div className={styles.header}>
            <div className={styles['header-right-panel']}>
                <div className={styles['brand-logo']}>
                    <Link href="/"><Logo /></Link>
                </div>
                <div className={styles['navigations']}>
                    <div className={styles['nav-item']}><Link href="/">Home</Link></div>
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
