export default class Fetcher {
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
        const response = await fetch(url, { cache: "no-cache", ...options })
        if(!response.status.toString().startsWith('2')) throw new Error('bad request')
        const json = await response.json()
        // console.log({ method, json })
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