import 'reflect-metadata';
import { Inject, Controller, Get, Post, Body, Param, Put, Delete, Type } from '@nestjs/common';
import GenericService from './generic.service.js';

export default function GenericController<TModel, TDto, TId>(
  routePrefix: string,
  serviceToken: string,
  createDto?: Type<any>,
  updateDto?: Type<any>,
  idType: Type<any> = String,
) {
  @Controller(routePrefix)
  class GenericController {
    constructor(@Inject(serviceToken) readonly service: GenericService<TModel, TDto, TId>) {}

    @Get()
    async getAll() {
      return this.service.listAll();
    }

    @Get(':id')
    async getOne(@Param('id') id: TId) {
      return this.service.getById(id);
    }

    @Post()
    async create(@Body() item: TDto) {
      return this.service.create(item);
    }

    @Put(':id')
    async update(@Param('id') id: TId, @Body() item: Partial<TDto>) {
      return this.service.update(id, item);
    }

    @Delete(':id')
    async delete(@Param('id') id: TId) {
      return this.service.delete(id);
    }
  }

  Object.defineProperty(GenericController, 'name', {
    value: `${routePrefix.charAt(0).toUpperCase()}${routePrefix.slice(1)}`,
  });

  const proto = GenericController.prototype;

  // Fijamos la metadata para que ValidationPipe vea la clase DTO en tiempo de ejecución
  if (createDto) {
    Reflect.defineMetadata('design:paramtypes', [createDto], proto, 'create');
  }

  // update tiene (id, item) => fijamos idType y updateDto
  if (updateDto) {
    Reflect.defineMetadata('design:paramtypes', [idType, updateDto], proto, 'update');
  }

  // id params
  Reflect.defineMetadata('design:paramtypes', [idType], proto, 'getOne');
  Reflect.defineMetadata('design:paramtypes', [idType], proto, 'delete');

  return GenericController;
}
