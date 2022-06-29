import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './Observable/observable.component';

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  declarations: [AppComponent, ObservableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
