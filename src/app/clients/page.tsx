import FormClient from './components/FormClient'
import Title from '@/module/shared/components/Title'
import ListClients from './components/ListClients'

export default async function ClientsPage() {

    return (<>
        <Title>Clients</Title>
        <FormClient />
        <ListClients />
    </>)
}

