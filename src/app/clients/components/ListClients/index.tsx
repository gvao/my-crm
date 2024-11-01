
import Link from "@/module/shared/components/Link"
import styles from "./styles.module.css"
import ClientsGateway from "../../../../module/clients/gateway/ClientsGateway"

const clientsGateway = ClientsGateway()

export default async function ListClients() {
    try {
        const clients = await clientsGateway.getClients()

        return (
            <ul className={styles.list} >
                {clients.map(client => <>
                    <li className={styles.list__item} key={client.id}>
                        <Link href={`/clients/${client.id}`} >
                            <span>{client.name}</span>
                            <span>{client.contact}</span>
                        </Link>
                    </li>
                </>)}
            </ul>
        )

    } catch (err) {
        console.error(err)
        return <p>Error ao carregar clientes</p>
    }
}