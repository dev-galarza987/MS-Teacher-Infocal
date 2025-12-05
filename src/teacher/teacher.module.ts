import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { databaseProviders } from '../shared/database/database.providers';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService, ...databaseProviders],
})
export class TeacherModule {}
