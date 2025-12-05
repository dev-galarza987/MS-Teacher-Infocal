import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTeacherDto {
  @IsNumber({}, { message: 'El código debe ser un número' })
  @IsInt({ message: 'El código debe ser un número entero' })
  @IsPositive({ message: 'El código debe ser un número positivo' })
  @IsNotEmpty({ message: 'El código no puede estar vacío' })
  code!: number;

  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MinLength(4, { message: 'El nombre debe tener al menos 4 caracteres' })
  @MaxLength(100, {
    message: 'El nombre debe tener como máximo 100 caracteres',
  })
  name!: string;

  @IsString({ message: 'El apellido debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El apellido no puede estar vacío' })
  @MinLength(7, { message: 'El apellido debe tener al menos 7 caracteres' })
  @MaxLength(100, {
    message: 'El nombre debe tener como máximo 100 caracteres',
  })
  lastname!: string;

  @IsString({ message: 'El teléfono debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El teléfono no puede estar vacío' })
  @MinLength(7, { message: 'El teléfono debe tener al menos 7 caracteres' })
  @MaxLength(8, {
    message: 'El nombre debe tener como máximo 8 caracteres',
  })
  @IsPhoneNumber('BO', {
    message: 'El teléfono debe ser un número de teléfono válido de Bolivia',
  })
  phone!: string;

  @IsString({ message: 'El email debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El email no puede estar vacío' })
  @MinLength(1, { message: 'El email debe tener al menos 1 caracteres' })
  email!: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La contraseña no puede estar vacío' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'La contraseña debe contener mayúsculas, minúsculas y números',
  })
  password!: string;
}
