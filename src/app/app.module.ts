import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ProductDetailsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
