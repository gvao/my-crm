import { ChildrenProps } from "@/module/shared/types/ChildrenProps"
import styles from "./styles.module.css"

const Popup = ({ children, show = false }: { show: boolean } & ChildrenProps) => {

    if (!show) return
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
export default Popup