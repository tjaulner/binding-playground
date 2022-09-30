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
import { NgifComponent } from './nav/directives/ngif/ngif.component';
import { NgforComponent } from './nav/directives/ngfor/ngfor.component';
import { NgifelseComponent } from './nav/directives/ngifelse/ngifelse.component';
import { DirectivesComponent } from './nav/directives/directives.component';


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
    NgifelseComponent,
    DirectivesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
