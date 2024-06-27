import NextLink from "next/link"
import { ChildrenProps } from "../../types/ChildrenProps"
import styles from "./styles.module.css"

export default function Link({ children, href, ...props }: Props) {
    return (
        <NextLink href={href} {...props} className={styles.wrap} >
            {children}
        </NextLink>
    )
}

type Props = ChildrenProps & { href: string }