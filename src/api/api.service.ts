import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import config from 'src/config';

@Injectable()
export class ApiService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  async getImages(
    search: string,
    page?: number,
    orientation?: 'all' | 'horizontal' | 'vertical',
  ) {
    try {
      const apiURL = this.configService.PIXABAY_URL;
      const apiKey = this.configService.API_KEY;

      // Boilerplate code that will be used in upcoming features
      const pageQ = page || 1;
      const orientationQ = orientation || 'all';
      const query = search || '';

      const url = `${apiURL}/?key=${apiKey}&q=${query}&per_page=48&page=${pageQ}&orientation=${orientationQ}`;
      const response = await fetch(url).then((result) => result.json());

      if (response) {
        return response.hits;
      }
    } catch (error) {
      throw new Error('service not available');
    }
  }
}
