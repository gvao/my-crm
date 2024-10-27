import { describe, expect, it } from "vitest";
import Fetcher from "../../../utils/Fetcher";
import IClient from "../../../core/Domain/Client/interface";

describe('Api/clients', () => {
    const fetcher = new Fetcher('http://localhost:3000/api')
    let idClientFake = ''

    it('GET', async () => {
        const { clients } = await fetcher.request('/clients')
        expect(clients).toHaveLength(0)
    })

    it('POST', async () => {
        await fetcher.request('/clients', 'POST', {
            name: 'YuriTest',
            contact: 21999999999,
        })
        const { clients } = await fetcher.request(`/clients`)
        const fakeCLient = (clients as IClient[]).find(client => client.name === 'YuriTest')
        idClientFake = fakeCLient?.id as string
        expect(clients).toHaveLength(1)
    })

    it('GET: [clientId]', async () => {
        const json = await fetcher.request(`/clients/${idClientFake}`)
        const { client } = json
        expect(client.id).toBe(idClientFake)
    })

    it('PUT', async () => {
        await fetcher.request(`/clients/${idClientFake}`, 'PUT', {
            name: 'YuriTestUpdated',
            contact: 21999999999,
        })
        const { client } = await fetcher.request(`/clients/${idClientFake}`)
        expect(client.name).toBe('YuriTestUpdated')
        expect(client.contact).toBe(21999999999)
    })

    it('DELETE', async () => {
        await fetcher.request(`/clients/${idClientFake}`, 'DELETE')
        const { clients } = await fetcher.request(`/clients`)
        expect(clients).toHaveLength(0)
    })

})