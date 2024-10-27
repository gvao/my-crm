export default class DependenciesRepository {
    private static dependencies: Map<string, unknown> = new Map()

    getDependency<T>(name: string): T | undefined {
        return DependenciesRepository.dependencies.get(name) as T | undefined
    }

    async cadasterDependency(name: string, dependency: unknown): Promise<void> {
        DependenciesRepository.dependencies.set(name, dependency)
    }
}
