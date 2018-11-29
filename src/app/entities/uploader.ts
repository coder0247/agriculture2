import { UploadQueue } from './uploadqueue';

export class Uploader {
  queue: UploadQueue[];

  constructor() {
    this.queue = [];
  }
}
