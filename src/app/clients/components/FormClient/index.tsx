'use client'

import ClientsGateway from "@/module/clients/gateway/ClientsGateway"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"
import styles from './styles.module.css'
import Button from "../Button"

export default function FormClient() {
    const gateway = ClientsGateway()
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(e.target as HTMLFormElement)
        const name = formData.get('name') as string
        const contact = formData.get('contact') as string

        await gateway.createClient({ name, contact })
        form.reset()
        router.refresh()
    }

    return (<>
        <div className={styles.wrapper} >

            <h2>Create client</h2>

            <form onSubmit={handleSubmit} className={styles.form} >
                <input className={styles.input} type="text" name="name" id="name" autoFocus />
                <input className={styles.input} type="number" name="contact" id="contact" />
                <Button type="submit" >Criar</Button>

            </form>
        </div>
    </>)
}