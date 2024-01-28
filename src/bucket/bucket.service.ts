import { Injectable } from '@nestjs/common';
import { S3Client } from '@aws-sdk/client-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';

@Injectable()
export class BucketService {
  credentials = {
    accessKeyId: process.env.BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.BUCKET_SECRET_KEY,
  };

  // Create an S3 service client object.
  s3Client = new S3Client({
    endpoint: 'https://s3.tebi.io',
    credentials: this.credentials,
    region: 'global',
  });

  async uploadFile(fileName: string, file: Buffer) {
    await this.s3Client.send(
      new PutObjectCommand({ Bucket: 'dog-adpt', Key: fileName, Body: file }),
    );
  }
}
