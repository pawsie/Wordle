import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LetterComponent } from '../letter/letter.component';
import { WordComponent } from '../word/word.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }