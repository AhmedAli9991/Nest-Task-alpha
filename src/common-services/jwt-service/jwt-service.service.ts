import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface login {
  name : string
  email :string,
  password :string 
}

@Injectable()
export class JwtServiceService {
  constructor(
    private jwtService: JwtService
  ) {}
  async signIn(
    data : login 
  ) {    
    const payload = { name: data.name, email: data.email, password: data.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}