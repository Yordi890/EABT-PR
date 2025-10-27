// generic-repository.interface.ts
export default interface IGenericRepository<TModel, TDto, TId = string> {
  findAll(): Promise<TModel[]>;
  findPaginated(page: number);
  findByField(field: string, value: any): Promise<TModel | null>;
  findById(id: TId): Promise<TModel | null>;
  create(item: TDto): Promise<TModel>;
  updateById(id: TId, item: Partial<TDto>): Promise<TModel>;
  deleteById(id: TId): Promise<void>;
  findByCriteria(criteria: any): Promise<TModel | null>;
}
