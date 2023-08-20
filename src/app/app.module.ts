import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlToDocxComponent } from './html-to-docx/html-to-docx.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlToDocxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
