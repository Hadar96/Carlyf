import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { BotComponent } from './components/bot/bot.component';
import { ClassifierService } from './service/classifier.service';
import { StoreService } from './service/store.service';
import { IntentPerformer } from './service/intent-performer.service';

@NgModule({
  declarations: [
    AppComponent,
    SpeechToTextComponent,
    TextToSpeechComponent,
    BotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [
    StoreService,
    IntentPerformer,
    ClassifierService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
