import IClient from "./interface";

export default class Client implements IClient {
    id: string;
    name: string;
    contact: number;

    constructor({ name, contact, id }: ClientProps) {
        this.id = id
        this.name = name
        this.contact = contact
    }

    static create({ contact, name }: ClientPropsCreate): IClient {
        const id = crypto.randomUUID()
        return new Client({ id, name, contact })
    }
}

type ClientProps = Pick<IClient, 'id' | 'contact' | 'name'>
type ClientPropsCreate = Pick<ClientProps, "name" | "contact">