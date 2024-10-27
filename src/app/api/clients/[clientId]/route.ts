import { NextRequest, NextResponse } from "next/server";
import Dependencies from "@/core/infra/Dependencies";
import DeleteClient from "@/core/application/useCases/DeleteClient";
import UpdateClient from "@/core/application/useCases/UpdateClient";
import GetClientById from "@/core/application/useCases/GetClientById";

const deleteClient = Dependencies.getDependency<DeleteClient>('deleteClient')!
const updateClient = Dependencies.getDependency<UpdateClient>('updateClient')!
const getClientById = Dependencies.getDependency<GetClientById>('getClientById')!

export async function GET(request: NextRequest, { params }: { params: Promise<{ clientId: string }> }) {
    const { clientId } = (await (params))
    const client = await getClientById.execute(clientId)
    return NextResponse.json({ client }, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ clientId: string }> }) {
    const { clientId } = (await (params))
    await deleteClient.execute(clientId)
    return NextResponse.json(
        {
            message: `client delete successful ${clientId}`
        }, { status: 201 }
    )
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ clientId: string }> }) {
    const { clientId } = (await (params))
    const { name, contact } = await request.json()
    await updateClient.execute({ id: clientId, name, contact })
    return NextResponse.json({
        message: 'client by id ${clientId} updated successfully'
    }, { status: 201 })
}

