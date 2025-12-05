import { Controller, Post, Body } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('teacher/')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post('create')
  create(@Body() createTeacher: CreateTeacherDto) {
    return this.teacherService.create(createTeacher);
  }
}
