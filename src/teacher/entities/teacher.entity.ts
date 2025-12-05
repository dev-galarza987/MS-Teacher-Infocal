import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { StateTeacher } from '../types/state.teacher';

@Entity({ name: 'teachers' })
export class Teacher {
  @PrimaryGeneratedColumn({ type: 'int', name: 'teacher_id' })
  id: number;

  @Column({ type: 'int', name: 'code' })
  @Unique(['code'])
  code: number;

  @Column({ type: 'varchar', name: 'name', length: 100 })
  name: string;

  @Column({ type: 'varchar', name: 'last_name', length: 100 })
  lastname: string;

  @Column({ type: 'varchar', name: 'phone', length: 8 })
  @Unique(['phone'])
  phone: string;

  @Column({ type: 'varchar', name: 'email', length: 255 })
  @Unique(['email'])
  email: string;

  @Column({ type: 'varchar', name: 'password', length: 255 })
  password: string;

  @Column({
    type: 'enum',
    name: 'state',
    enum: StateTeacher,
    default: StateTeacher.ACTIVE,
  })
  state: StateTeacher;

  @Column({ type: 'varchar', name: 'role', length: 30, default: 'TEACHER' })
  role: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at' })
  deleted_at: Date;
}
