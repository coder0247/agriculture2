import { FormBase } from '../formbase/form-base';

export class Textareabox extends FormBase<string> {
  controlType = 'textareabox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
