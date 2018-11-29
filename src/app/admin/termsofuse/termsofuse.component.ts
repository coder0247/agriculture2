import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-termsofuse',
  templateUrl: './termsofuse.component.html',
  styleUrls: ['./termsofuse.component.css']
})
export class TermsofuseComponent implements OnInit {
  pageForm: FormGroup;
  pageSlug = 'termsofuse';
  title='Terms of use';
  language = 'en';
  editorValue: any;
  updatedAT: any;
  editorConfig = {
     
  };
  successmsg: any;
  savesuccess = false;
  saving = false;
  loading = false;
  constructor(private fb: FormBuilder, private admin: AdminService) {}

  ngOnInit() {
    this.pageForm = this.fb.group({
      pagecontent: ''
    });
   this.loading = true;
    this.admin.getPageContent(this.pageSlug).subscribe(response => {
			if (response.status == 'success') {
        this.updatedAT = response.data.pagecontent[0].updated_at;
        this.pageForm.patchValue({
          pagecontent: response.data.pagecontent[0].content
        });
        this.loading =false;
			} 
		}, error => {
			console.log(error);
		});
  
  }
  saveapage() {
    this.savesuccess = false;
    this.successmsg='';
    const data = {
      pageslug: this.pageSlug,
      content: this.pageForm.value.pagecontent
    }
    this.saving = true;
    this.admin.updatePageContent(data).subscribe(response => {
			if (response.status) {
        this.savesuccess = true;
        this.saving =false;
        this.successmsg = response.data.pageupdate;
			} 
		}, error => {
			console.log(error);
		});
    // console.log(this.pageForm.value);
  }
}