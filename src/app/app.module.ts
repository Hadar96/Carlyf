import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechToTextComponent,
    TextToSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
