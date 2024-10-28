import Title from "@/module/shared/components/Title"
import DetailsClient from "../components/DetailsClient"
import DeleteClient from "../components/DeleteClient"

const ClientDetailsPage = async ({ params, ...props }: { params: Promise<{ clientId: string }> }) => {
    const { clientId } = await (params)
    return <>
        <Title>Detalhes</Title>
        <DetailsClient clientId={clientId} />
        <DeleteClient clientId={clientId} />
    </>
}


export default ClientDetailsPage