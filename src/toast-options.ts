import {Injectable} from '@angular/core';

@Injectable()
export class ToastOptions {
  positionClass?: string;
  maxShown?: number;
  newestOnTop?: boolean = false;
  animate?: string = 'fade';

  // override-able properties
  toastLife?: number;
  enableHTML?: boolean = false;
  dismiss?: 'auto' | 'click' | 'controlled';
  messageClass?: string;
  titleClass?: string;
  showCloseButton?: boolean = false;

  constructor(options: Object) {
    Object.assign(this, options);
  }
}
