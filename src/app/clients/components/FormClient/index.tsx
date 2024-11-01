'use client'

import ClientsGateway from "@/module/clients/gateway/ClientsGateway"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import styles from './styles.module.css'
import Button from "../../../../module/shared/components/Button"
import Input from "@/module/shared/components/Input"

export default function FormClient() {
    const gateway = ClientsGateway()
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const contact = formData.get('contact') as string

        await gateway.createClient({ name, contact })
        form.reset()
        router.refresh()
    }

    return (<>
        <div className={styles.wrapper} >

            <h2>Novo cliente</h2>

            <form onSubmit={handleSubmit} className={styles.form} >
                <Input name="name" id="name" autoFocus placeholder="Nome do cliente" label="Nome cliente" />
                <Input placeholder="(21) 99999-9999" label="Seu contato" type="number" name="contact" id="contact" />
                <Button type="submit" >Criar</Button>
            </form>
        </div>
    </>)
}

