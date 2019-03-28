import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from "@angular/flex-layout";

import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

import { DeferLoadModule } from '@trademe/ng-defer-load';
import { LazyLoadComponentsComponent } from './lazy-load-components/lazy-load-components.component';
import { LazyLoadItemComponent } from './lazy-load-components/lazy-load-item/lazy-load-item.component'


@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent,
    LazyLoadComponentsComponent,
    LazyLoadItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    FlexLayoutModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
