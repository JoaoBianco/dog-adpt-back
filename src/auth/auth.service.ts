import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneWithEmail(email);

    if (!user && user !== null) return HttpStatus.NOT_FOUND;
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...parsedUser } = user;
      return parsedUser;
    }
  }

  async login(user: User) {
    const userData = await this.userService.findOneWithEmail(user.email);

    const payload = {
      email: userData.email,
      sub: { id: userData.id, name: userData.name, isAdmin: userData.isAdmin },
    };
    const { password, ...parsedUser } = userData;
    return {
      ...parsedUser,
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refresh(user) {
    let userData = this.jwtService.decode(user);
    userData = {
      email: userData.email,
      sub: {
        id: userData.sub.id,
        name: userData.sub.name,
        isAdmin: userData.sub.isAdmin,
      },
    };

    return {
      access_token: this.jwtService.sign(userData),
    };
  }
}
