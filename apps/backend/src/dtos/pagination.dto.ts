import { IsInt, Min } from 'class-validator';

export default class PaginationDto {
  @IsInt({ message: 'El número de página debe ser un entero' })
  @Min(1, { message: 'El número de página debe ser mayor o igual a 1' })
  page!: number; // Página actual (por defecto: 1)
}
