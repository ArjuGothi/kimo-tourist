'use client';

import React from 'react';
import styles from './HighlightActivity.module.scss'
import { request } from '@/app/services/request';

const activityDetailsMock = {
    "name": "Surfing",
    "description": "Hawaii is known for its world-famous surf spots and waves that attract surfers from all over the globe. Here are some of the best islands for surfing in Hawaii:",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing.jpg",
    "activities": [
        {
            "name": "North Shore, Oahu"
        }
    ]
}

export default function HighlightActivityComponent({ activity }: any) {
    const [details, setDetails] = React.useState(activityDetailsMock);

    React.useEffect(() => {
        request(`/v1/activities/${activity}`, { method: 'get' }).then((res) => {
            if (res.ok && res.status === 200) {
                console.log(res)
                // setDetails(res)
            }
        }).catch((err) => {
            alert(err?.message || err)
        })
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles['highlight-title']}>{details.name}</div>
            <div className={styles['highlight-img-container']}>
                <img className={styles['highlight-img']} src={details.image} />
            </div>
            <div className={styles['highlight-desc']}>{details.description}</div>
            <div className={styles['highlight-details']}>
                <div className={styles['tabs-container']}>
                    <div className={`${styles['tabs-name']} ${styles['selected']}`}>Activities</div>
                </div>
                <div className={styles['tab-details']}>
                    {details.activities.map((data, index) => (
                        <div className={styles['']} key={index}>{data.name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
