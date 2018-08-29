import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Utils } from '../utils/utils';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
const URL = '/api/upload';
@Component({
	selector: 'app-create-sub-category',
	templateUrl: './create-sub-category.component.html',
	styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {
	subcategoryForm: any;
	categories = [];
	message: string;
	message_type: string;
	defaultimage: any;
	// images upload specific
	imagedata: any;
	public uploader: FileUploader = new FileUploader({ url: URL });
	public hasBaseDropZoneOver = false;
	public hasAnotherDropZoneOver = false;
	showimageerror = false;
	uploadsuccess = false;
	tempimagename: any;
	constructor(
		private admin: AdminService,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder
	) {
		this.subcategoryForm = this.formBuilder.group({
			'subcatname': ['', Validators.required],
			'catid': ['', Validators.required],
			'status': ['1', Validators.required]
		});
		this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
	}
	onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
		this.imagedata = JSON.parse(response); // success server response
		this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
	  }
	ngOnInit() {
		this.admin.getActiveCategories().subscribe(response => {
			console.log(response);
			if (response.status) {
				this.categories = response.data.categories;
			} else {
				this.categories = [];
			}
		}, error => {
			console.log(error);
		});
	}

	addSubcategory() {
		if (typeof this.imagedata !== undefined && this.imagedata) {
			this.showimageerror = false;
			if (this.subcategoryForm.dirty && this.subcategoryForm.valid) {
				this.message = '';
				this.message_type = '';
				const data = {
					catid: this.subcategoryForm.value.catid,
					subcatname: this.subcategoryForm.value.subcatname,
					status: this.subcategoryForm.value.status,
					defaultimage: this.imagedata.data.filename,
				  };
				this.admin.addSubcategory(data).subscribe(response => {
					this.message = response.message;
					this.message_type = response.status ? 'success' : 'error';
	
					if (response.status) {
						this.showimageerror = false;
						this.uploadsuccess = true;
						window.setTimeout(() => {
							this.router.navigate(['admin/category/list']);
						}, 2000);
					}
				}, error => {
					console.log(error);
				});
			} else {
				Utils.validateAllFormFields(this.subcategoryForm);
			}
		} else {
			this.showimageerror = true;
		}
		
	}

	isFieldValid(formGroup: FormGroup, field: string) {
		return Utils.isFieldValid(formGroup, field);
	}

	displayFieldCss(formGroup: FormGroup, field: string) {
		return Utils.displayFieldCss(formGroup, field);
	}
}
