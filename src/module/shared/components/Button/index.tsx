import { ButtonHTMLAttributes } from "react"
import styles from "./styles.module.css"

const Button = ({ children, styleType = 'default', ...props }: ButtonProps) =>
    <button {...props} className={`${styles.button} ${styleType}`} >{children}</button>

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { styleType?: 'secondary' | 'default' }

export default Button