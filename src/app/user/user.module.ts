import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {provideHttpClient} from '@angular/common/http';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  providers: [provideHttpClient()]
})
export class UserModule { }
