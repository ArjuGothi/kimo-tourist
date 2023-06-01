'use client';

import React from 'react';
import styles from './HighlightActivity.module.scss'
import { request } from '@/app/services/request';

export default function HighlightActivityComponent({ activity }: any) {
    const [details, setDetails] = React.useState<any>({});

    React.useEffect(() => {
        if (!Object.keys(details).length) {
            request(`/v1/activities/${activity}`, { method: 'get' }).then((res: any) => {
                setDetails(res)
            }).catch((err) => {
                console.error(err?.message || err)
            })
        }
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles['highlight-title']}>{details?.name}</div>
            <div className={styles['highlight-img-container']}>
                <img className={styles['highlight-img']} src={details?.image} />
            </div>
            <div className={styles['highlight-desc']}>{details?.description}</div>
            <div className={styles['highlight-details']}>
                <div className={styles['tabs-container']}>
                    <div className={`${styles['tabs-name']} ${styles['selected']}`}>Activities</div>
                </div>
                <div className={styles['tab-details']}>
                    {details?.activities?.map((data: any, index: number) => (
                        <div className={styles['activity-wrapper']} key={index}>
                            <img src='/arrow_forward.png' /> {data.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
