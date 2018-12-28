import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiCallComponent } from './api/api-call/api-call.component';
import { HomePageService } from './Home/home-page/home-page.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApiCallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HomePageComponent,HomePageService],
  bootstrap: [AppComponent,
    HomePageComponent]
})
export class AppModule { }
