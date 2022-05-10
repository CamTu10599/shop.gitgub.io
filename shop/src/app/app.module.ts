import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './routes/admin.routing';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DasboardComponent } from './components/dashboard/dasboard.component';

const routers: Routes=[
  { path: 'productlist', component: ProductListComponent },
  { path: 'dashboard', component: DasboardComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'productlist' },
  { path: 'login', component: LoginComponent },


]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AdminRoutes,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers)  //để nạp thông tin các định nghĩa router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
