import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FormsModule} from '@angular/forms';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { DataBarComponent } from './components/data-bar/data-bar.component';
import { ChartComponent } from './components/chart/chart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import * as echarts from 'echarts';
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    DataBarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    NgxEchartsModule.forRoot({echarts})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
