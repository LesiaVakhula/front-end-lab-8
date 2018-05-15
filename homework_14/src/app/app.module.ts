import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
