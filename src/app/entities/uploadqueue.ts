import { Guid } from './guid';

/**
 * Represents an UploadQueue
 */
export class UploadQueue {
  id: string;
  file: File;
  filename: File;
  progress: number;
  message: string;
  isCancel: boolean;
  isError: boolean;
  get isSuccess(): boolean {
    if (this.progress === 100) {
        return true;
    }
    return false;
  }
  get isUploading(): boolean {
    if (this.progress > 0 && this.progress < 100 ) {
      return true;
    } else {
      return false;
    }
  }
  constructor(file: File) {
    this.file = file;
    this.filename = file;
    this.progress = 0;
    this.id = Guid.newGuid();
    this.message = '';
    this.isCancel = false;
    this.isError = false;
  }
}
