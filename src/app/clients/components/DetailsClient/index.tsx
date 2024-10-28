import { redirect } from "next/navigation"
import ClientsGateway from "@/module/clients/gateway/ClientsGateway"
import styles from "./styles.module.css"

const DetailsClient = async ({ clientId }: { clientId: string }) => {
    const client = await ClientsGateway().getClientById(clientId)
    if (!client) redirect('/clients')
    return <>
        <div className={styles.wrapper}>
            <div className={styles.img_profile}>Photo</div>
            <h2>Nome: {client.name}</h2>
            <p>Contato: {client.contact}</p>
        </div>
    </>
}

export default DetailsClient