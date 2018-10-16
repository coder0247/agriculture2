import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FvalidationService {
  public message = new Subject<boolean>();
  setMessage(value: boolean) {
    this.message.next(value); // it is publishing this value to all the subscribers that have already subscribed to this message
  }
}
