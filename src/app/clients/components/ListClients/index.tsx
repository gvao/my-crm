
import Link from "@/module/shared/components/Link"
import styles from "./styles.module.css"
import ClientsGateway from "../../../../module/clients/gateway/ClientsGateway"

export default async function ListClients() {
    const clients = await ClientsGateway().getClients()

    return (
        <ul className={styles.list} >
            {clients.map(client => <>
                <Link href={`/clients/${client.id}`} key={client.id}>
                    <li  className={styles.list__item}>
                        <span>{client.name}</span>
                        <span>{client.contact}</span>
                    </li>
                </Link>
            </>)}
        </ul>
    )
}