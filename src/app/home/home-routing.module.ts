import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuickviewComponent } from './quickview/quickview.component';

const routes: Routes = [
	{
		path: '',
		component: HomepageComponent
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
export class HomeRoutingModule { }
