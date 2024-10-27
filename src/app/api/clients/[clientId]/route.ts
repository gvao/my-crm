import DeleteClient from "@/core/application/useCases/DeleteClient";
import Dependencies from "@/core/infra/Dependencies";
import { NextRequest, NextResponse } from "next/server";

const deleteClient = Dependencies.getDependency<DeleteClient>('deleteClient')!

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ clientId: string }> }) {
    const { clientId } = (await (params))
    await deleteClient.execute(clientId)
    return NextResponse.json(
        {
            message: `client delete successful ${clientId}`
        }, { status: 201 }
    )
}