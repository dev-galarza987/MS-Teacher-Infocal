import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

export const DATA_SOURCE = 'DATA_SOURCE';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get<string>('DB_LOCAL_HOST'),
        port: configService.get<number>('DB_LOCAL_PORT'),
        username: configService.get<string>('DB_LOCAL_USERNAME'),
        password: configService.get<string>('DB_LOCAL_PASSWORD'),
        database: configService.get<string>('DB_LOCAL_DATABASE'),
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      try {
        await dataSource.initialize();
        console.log('MySQL Data Source ha sido inicializado!');
        return dataSource;
      } catch (error) {
        console.error('Error al inicializar MySQL Data Source:\n', error);
        throw new Error('Conexión fallida a la base de datos');
      }
    },
    inject: [ConfigService],
  },
];
