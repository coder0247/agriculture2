import { FormBase } from '../formbase/form-base';

export class Radio extends FormBase<string> {
  controlType = 'radio';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
