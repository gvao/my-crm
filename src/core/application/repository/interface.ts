export interface SaveRepository<T> {
    save(data: T): Promise<void>;
}

export interface GetAllRepository<T> {
    getAll(): Promise<T>;
}

export interface RemoveItemRepository<T> {
    remove(id: string): Promise<void>;
}