import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompilerMainComponent} from './compiler-main/compiler-main.component';
import {CompilerInputComponent} from './compiler-main/compiler-input/compiler-input.component';
import {CompilerResultComponent} from './compiler-main/compiler-result/compiler-result.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompilerMainComponent,
    CompilerInputComponent,
    CompilerResultComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
