import FormClient from './components/FormClient'
import Title from '@/module/shared/components/Title'
import ListClients from './components/ListClients'


export const revalidate = 30
export default async function ClientsPage() {

    return (<>
        <Title>Clients</Title>
        <FormClient />
        <ListClients />
    </>)
}

