'use client'

import { ChangeEventHandler, FormEventHandler, useContext, useState } from "react"
import { useClientContext } from "../context"

export default function FormCreateClient() {
    const { createClient } = useClientContext()
    const [state, setState] = useState<State>({
        name: '',
        contact: '',
    })

    const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { id, value } }) => setState(state => ({ ...state, [id]: value }))
    const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        createClient(state)
    }
    return (
        <form onSubmit={onSubmit} >
            <h2>Criar novo cliente</h2>
            <input autoFocus type="text" name="name" id="name" value={state.name} onChange={onChange} />
            <input type="number" name="contact" id="contact" value={state.contact} onChange={onChange} />
            <input type="submit" value="Cadastrar" />
        </form>
    )
}

interface State {
    name: string,
    contact: string
}