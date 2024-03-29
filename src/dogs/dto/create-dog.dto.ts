import { Dog } from '@prisma/client';

export class CreateDogDto implements Dog {
  age: number;
  breed: string;
  createdAt: Date;
  id: number;
  isAdopted: boolean;
  name: string;
  userId: number;
  updatedAt: Date;
  UserId: number;
}
