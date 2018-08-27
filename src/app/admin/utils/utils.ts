import { FormControl, FormGroup } from '@angular/forms';

export class Utils {
    public static validatefields(somefields) {
        console.log(somefields);
    }

    public static validateAllFormFields(formGroup: any) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                Utils.validateAllFormFields(control);
            }
        });
    }

    public static isFieldValid(formGroup: FormGroup, field: string) {
        return !formGroup.get(field).valid && formGroup.get(field).touched;
    }

    public static displayFieldCss(formGroup: FormGroup, field: string) {
        return {
            'has-error': Utils.isFieldValid(formGroup, field)
        };
    }

    public static removeObjectFromArray(list: any, obj: any, checking_field: any) {
        let removeIndex;
        let categories: Array<number> = list.map(function (item, index) {
            if (item[checking_field] === obj[checking_field]) {
                removeIndex = index;
                return index;
            }
        });
        list.splice(categories[removeIndex], 1);
        return list;
    }
}
