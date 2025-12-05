import { Inject, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
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
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacher: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
