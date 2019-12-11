import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
 { path: 'editor', component: EditorComponent},
 { path: 'details', component: ProductDetailsComponent},
 { path: 'about', component: AboutUsComponent},
 {path: '', redirectTo: 'details', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
