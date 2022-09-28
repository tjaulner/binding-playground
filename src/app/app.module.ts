import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DataBindingComponent } from './nav/data-binding/data-binding.component';
import { PropertyBindingComponent } from './nav/property-binding/property-binding.component';
import { EventBindingComponent } from './nav/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './nav/two-way-binding/two-way-binding.component';
import { NoNgmodelComponent } from './nav/two-way-binding/no-ngmodel/no-ngmodel.component';
import { NgifComponent } from './nav/two-way-binding/ngif/ngif.component';
import { NgforComponent } from './nav/two-way-binding/ngfor/ngfor.component';
import { NgifelseComponent } from './nav/two-way-binding/ngifelse/ngifelse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NoNgmodelComponent,
    NgifComponent,
    NgforComponent,
    NgifelseComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
