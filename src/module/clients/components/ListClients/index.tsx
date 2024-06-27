'use client'

import Link from "@/module/shared/components/Link"
import { useClientContext } from "../../context"
import styles from "./styles.module.css"

export default function ListClients() {
    const { clients } = useClientContext()
    return (
        <ul className={styles.list} >
            {clients.map(client => <>
                <Link href={`/clients/${client.id}`}>
                    <li key={client.id} className={styles.list__item}>
                        <span>{client.name}</span>
                        <span>{client.contact}</span>
                    </li>
                </Link>
            </>)}
        </ul>
    )
}