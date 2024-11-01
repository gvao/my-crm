import { InputHTMLAttributes, useId } from "react"
import styles from './styles.module.css'

const Input = ({ label, className, ...props }: InputProps) => {
    const id = useId()
    return (
        <div className={styles.wrapper}>
            {label && <label htmlFor={id}>{label}</label>}
            <input className={styles.input_style} {...props} />
        </div>
    )
}

type InputProps = { label?: string } & InputHTMLAttributes<HTMLInputElement>

export default Input