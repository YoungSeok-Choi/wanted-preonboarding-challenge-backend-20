import { Column, Entity } from 'typeorm';
import { BaseEntityWithId } from './base.entity.withid';
import { User_Status } from './enums/user.status.enum';
import { UnauthorizedException } from '@nestjs/common';

@Entity()
export class User extends BaseEntityWithId {

  @Column({ default: "tester" })
  name?: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  status: User_Status;

  constructor() {
    super();
  }

  getId() {
    return this.id;
  }

  static Builder() {
    return new User();
  }

  bdName(name?: string): User {
    this.name = name;
    return this;
  }

  bdEmail(email: string): User {
    this.email = email;
    return this;
  }

  bdPassword(password: string): User {
    this.password = password;
    return this;
  }

  bdStasus(status: User_Status = User_Status.Registered): User {
    this.status = status;
    return this;
  }

  build(): User {
    return this;
  }

  validatePassword(password: string): void {
    if (this.password !== password) {
      throw new UnauthorizedException("비밀번호가 일치하지 않습니다.");
    }
  }
}