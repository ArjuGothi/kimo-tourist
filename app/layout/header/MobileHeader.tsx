"use client"
import Button from '@/app/components/button/Button'
import styles from './Header.module.scss'
import Logo from './logo'
import React from 'react';

export default function MobileHeader() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div className={styles.mobileHeader}>
                <div className={styles['brand-logo']}>
                    <Logo />
                </div>
                <div>
                    <img src="./menu.png" onClick={() => setOpen(true)} />
                </div>
            </div>
            {open ? <div className={styles['drawer-mask']} /> : ''}
            <div className={`${styles['drawer']} ${open ? styles['drawer-open'] : styles['drawer-close']}`}>
                <div className={styles['drawer-tools']}>
                    <img src="./close.png" onClick={() => setOpen(false)} />
                </div>
                <div className={styles['navigations']}>
                    <div className={styles['nav-item']}>Home</div>
                    <div className={styles['nav-item']}>Surfing</div>
                    <div className={styles['nav-item']}>Hula</div>
                    <div className={styles['nav-item']}>Vulcano</div>
                    <Button title="Book a trip" />
                </div>
            </div>
        </>
    )
}
