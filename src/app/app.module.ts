import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { FormsModule } from '@angular/forms';
import { AllProductComponent } from './all-product/all-product.component';


const routes: Routes = [
  { path: '', component: AllcategoryComponent},
  { path: 'product', component: AllProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllcategoryComponent,
    AllProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
