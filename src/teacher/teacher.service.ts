import { Inject, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { DATA_SOURCE } from 'src/shared/database/database.providers';
import { DataSource } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(@Inject(DATA_SOURCE) private dataSource: DataSource) {}

  async create(createTeacher: CreateTeacherDto): Promise<void> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const newTeacher = queryRunner.manager.create('Teacher', createTeacher);
      await queryRunner.manager.save(newTeacher);
      console.log('Profesor creado:', newTeacher);
      await queryRunner.commitTransaction();
    } catch (error) {
      console.log('Error al crear profesor:', error);
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
