import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { QuickviewComponent } from './quickview/quickview.component';
const routes: Routes = [
	{
		path: '',
		component: ResultComponent,
	},
	{
		path: 'quickview',
		component: QuickviewComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SearchRoutingModule { }
