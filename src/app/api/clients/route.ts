import CreateClient from "@/core/application/useCases/CreateClient";
import GetClients from "@/core/application/useCases/GetClients";
import Dependencies from "@/core/infra/Dependencies";
import { NextRequest, NextResponse } from "next/server";

const getClients = Dependencies.getDependency<GetClients>('getClients')!
const createClient = Dependencies.getDependency<CreateClient>('createClient')!

export async function GET() {
    const clients = await getClients.execute()
    return NextResponse.json({ clients }, {})
}

export async function POST(request: NextRequest) {
    const { name, contact } = await request.json()
    createClient.execute({ name, contact })
    return NextResponse.json({ message: `client saved successful ` }, { status: 201 })
}
