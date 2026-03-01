import 'reflect-metadata';
import {
  Inject,
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  ParseIntPipe,
  Type,
} from '@nestjs/common';
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

    @Get()
    async getPaginated(
      @Query('page', ParseIntPipe) page: number,
      @Query('pageSize', ParseIntPipe) pageSize: number = 10,
    ) {
      return this.service.listPaginated(page, pageSize);
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
    value: `${routePrefix.charAt(0).toUpperCase()}${routePrefix.slice(1)}Controller`,
  });

  const proto = GenericController.prototype;

  // Metadata para ValidationPipe
  if (createDto) {
    Reflect.defineMetadata('design:paramtypes', [createDto], proto, 'create');
  }

  if (updateDto) {
    Reflect.defineMetadata('design:paramtypes', [idType, updateDto], proto, 'update');
  }

  Reflect.defineMetadata('design:paramtypes', [idType], proto, 'getOne');
  Reflect.defineMetadata('design:paramtypes', [idType], proto, 'delete');

  return GenericController;
}
