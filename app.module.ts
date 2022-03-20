import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewbusComponent } from './newbus/newbus.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BussearchComponent } from './bussearch/bussearch.component';
import { BookbusComponent } from './bookbus/bookbus.component';
import { CanclebusComponent } from './canclebus/canclebus.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { AddbusComponent } from './addbus/addbus.component';
@NgModule({
  declarations: [
    AppComponent,
    NewbusComponent,
    BussearchComponent,
    BookbusComponent,
    CanclebusComponent,
    DeletebusComponent,
    AddbusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
