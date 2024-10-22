import CreateClient from "@/core/application/useCases/CreateClient";
import GetClients from "@/core/application/useCases/GetClients";
import Client from "@/core/Domain/Client";
import ClientRepositoryInMemory from "@/core/infra/repositories/ClientRepositoryInMemory";
import { NextRequest, NextResponse } from "next/server";

const clientRepository = new ClientRepositoryInMemory()
const createClient = new CreateClient(clientRepository)
const getClients = new GetClients(clientRepository)

const fakeClients = [
    Client.create({ name: 'Yuri', contact: 21999999999 }),
    Client.create({ name: 'Alice', contact: 21999999999 }),
    Client.create({ name: 'Erica', contact: 21999999999 }),
];

(async () => {
    for (const fakeClient of fakeClients) {
        await clientRepository.save(fakeClient)
    }
})()

export async function GET() {
    const clients = await getClients.execute()
    return NextResponse.json(clients, {})
}

export async function POST(request: NextRequest) {
    const { name, contact } = await request.json()
    createClient.execute({ name, contact })
    return NextResponse.json({ message: `client saved successful ` }, { status: 201 })
}