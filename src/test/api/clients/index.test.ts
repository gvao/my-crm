import IClient from "@/core/Domain/Client/interface";
import { describe, expect, it } from "vitest";

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
        const { clients } = await fetcher.request('/clients')
        const fakeCLient = (clients as IClient[]).find(client => client.name === 'YuriTest')
        idClientFake = fakeCLient?.id as string
        expect(clients).toHaveLength(1)
    })

    it('DELETE', async () => {
        await fetcher.request(`/clients/${idClientFake}`, 'DELETE')
        const { clients } = await fetcher.request(`/clients`)
        expect(clients).toHaveLength(0)
    })

})

class Fetcher {
    constructor(readonly baseUrl: string) { }
    async request(path: string, method: string = 'GET', data: any = {}) {
        const url = this.baseUrl + path
        const options: Options = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        }
        if (method !== 'GET' && !!data) {
            options.body = JSON.stringify(data)
        }
        const response = await fetch(url, options)
        const json = await response.json()
        console.log({ method, json })
        return json
    }
}


interface Options {
    method: string;
    headers: {
        [key: string]: string;
    },
    body?: string;
}