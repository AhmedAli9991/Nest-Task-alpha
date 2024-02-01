import { IsNotEmpty, IsEmail, Length, IsString } from 'class-validator';

export class UserDto {

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
  }
 