'use client'

import styles from './page.module.scss'
import Carousel from './components/carousel/Carousel'
import Card from './components/card/Card'
import Button from './components/button/Button'
import React from 'react'
import { request } from './services/request'
import Link from 'next/link'

export default function Home() {
  const [highlights, setHighlights] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    if (!highlights.length) {
      request('/v1/highlights', { method: 'get' }).then((res: any) => {
        setHighlights(res)
      }).catch((err) => {
        console.error(err?.message || err)
      })
    }
  });

  React.useEffect(() => {
    if (!categories.length) {
      request('/v1/categories', { method: 'get' }).then((res: any) => {
        setCategories(res)
      }).catch((err) => {
        console.error(err?.message || err)
      })
    }
  });

  return (
    <main className={styles.main}>
      <div className={styles['banner-container']}>
        <Carousel
          wrapperClass={styles['home-image-banner']}
          src='./Hawaii.png'
          alt='Home page banner image'
        />
        <span className={styles['banner-text']}>
          <div>Welcome</div>
          <div>to Hawaii</div>
        </span>
      </div>
      <section className={styles['home-section']}>
        <div className={styles['section-title']}>Highlights</div>
        <div className={styles['section-content']}>
          <div className={styles['highlight-container']}>
            {highlights.map((data: any, index) => (
              <Card key={index} className={styles['highlight-card']}>
                <img className={styles['hightlight-card-image']} src={data.image} alt={data.title} />
                <div className={styles['hightlight-details']}>
                  <div className={styles['hightlight-title']}>{data.title}</div>
                  <div className={styles['hightlight-details']}>{data.description}</div>
                </div>
                <div className={styles['hightlight-card-bottom']}>
                  <span>
                    <Link href={`/highlight-activity/${data.title}`}>
                      <img src='/arrow_forward.png' />
                    </Link>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <div className={styles['category-box']}>
        <section className={styles['home-section']}>
          <div className={styles['section-title']}>Categories</div>
          <div className={styles['section-content']}>
            <div className={styles['category-container']}>
              <div className={styles['category-list']}>
                {categories.map((data: any, index) => (
                  <Card
                    key={index}
                    className={styles['category-card']}
                  >
                    <div className={styles['category-list-title']}>{data.name}</div>
                    <div className={styles['category-list-arrow']}><img src='/arrow_forward.png' /></div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles['home-section']}>
          <div className={styles['section-title']}>Travel Guide</div>
          <div className={styles['section-content']}>
            <div className={styles['travel-container']}>
              <Card className={styles['travel-card']}>
                <div className={styles['travel-card-details']}>
                  <div className={styles['travel-card-name']}>Joe Saldana</div>
                  <div className={styles['travel-card-time']}>Guide since 2012</div>
                  <Button buttonType='regular' className={styles['travel-card-button']} title='Contact' />
                </div>
                <div className={styles['travel-card-image']}>
                  <img src="/user-avatar.png" alt='User avatar' />
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
