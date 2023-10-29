import {
  Controller,
  Get,
  ServiceUnavailableException,
  Query,
} from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('images')
  getImages(
    @Query('search') search: string,
    @Query('page') page: number,
    @Query('orientation') orientation: 'all' | 'horizontal' | 'vertical',
  ) {
    try {
      return this.apiService.getImages(search, page, orientation);
    } catch (error) {
      throw new ServiceUnavailableException(error);
    }
  }
}
