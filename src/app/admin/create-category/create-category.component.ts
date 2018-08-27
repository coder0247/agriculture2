import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Utils } from '../utils/utils';

@Component({
	selector: 'app-create-category',
	templateUrl: './create-category.component.html',
	styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
	categoryForm: any;
	category = [];
	message: string;
	message_type: string;

	constructor(
		private admin: AdminService,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder
	) {
		this.categoryForm = this.formBuilder.group({
			'catname': ['', Validators.required],
			'status': ['1', Validators.required]
		});
	}

	ngOnInit() {
	}

	addCategory() {
		if (this.categoryForm.dirty && this.categoryForm.valid) {
			this.message = '';
			this.message_type = '';
			this.admin.addCategory(this.categoryForm.value).subscribe(response => {
				this.message = response.message;
				this.message_type = response.status ? 'success' : 'error';
				if (response.status) {
					window.setTimeout(() => {
						this.router.navigate(['admin/category/list']);
					}, 2000);
				}
			}, error => {
				console.log(error);
			});
		} else {
			Utils.validateAllFormFields(this.categoryForm);
		}
	}

	isFieldValid(formGroup: FormGroup, field: string) {
		return Utils.isFieldValid(formGroup, field);
	}

	displayFieldCss(formGroup: FormGroup, field: string) {
		return Utils.displayFieldCss(formGroup, field);
	}
}
