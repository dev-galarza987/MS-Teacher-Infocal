import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import cors from 'cors';
import { outputConsole } from './utils/output';

export type Port = string | number;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT: Port = process.env.PORT || 3000;
  app.use(
    cors({
      origin: '*',
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    }),
  );
  app.use(morgan('dev'));
  await app.listen(PORT, () => {
    outputConsole(PORT);
  });
}
void bootstrap();
