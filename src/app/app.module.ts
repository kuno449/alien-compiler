import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompilerMainComponent } from './compiler-main/compiler-main.component';
import { CompilerInputComponent } from './compiler-input/compiler-input.component';
import { CompilerResultComponent } from './compiler-result/compiler-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CompilerMainComponent,
    CompilerInputComponent,
    CompilerResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
