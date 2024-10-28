import { ChildrenProps } from "../../types/ChildrenProps"
import styles from './styles.module.css'

const Title = ({ children }: ChildrenProps) => 
    <h1 className={styles.title}>{children}</h1>

export default Title