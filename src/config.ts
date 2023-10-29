import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY,
    PIXABAY_URL: process.env.PIXABAY_URL,
  };
});
