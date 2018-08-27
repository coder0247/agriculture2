import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Utils } from '../utils/utils';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
	categories = [];
	categoryLoaded = false;
	categorySelected = false;
	subcategories = [];
	subCategoryLoaded = false;
	message: string;
	message_type: string;

	constructor(
		private admin: AdminService
	) { }

	ngOnInit() {
		this.admin.getCategoryList().subscribe(response => {
			if (response.status) {
				this.categories = response.data.categories;
			} else {
				this.categories = [];
			}
			this.categoryLoaded = true;
		}, error => {
			console.log(error);
		});
	}

	showSubcategoryList(category_id: string) {
		this.subCategoryLoaded = false;
		this.categorySelected = true;
		this.admin.getSubcategoryListByCategory(category_id).subscribe(response => {
			if (response.status) {
				this.subcategories = response.data.subcategories;
			} else {
				this.subcategories = [];
			}
			this.subCategoryLoaded = true;
		}, error => {
			console.log(error);
		});
	}

	deleteCategory(category: any) {
		var ans = confirm('Are you sure you want to delete category : "' + category.catname + '" ?');
		if (ans) {
			this.message = '';
			this.message_type = '';
			this.admin.deleteCategory(category._id).subscribe(response => {
				this.message = response.message;
				this.message_type = response.status ? 'success' : 'error';

				if (response.status) {
					this.categories = Utils.removeObjectFromArray(this.categories, category, '_id');
					this.subcategories = [];
				}
			}, error => {
				console.log(error);
			});
		}
	}

	deleteSubcategory(subcategory: any) {
		var ans = confirm('Are you sure you want to delete subcategory : "' + subcategory.subcatname + '" ?');
		if (ans) {
			this.message = '';
			this.message_type = '';
			this.admin.deleteSubcategory(subcategory._id).subscribe(response => {
				this.message = response.message;
				this.message_type = response.status ? 'success' : 'error';

				if (response.status) {
					this.subcategories = Utils.removeObjectFromArray(this.subcategories, subcategory, '_id');
				}
			}, error => {
				console.log(error);
			});
		}
	}
}
