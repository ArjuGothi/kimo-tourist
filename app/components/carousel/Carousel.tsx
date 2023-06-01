import { SVGProps } from 'react';
import styles from './Carousel.module.scss'

interface CarouselPropsType {
    wrapperClass?: string;
    src: string;
    alt: string;
}

export default function Carousel({
    wrapperClass,
    src,
    alt
}: CarouselPropsType) {
    return (
        <div className={`${styles.carousel} ${wrapperClass || ''}`}>
            <img src={src} alt={alt} />
        </div>
    )
}
