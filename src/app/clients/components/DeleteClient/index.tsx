'use client'

import ClientsGateway from "@/module/clients/gateway/ClientsGateway"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Popup from "../Popup"
import styles from "./styles.module.css"
import Button from "../Button"

export default function DeleteClient({ clientId }: { clientId: string }) {
    const [showPrompt, setShowPrompt] = useState<boolean>(false)
    const router = useRouter()

    return (
        <div className={styles.wrapper}>
            <h2>Excluir client</h2>
            <Button onClick={() => setShowPrompt(state => !state)}>Excluir cliente</Button>

            <Popup show={showPrompt} >
                <div className={styles.prompt}>
                    <p>Tem certeza que deseja excluir este cliente?</p>
                    <div className={styles.btns}>

                        <Button styleType="secondary" onClick={() => setShowPrompt(false)}>Cancelar</Button>
                        <Button styleType="secondary" onClick={async () => {
                            await ClientsGateway().deleteClient(clientId)
                            setShowPrompt(false)
                            router.refresh()
                        }}>
                            Confirmar
                        </Button>
                    </div>
                </div>
            </Popup>

        </div>
    )
}

