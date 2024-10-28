import styles from "./styles.module.css"
import { ButtonHTMLAttributes } from "react"

const Button = ({ children, styleType = 'default', ...props }: ButtonProps) =>
    <button {...props} className={`${styles.button} ${styleType}`} >{children}</button>

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { styleType?: 'secondary' | 'default' }

export default Button