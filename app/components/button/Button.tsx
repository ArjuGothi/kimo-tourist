import styles from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    buttonType?: 'solid' | 'regular';
}

export default function Button({
    title,
    className,
    buttonType = 'solid',
    ...rest
}: ButtonProps) {
    return (
        <button className={`${styles['button']} ${className} ${buttonType === 'regular' ? styles['button-regular'] : ''}`} {...rest} >{title}</button>
    )
}
